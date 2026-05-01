const { chromium } = require("playwright");

async function main() {
  const baseUrl = process.env.ATL_BASE_URL || "http://localhost:4173/";
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseUrl);
  await page.click("#seedExample");

  for (const phase of ["conceptualisation", "measurement", "design", "refinement"]) {
    await page.click(`[data-phase="${phase}"]`);
    await page.click("#runAgent");
    await page.fill("#reviewComment", `Approved ${phase} output after human review.`);
    await page.click("#approveBtn");
  }

  await page.click('[data-target="export"]');
  const result = {
    title: await page.textContent("#projectTitle"),
    approvals: await page.textContent("#approvedCount"),
    logs: await page.textContent("#logCount"),
    hasGenAiAppendix: (await page.textContent(".export-box")).includes("GenAI-use appendix"),
  };
  console.log(JSON.stringify(result, null, 2));

  if (result.title !== "Agentic AI Governance in Enterprise Systems") throw new Error("Example project title did not load.");
  if (result.approvals !== "4") throw new Error("Expected four approvals.");
  if (!result.hasGenAiAppendix) throw new Error("Markdown export preview is missing GenAI-use appendix.");

  await browser.close();
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
