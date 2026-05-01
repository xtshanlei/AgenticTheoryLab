const { chromium } = require("playwright");

async function main() {
	const baseUrl = process.env.ATL_BASE_URL || "http://localhost:4173/";
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto(baseUrl);
	await page.evaluate(() => localStorage.clear());
	await page.reload();
	await page.click("#seedExample");
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

	await browser.close();
}

main().catch(async (error) => {
	console.error(error);
	process.exit(1);
});
