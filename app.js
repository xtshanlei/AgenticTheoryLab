const phases = [
  {
    id: "conceptualisation",
    short: "Phase 1",
    title: "Conceptualisation Lab",
    agent: "Construct Decomposition Agent",
    outputTitle: "Construct table",
  },
  {
    id: "measurement",
    short: "Phase 2",
    title: "Measurement Lab",
    agent: "Item Generation Agent",
    outputTitle: "Measurement item table",
  },
  {
    id: "design",
    short: "Phase 3",
    title: "Design Lab",
    agent: "Research Design Selection Agent",
    outputTitle: "Research design recommendation",
  },
  {
    id: "refinement",
    short: "Phase 4",
    title: "Refinement Lab",
    agent: "Competing Model Agent",
    outputTitle: "Competing model table",
  },
];

const example = {
  title: "Agentic AI Governance in Enterprise Systems",
  description: "How does agentic AI observability influence human control, trust calibration, and accountability in enterprise workflows?",
  field: "Information Systems / Digital Governance",
  journal: "MIS Quarterly / ISR",
  context: "Regulated enterprise workflows where autonomous agents perform analysis, retrieval, and decision-support tasks.",
};

const templates = {
  conceptualisation: {
    memo: "Conceptual framing memo: Agentic AI governance can be framed as a socio-technical control problem. The focal phenomenon is the delegation of bounded authority to software agents embedded in enterprise workflows. The theoretical scope centres on observability, human override capacity, accountability clarity, and trust calibration.",
    headers: ["Broad construct", "Proposed dimensions", "Conceptual definition", "Validity warning"],
    rows: [
      ["Agent observability", "Goal visibility; plan visibility; tool-use visibility; data-access visibility; decision-trace visibility", "The degree to which researchers or organisational users can inspect what an AI agent is attempting, doing, and recording.", "May overlap with explainability unless visibility and explanation are separated."],
      ["Human control", "Monitoring capacity; override capacity; escalation capacity; review capacity", "The ability of accountable humans to detect, intervene in, and revise agentic actions.", "Avoid treating control as only a technical permission setting."],
      ["Accountability clarity", "Responsibility assignment; role clarity; auditability; liability perception", "The perceived and documented clarity of who is responsible for agent-supported action.", "Needs a clear level of analysis: individual, team, or organisation."],
    ],
  },
  measurement: {
    memo: "Measurement memo: Items are phrased as researcher-editable candidates. They avoid double-barrelled wording and distinguish perceptual survey items from behavioural or log-based indicators.",
    headers: ["Construct", "Candidate item", "Indicator type", "Validity warning"],
    rows: [
      ["Agent observability", "I can review the sequence of actions taken by the AI agent.", "Perceptual survey item", "Clarify whether the user reviewed a trace or only a summary."],
      ["Human override capacity", "I can stop or redirect the AI agent when its actions are inappropriate.", "Perceptual survey item", "May require behavioural log evidence for stronger validity."],
      ["Accountability clarity", "Responsibilities for AI-agent-supported decisions are clearly assigned.", "Perceptual survey item", "Specify whether responsibility is formal policy or personal perception."],
      ["Governance latency", "Elapsed time between agent warning and human intervention.", "System-log indicator", "Requires timestamped workflow records."],
    ],
  },
  design: {
    memo: "Research design recommendation: A controlled experiment is the primary MVP design because observability levels can be manipulated and intervention quality can be observed. A longitudinal panel is a secondary design for trust calibration over time.",
    headers: ["Research question", "Recommended design", "Data requirement", "Validity threat"],
    rows: [
      ["Does observability improve intervention quality?", "Controlled experiment with low, medium, and high observability conditions", "Task outcomes, intervention accuracy, cognitive load", "Demand effects and artificial task setting"],
      ["How does trust calibration evolve?", "Longitudinal panel study", "Repeated trust, delegation, override, and performance measures", "Attrition and maturation effects"],
      ["Do governance tools reduce incidents?", "Observational econometric study", "Firm-level incident and adoption records", "Selection bias and reverse causality"],
    ],
  },
  refinement: {
    memo: "Theory refinement memo: The core observability model should be compared against trust calibration, control burden, and socio-technical fit explanations before final claims are approved.",
    headers: ["Model", "Core logic", "Competing prediction", "Refinement implication"],
    rows: [
      ["Observability model", "Visibility improves earlier detection and better intervention.", "More observability improves governance effectiveness.", "Retain if high-observability conditions improve intervention accuracy."],
      ["Trust calibration model", "Appropriate trust explains delegation and monitoring quality.", "Trust calibration explains performance better than visibility alone.", "Add trust calibration as mediator or rival mechanism."],
      ["Control burden model", "Too much information increases review burden.", "Excessive observability reduces performance.", "Specify boundary condition for cognitive load."],
      ["Socio-technical fit model", "Fit between autonomy level and workflow risk matters.", "Observability helps only under high workflow coupling or risk.", "Add context-specific moderation."],
    ],
  },
};

const state = JSON.parse(localStorage.getItem("atl-state") || "null") || {
  project: { title: "Untitled theory-construction project", description: "", field: "", journal: "", context: "" },
  active: "project",
  outputs: {},
  decisions: {},
  provenance: [],
};

const view = document.getElementById("view");

function save() {
  localStorage.setItem("atl-state", JSON.stringify(state));
  updateChrome();
}

function record(phase, agent, input, output, decision = "generated", humanComment = "") {
  state.provenance.unshift({
    project_id: slug(state.project.title || "atl_project_001"),
    phase,
    agent,
    input,
    model: "deterministic-mvp-agent-v1",
    sources_used: ["requirements.md", "Stitch design project 13154548682289785713"],
    output_summary: output,
    human_decision: decision,
    human_comment: humanComment,
    timestamp: new Date().toISOString(),
  });
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "atl_project_001";
}

function updateChrome() {
  document.getElementById("projectTitle").textContent = state.project.title || "Untitled theory-construction project";
  document.getElementById("projectDescription").textContent = state.project.description || "Define a project, run one bounded agent per phase, review every output, and export an auditable research package.";
  document.getElementById("approvedCount").textContent = Object.values(state.decisions).filter((d) => d.status === "approved").length;
  document.getElementById("logCount").textContent = state.provenance.length;
  renderNav();
  renderStepper();
  renderPreview();
}

function renderNav() {
  const items = [{ id: "project", title: "Create Project" }, { id: "dashboard", title: "Dashboard" }, ...phases, { id: "review", title: "Review Hub" }, { id: "export", title: "Provenance & Export" }];
  document.getElementById("nav").innerHTML = items.map((item) => `<button class="nav-item ${state.active === item.id ? "active" : ""}" data-target="${item.id}"><span>${item.title}</span><span>${statusMark(item.id)}</span></button>`).join("");
  document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => show(button.dataset.target)));
}

function statusMark(id) {
  if (id === "project" && state.project.title && state.project.title !== "Untitled theory-construction project") return "✓";
  if (state.outputs[id]) return state.decisions[id]?.status === "approved" ? "✓" : "•";
  return "";
}

function renderStepper() {
  document.getElementById("stepper").innerHTML = phases.map((phase) => {
    const complete = state.decisions[phase.id]?.status === "approved";
    return `<button class="step ${complete ? "complete" : ""} ${state.active === phase.id ? "active" : ""}" data-phase="${phase.id}"><span>${phase.short}</span>${phase.title.replace(" Lab", "")}</button>`;
  }).join("");
  document.querySelectorAll(".step").forEach((button) => button.addEventListener("click", () => show(button.dataset.phase)));
}

function renderPreview() {
  const records = state.provenance.slice(0, 6);
  document.getElementById("provenancePreview").innerHTML = records.length ? records.map((entry) => `<div class="log-item"><strong>${entry.phase}</strong><br>${entry.human_decision}: ${entry.output_summary}<br><small>${new Date(entry.timestamp).toLocaleString()}</small></div>`).join("") : "<p>No provenance records yet.</p>";
}

function show(target) {
  state.active = target;
  save();
  if (target === "project") renderProject();
  else if (target === "dashboard") renderDashboard();
  else if (target === "review") renderReview();
  else if (target === "export") renderExport();
  else renderPhase(target);
}

function renderProject() {
  view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Initialize inquiry</p><h2>Create new research project</h2><p>Define the parameters of the theoretical investigation before running phase agents.</p><div class="form-grid"><label>Project title<input id="titleInput" value="${escapeAttr(state.project.title)}"></label><label>Target field or journal<input id="journalInput" value="${escapeAttr(state.project.journal)}"></label><label class="wide">Research problem<textarea id="descriptionInput">${escapeHtml(state.project.description)}</textarea></label><label>Field<input id="fieldInput" value="${escapeAttr(state.project.field)}"></label><label>Empirical context<input id="contextInput" value="${escapeAttr(state.project.context)}"></label></div><div class="button-row"><button id="saveProject">Save project</button><button class="secondary" id="exampleProject">Use example template</button></div></section>`;
  document.getElementById("saveProject").addEventListener("click", saveProject);
  document.getElementById("exampleProject").addEventListener("click", loadExample);
}

function saveProject() {
  state.project = {
    title: document.getElementById("titleInput").value.trim(),
    description: document.getElementById("descriptionInput").value.trim(),
    field: document.getElementById("fieldInput").value.trim(),
    journal: document.getElementById("journalInput").value.trim(),
    context: document.getElementById("contextInput").value.trim(),
  };
  record("project", "Project Workspace", "Create research project", `Project saved: ${state.project.title}`, "saved");
  save();
  renderProject();
}

function loadExample() {
  state.project = { ...example };
  record("project", "Example Project Template", "Load MVP example", "Loaded agentic AI governance example", "saved");
  save();
  show("dashboard");
}

function renderDashboard() {
  view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Project dashboard</p><h2>${escapeHtml(state.project.title)}</h2><p>${escapeHtml(state.project.description || "No research problem defined yet.")}</p><table><thead><tr><th>Phase</th><th>MVP agent</th><th>Required output</th><th>Human decision</th></tr></thead><tbody>${phases.map((phase) => `<tr><td>${phase.title}</td><td>${phase.agent}</td><td>${phase.outputTitle}</td><td><span class="pill">${state.decisions[phase.id]?.status || "pending"}</span></td></tr>`).join("")}</tbody></table></section><section class="card agent-zone"><p class="eyebrow">Transparency principle</p><p>Each output is deterministic in this MVP, source-bounded to the PRD example, and logged with model version, source references, human decisions, and export history.</p></section>`;
}

function renderPhase(id) {
  const phase = phases.find((item) => item.id === id);
  const output = state.outputs[id];
  view.innerHTML = `<section class="card ribbon"><p class="eyebrow">${phase.short} / ${phase.agent}</p><h2>${phase.title}</h2><p>${templates[id].memo}</p><button id="runAgent">Run ${phase.agent}</button></section>${output ? renderOutput(id, output) : ""}`;
  document.getElementById("runAgent").addEventListener("click", () => runAgent(id));
}

function runAgent(id) {
  state.outputs[id] = JSON.parse(JSON.stringify(templates[id]));
  state.decisions[id] = { status: "awaiting review", comment: "" };
  record(id, phases.find((phase) => phase.id === id).agent, state.project.description || "Example IS research problem", templates[id].memo, "generated");
  save();
  renderPhase(id);
}

function renderOutput(id, output) {
  return `<section class="card"><p class="eyebrow">Agent output / Human editable</p><h3>${phases.find((phase) => phase.id === id).outputTitle}</h3><p>${escapeHtml(output.memo)}</p><table><thead><tr>${output.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead><tbody>${output.rows.map((row) => `<tr>${row.map((cell) => `<td contenteditable="true">${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table><p class="warning">Citation warning: this MVP does not fabricate literature citations. Use the human checkpoint to request citation verification before publication claims.</p></section>`;
}

function phaseDecision(status) {
  if (!phases.some((phase) => phase.id === state.active)) return;
  const comment = document.getElementById("reviewComment").value.trim();
  state.decisions[state.active] = { status, comment };
  record(state.active, "Human Review Checkpoint", `Review ${state.active}`, `${status} by researcher`, status, comment);
  document.getElementById("reviewComment").value = "";
  save();
  renderPhase(state.active);
}

function renderReview() {
  view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Human Review & Approval Hub</p><h2>Mandatory checkpoints</h2><table><thead><tr><th>Checkpoint</th><th>Human decision</th><th>Comment</th></tr></thead><tbody>${phases.map((phase) => `<tr><td>End of ${phase.short}: approve ${phase.outputTitle}</td><td><span class="pill">${state.decisions[phase.id]?.status || "pending"}</span></td><td>${escapeHtml(state.decisions[phase.id]?.comment || "—")}</td></tr>`).join("")}</tbody></table></section>`;
}

function renderExport() {
  const markdown = buildMarkdown();
  const json = JSON.stringify(state.provenance, null, 2);
  view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Provenance & Export</p><h2>Research package exports</h2><div class="button-row"><button id="downloadMd">Download Markdown report</button><button class="secondary" id="downloadJson">Download JSON provenance</button></div></section><section class="card"><p class="eyebrow">Markdown preview</p><div class="export-box">${escapeHtml(markdown)}</div></section><section class="card"><p class="eyebrow">JSON provenance preview</p><div class="export-box">${escapeHtml(json)}</div></section>`;
  document.getElementById("downloadMd").addEventListener("click", () => download("agentic-theory-lab-report.md", markdown, "text/markdown"));
  document.getElementById("downloadJson").addEventListener("click", () => download("agentic-theory-lab-provenance.json", json, "application/json"));
}

function buildMarkdown() {
  const sections = phases.map((phase) => {
    const output = state.outputs[phase.id];
    if (!output) return `## ${phase.title}\n\nNot generated yet.`;
    return `## ${phase.title}\n\nAgent: ${phase.agent}\n\nDecision: ${state.decisions[phase.id]?.status || "awaiting review"}\n\n${output.memo}\n\n${tableToMarkdown(output.headers, output.rows)}`;
  }).join("\n\n");
  return `# ${state.project.title}\n\n${state.project.description}\n\nField / journal: ${state.project.field || state.project.journal || "Not specified"}\n\n${sections}\n\n## GenAI-use appendix\n\nAgenticTheoryLab generated structured candidate outputs for construct decomposition, item generation, research design selection, and competing model comparison. Human review decisions, comments, rejected or revised outputs, model identifiers, and source references are recorded in the provenance log. Human researchers retain scholarly judgement and accountability.`;
}

function tableToMarkdown(headers, rows) {
  return `| ${headers.join(" | ")} |\n| ${headers.map(() => "---").join(" | ")} |\n${rows.map((row) => `| ${row.join(" | ")} |`).join("\n")}`;
}

function download(name, content, type) {
  record("export", "Export Layer", `Download ${name}`, `Exported ${name}`, "exported");
  save();
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

document.getElementById("seedExample").addEventListener("click", loadExample);
document.getElementById("approveBtn").addEventListener("click", () => phaseDecision("approved"));
document.getElementById("reviseBtn").addEventListener("click", () => phaseDecision("revised"));
document.getElementById("rejectBtn").addEventListener("click", () => phaseDecision("rejected"));
document.getElementById("uncertainBtn").addEventListener("click", () => phaseDecision("uncertain - citation verification requested"));

updateChrome();
show(state.active || "project");
