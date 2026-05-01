const { chromium } = require("playwright");

async function main() {
	const baseUrl = process.env.ATL_BASE_URL || "http://localhost:4173/";
	const origin = new URL(baseUrl).origin;
	const browser = await chromium.launch();
	const page = await browser.newPage();
	page.on("dialog", (dialog) => dialog.accept());
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
	await page.route("**/mock-llm-error", async (route) => {
		await route.fulfill({
			contentType: "application/json",
			status: 500,
			body: JSON.stringify({ error: "do-not-persist-sensitive-provider-body" }),
		});
	});
	await page.route("**/mock-llm-text", async (route) => {
		await route.fulfill({
			contentType: "application/json",
			body: JSON.stringify({
				choices: [
					{
						message: {
							content: "Plain text provider output for fallback parser.",
						},
					},
				],
			}),
		});
	});
	await page.route("**/mock-elsevier-error**", async (route) => {
		await route.fulfill({
			contentType: "application/json",
			status: 503,
			body: JSON.stringify({ error: "do-not-persist-elsevier-body" }),
		});
	});
	await page.route(/\/mock-elsevier(?:\?|$)/, async (route) => {
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
	const openAsset = async (target) => {
		await page.click('[data-target="assets"]');
		await page.click(`.asset-card[data-target="${target}"]`);
	};
	const openReviewTool = async (target) => {
		await page.click('[data-target="review"]');
		await page.click(`.asset-card[data-target="${target}"]`);
	};
	await page.click("#seedExample");
	await page.click('[data-phase="conceptualisation"]');
	await page.click('[data-run="phenomenon_definition"]');
	await page.waitForFunction(() => {
		const state = JSON.parse(localStorage.getItem("atl-state"));
		return (
			state.decisions.phenomenon_definition?.status === "blocked" &&
			!state.outputs.phenomenon_definition &&
			state.providerSettings.lastStatus.includes("Live LLM provider required")
		);
	});
	await openAsset("settings");
	await page.fill("#llmProviderName", "Mock OpenAI-compatible");
	await page.fill("#llmEndpoint", `${origin}/mock-llm`);
	await page.fill("#llmApiKey", "test-llm-key");
	await page.fill("#llmModel", "mock-theory-model");
	await page.fill("#elsevierEndpoint", `${origin}/mock-elsevier`);
	await page.fill("#elsevierApiKey", "test-elsevier-key");
	await page.fill("#elsevierQuerySetting", "agentic AI governance");
	await page.click("#saveProviders");
	await openAsset("sources");
	await page.fill("#elsevierQuery", "agentic AI governance failure");
	await openAsset("settings");
	await page.fill("#elsevierEndpoint", `${origin}/mock-elsevier-error`);
	await page.click("#saveProviders");
	await openAsset("sources");
	await page.click("#discoverElsevier");
	await page.waitForFunction(() =>
		JSON.parse(
			localStorage.getItem("atl-state"),
		).providerSettings.lastStatus.includes("HTTP 503"),
	);
	await openAsset("settings");
	await page.fill("#elsevierEndpoint", `${origin}/mock-elsevier`);
	await page.click("#saveProviders");
	await openAsset("sources");
	await page.click("#discoverElsevier");
	await page.waitForFunction(() =>
		JSON.parse(localStorage.getItem("atl-state")).references.some((reference) =>
			reference.title.includes("Mock Elsevier article"),
		),
	);
	await openAsset("documents");
	await page.setInputFiles("#docFile", "requirements.md");
	await page.click("#addDocument");
	await page.click('[data-phase="conceptualisation"]');
	await page.click('[data-run="phenomenon_definition"]');
	await page.waitForFunction(() =>
		JSON.parse(localStorage.getItem("atl-state")).provenance.some(
			(entry) => entry.model === "mock-theory-model",
		),
	);
	await openAsset("settings");
	await page.fill("#llmEndpoint", `${origin}/mock-llm-error`);
	await page.click("#saveProviders");
	await page.click('[data-phase="conceptualisation"]');
	await page.click('[data-run="reference_mapping"]');
	await page.waitForFunction(() => {
		const state = JSON.parse(localStorage.getItem("atl-state"));
		return (
			state.providerSettings.lastStatus.includes("HTTP 500") &&
			state.decisions.reference_mapping?.status === "failed" &&
			!state.outputs.reference_mapping
		);
	});
	await openAsset("settings");
	await page.fill("#llmEndpoint", `${origin}/mock-llm-text`);
	await page.click("#saveProviders");
	await page.click('[data-phase="conceptualisation"]');
	await page.click('[data-run="construct_decomposition"]');
	await page.waitForFunction(() => {
		const state = JSON.parse(localStorage.getItem("atl-state"));
		return state.outputs.construct_decomposition?.critique.includes("non-JSON");
	});
	await openAsset("settings");
	await page.fill("#llmEndpoint", `${origin}/mock-llm`);
	await page.click("#saveProviders");

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

	await openReviewTool("evaluation");
	await page.fill('[data-score="Overall"]', "5");
	await page.click("#saveScores");

	await openReviewTool("export");
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
		noConfigBlocked: await page.evaluate(() => {
			const state = JSON.parse(localStorage.getItem("atl-state"));
			return state.provenance.some(
				(entry) =>
					entry.human_decision === "blocked" &&
					entry.model === "no-live-llm-output" &&
					entry.configuration?.execution === "llm-required",
			);
		}),
		providerFailureBlocked: await page.evaluate(() => {
			const state = JSON.parse(localStorage.getItem("atl-state"));
			return state.provenance.some(
				(entry) =>
					entry.human_decision === "failed" &&
					entry.model === "no-live-llm-output" &&
					entry.output_summary.includes("No fallback output"),
			);
		}),
		elsevierReference: await page.evaluate(() =>
			JSON.parse(localStorage.getItem("atl-state")).references.some(
				(reference) => reference.source.includes("10.0000/mock-agentic-theory"),
			),
		),
		genericProviderErrors: await page.evaluate(() => {
			const stateText = localStorage.getItem("atl-state");
			return (
				stateText.includes("HTTP 500") &&
				stateText.includes("HTTP 503") &&
				!stateText.includes("do-not-persist-sensitive-provider-body") &&
				!stateText.includes("do-not-persist-elsevier-body")
			);
		}),
		nonJsonFallback: await page.evaluate(() =>
			JSON.parse(localStorage.getItem("atl-state")).provenance.some((entry) =>
				entry.full_output?.critique?.includes("non-JSON"),
			),
		),
		disclosureCopy: (await page.textContent("body")).includes(
			"Exported files may contain sensitive project materials",
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
	if (!result.noConfigBlocked)
		throw new Error(
			"No-config agent run was not blocked as live-LLM required.",
		);
	if (!result.providerFailureBlocked)
		throw new Error(
			"Provider failure generated fallback output instead of failing closed.",
		);
	if (!result.elsevierReference)
		throw new Error("Mock Elsevier discovery did not add a source reference.");
	if (!result.genericProviderErrors)
		throw new Error(
			"Provider error bodies were persisted or generic errors missing.",
		);
	if (!result.nonJsonFallback)
		throw new Error("Non-JSON LLM fallback was not recorded.");
	if (!result.disclosureCopy)
		throw new Error("Export disclosure copy is missing.");

	await browser.close();
}

main().catch(async (error) => {
	console.error(error);
	process.exit(1);
});
