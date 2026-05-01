const { chromium } = require("playwright");

async function main() {
	const baseUrl = process.env.ATL_BASE_URL || "http://localhost:4173/";
	const origin = new URL(baseUrl).origin;
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.route("**/mock-llm", async (route) => {
		await route.fulfill({
			contentType: "application/json",
			body: JSON.stringify({
				choices: [
					{
						message: {
							content: JSON.stringify({
								memo: "Mock provider generated a source-aware scholarly output.",
								headers: ["Construct", "Definition", "Evidence", "Warning"],
								rows: [
									[
										"Agentic governance",
										"Human oversight of autonomous AI action.",
										"Registered sources must be verified.",
										"Do not publish without citation checks.",
									],
								],
								critique: "Mock provider critique: verify grounding.",
								alternatives: ["Compare with deterministic fallback."],
							}),
						},
					},
				],
			}),
		});
	});
	await page.route("**/mock-elsevier**", async (route) => {
		await route.fulfill({
			contentType: "application/json",
			body: JSON.stringify({
				"search-results": {
					entry: [
						{
							"dc:title": "Mock Elsevier article on agentic systems",
							"prism:doi": "10.0000/mock-agentic-theory",
							"prism:coverDate": "2026-01-01",
							"prism:publicationName": "Mock Journal of Information Systems",
						},
					],
				},
			}),
		});
	});
	await page.goto(baseUrl);
	await page.evaluate(() => localStorage.clear());
	await page.reload();
	await page.click("#seedExample");
	await page.click('[data-target="settings"]');
	await page.fill("#llmProviderName", "Mock OpenAI-compatible");
	await page.fill("#llmEndpoint", `${origin}/mock-llm`);
	await page.fill("#llmApiKey", "test-llm-key");
	await page.fill("#llmModel", "mock-theory-model");
	await page.fill("#elsevierEndpoint", `${origin}/mock-elsevier`);
	await page.fill("#elsevierApiKey", "test-elsevier-key");
	await page.fill("#elsevierQuerySetting", "agentic AI governance");
	await page.click("#saveProviders");
	await page.click('[data-target="sources"]');
	await page.click("#discoverElsevier");
	await page.waitForFunction(() =>
		JSON.parse(localStorage.getItem("atl-state")).references.some((reference) =>
			reference.title.includes("Mock Elsevier article"),
		),
	);
	await page.click('[data-target="documents"]');
	await page.setInputFiles("#docFile", "requirements.md");
	await page.click("#addDocument");

	for (const phase of [
		"conceptualisation",
		"measurement",
		"design",
		"refinement",
	]) {
		await page.click(`[data-phase="${phase}"]`);
		await page.click("#runPhase");
		await page.waitForFunction((phaseName) => {
			const phaseAgents = {
				conceptualisation: [
					"phenomenon_definition",
					"reference_mapping",
					"construct_decomposition",
					"mechanism_articulation",
				],
				measurement: [
					"item_generation",
					"item_sorting",
					"measurement_model",
					"psychometric_validation",
				],
				design: [
					"design_selection",
					"experimental_design",
					"longitudinal_design",
					"econometric_identification",
				],
				refinement: [
					"competing_model",
					"mediation_moderation",
					"robustness_validity",
					"theory_refinement",
				],
			};
			const state = JSON.parse(localStorage.getItem("atl-state"));
			return phaseAgents[phaseName].every((agentId) => state.outputs[agentId]);
		}, phase);
	}

	const phaseAgents = {
		conceptualisation: [
			"phenomenon_definition",
			"reference_mapping",
			"construct_decomposition",
			"mechanism_articulation",
		],
		measurement: [
			"item_generation",
			"item_sorting",
			"measurement_model",
			"psychometric_validation",
		],
		design: [
			"design_selection",
			"experimental_design",
			"longitudinal_design",
			"econometric_identification",
		],
		refinement: [
			"competing_model",
			"mediation_moderation",
			"robustness_validity",
			"theory_refinement",
		],
	};

	for (const [phase, agentIds] of Object.entries(phaseAgents)) {
		await page.click(`[data-phase="${phase}"]`);
		for (const agentId of agentIds) {
			await page.click(`[data-review="${agentId}"]`);
			await page.fill(
				"#reviewComment",
				`Approved ${agentId} output after human review.`,
			);
			await page.click("#approveBtn");
		}
		await page.fill("#reviewComment", `Approved ${phase} phase package.`);
		await page.click("#approvePhase");
	}

	await page.click('[data-target="evaluation"]');
	await page.fill('[data-score="Overall"]', "5");
	await page.click("#saveScores");

	await page.click('[data-target="export"]');
	const result = {
		title: await page.textContent("#projectTitle"),
		approvals: await page.textContent("#approvedCount"),
		logs: await page.textContent("#logCount"),
		hasGenAiAppendix: (await page.textContent(".export-box")).includes(
			"GenAI-use appendix",
		),
		hasAllAgents: (await page.textContent(".export-box")).includes(
			"Theory Refinement Agent",
		),
		hasDecisionTrail: (await page.textContent("body")).includes(
			"Decision trail",
		),
		documents: await page.evaluate(
			() => JSON.parse(localStorage.getItem("atl-state")).documents.length,
		),
		phaseApprovals: await page.evaluate(
			() =>
				Object.values(
					JSON.parse(localStorage.getItem("atl-state")).phaseDecisions,
				).filter((decision) => decision.status === "approved").length,
		),
		llmModelRecorded: await page.evaluate(() =>
			JSON.parse(localStorage.getItem("atl-state")).provenance.some(
				(entry) => entry.model === "mock-theory-model",
			),
		),
		redactedKeys: await page.evaluate(() => {
			const state = JSON.parse(localStorage.getItem("atl-state"));
			return state.provenance.some(
				(entry) =>
					entry.configuration?.provider?.llm?.apiKey === "[configured]" &&
					entry.configuration?.provider?.elsevier?.apiKey === "[configured]",
			);
		}),
		elsevierReference: await page.evaluate(() =>
			JSON.parse(localStorage.getItem("atl-state")).references.some(
				(reference) => reference.source.includes("10.0000/mock-agentic-theory"),
			),
		),
	};
	console.log(JSON.stringify(result, null, 2));

	if (result.title !== "Agentic AI Governance in Enterprise Systems")
		throw new Error("Example project title did not load.");
	if (result.approvals !== "16") throw new Error("Expected sixteen approvals.");
	if (!result.hasGenAiAppendix)
		throw new Error("Markdown export preview is missing GenAI-use appendix.");
	if (!result.hasAllAgents)
		throw new Error("Full agent workflow is missing from export preview.");
	if (!result.hasDecisionTrail)
		throw new Error("Decision trail export is missing.");
	if (result.documents < 1)
		throw new Error("Uploaded document was not stored.");
	if (result.phaseApprovals !== 4)
		throw new Error("Expected four approved phase checkpoints.");
	if (!result.llmModelRecorded)
		throw new Error("LLM provider model was not recorded in provenance.");
	if (!result.redactedKeys)
		throw new Error("Provider keys were not redacted in provenance.");
	if (!result.elsevierReference)
		throw new Error("Mock Elsevier discovery did not add a source reference.");

	await browser.close();
}

main().catch(async (error) => {
	console.error(error);
	process.exit(1);
});
