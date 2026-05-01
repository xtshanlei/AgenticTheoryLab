const phaseDefinitions = [
	{
		id: "conceptualisation",
		short: "Phase 1",
		title: "Conceptualisation and Theoretical Framing",
		purpose:
			"Define the focal phenomenon, dependent variables, reference theories, constructs, and candidate mechanisms.",
		inputs: [
			"research problem statement",
			"focal IS phenomenon",
			"initial research question",
			"target journal",
			"known theories",
			"relevant literature",
			"empirical context",
			"user notes",
			"conceptual diagrams",
		],
		outputs: [
			"refined research problem",
			"candidate dependent variables",
			"unit of analysis",
			"boundary conditions",
			"reference-theory map",
			"construct definitions",
			"mechanisms",
			"conceptual model",
		],
		agents: [
			"phenomenon_definition",
			"reference_mapping",
			"construct_decomposition",
			"mechanism_articulation",
		],
	},
	{
		id: "measurement",
		short: "Phase 2",
		title: "Instrument Development and Measurement",
		purpose:
			"Operationalise constructs, generate items, assess construct overlap, plan validation, and reason about measurement models.",
		inputs: [
			"construct definitions",
			"conceptual model",
			"candidate mechanisms",
			"literature-derived scales",
			"user-provided items",
			"target population",
			"data collection mode",
		],
		outputs: [
			"candidate measurement items",
			"item-construct mapping",
			"ambiguous item report",
			"construct overlap report",
			"measurement model recommendation",
			"validation plan",
		],
		agents: [
			"item_generation",
			"item_sorting",
			"measurement_model",
			"psychometric_validation",
		],
	},
	{
		id: "design",
		short: "Phase 3",
		title: "Rigorous Research Design and Data Collection",
		purpose:
			"Choose empirical designs and data collection strategies to test the theory with explicit validity reasoning.",
		inputs: [
			"conceptual model",
			"hypotheses",
			"measurement specification",
			"target population",
			"available data",
			"interventions",
			"ethical constraints",
		],
		outputs: [
			"recommended research design",
			"alternative design options",
			"experimental plan",
			"longitudinal plan",
			"identification plan",
			"validity threat assessment",
		],
		agents: [
			"design_selection",
			"experimental_design",
			"longitudinal_design",
			"econometric_identification",
		],
	},
	{
		id: "refinement",
		short: "Phase 4",
		title: "Model Testing, Evaluation, and Theory Refinement",
		purpose:
			"Compare competing models, interpret mechanisms and boundary conditions, assess robustness, and refine theory after findings.",
		inputs: [
			"data description",
			"empirical results",
			"model outputs",
			"statistical tables",
			"qualitative findings",
			"competing theories",
			"reviewer comments",
		],
		outputs: [
			"competing model comparison",
			"mediation and moderation interpretation",
			"robustness assessment",
			"refined theoretical model",
			"revised propositions",
			"contribution statement",
		],
		agents: [
			"competing_model",
			"mediation_moderation",
			"robustness_validity",
			"theory_refinement",
		],
	},
];

const agentCatalog = {
	phenomenon_definition: {
		name: "Phenomenon Definition Agent",
		role: "Clarifies the IS phenomenon and dependent variable.",
		requirements: [
			"parse the research problem",
			"identify focal phenomenon",
			"suggest dependent variables",
			"distinguish outcomes from explanations",
			"identify unit of analysis",
			"flag broad outcomes",
		],
		outputTitle: "Dependent-variable candidates",
		headers: [
			"Candidate dependent variable",
			"Definition",
			"Unit of analysis",
			"Risk",
		],
		rows: [
			[
				"Agent observability",
				"Degree to which users can see agent goals, plans, tool use, data access, and traces.",
				"Individual / system",
				"May overlap with explainability unless visibility is bounded.",
			],
			[
				"Accountability clarity",
				"Degree to which responsibility for agent-supported actions is clear.",
				"Team / organisation",
				"Requires formal and perceived accountability distinction.",
			],
			[
				"Human override effectiveness",
				"Ability to detect and intervene in inappropriate agent actions.",
				"Individual / workflow",
				"Requires behavioural or log evidence.",
			],
		],
		memo: "The focal phenomenon is enterprise delegation of bounded decision support to autonomous AI agents. The dependent variable should stay close to governance outcomes rather than broad adoption or productivity claims.",
	},
	reference_mapping: {
		name: "Reference Discipline Mapping Agent",
		role: "Maps relevant theories from IS and reference disciplines.",
		requirements: [
			"identify IS theories",
			"identify reference-discipline theories",
			"explain contribution",
			"identify imported constructs",
			"warn against superficial borrowing",
		],
		outputTitle: "Reference-theory map",
		headers: ["Theory", "Discipline", "Key concept", "Potential IS adaptation"],
		rows: [
			[
				"Organisational control theory",
				"Management / IS",
				"Behaviour, output, and clan control",
				"Human oversight of delegated AI-agent work.",
			],
			[
				"Trust theory",
				"Psychology / IS",
				"Trusting beliefs and calibration",
				"Appropriate delegation and monitoring of agents.",
			],
			[
				"Delegation theory",
				"Organisation studies",
				"Delegated authority",
				"Delegated digital agency in enterprise workflows.",
			],
			[
				"Accountability theory",
				"Public administration / IS",
				"Answerability and traceability",
				"Auditability of agent-supported decisions.",
			],
		],
		memo: "The reference map supports theory borrowing only where constructs are adapted to IS phenomena and connected to observable governance mechanisms.",
	},
	construct_decomposition: {
		name: "Construct Decomposition Agent",
		role: "Decomposes broad constructs into clearer multidimensional constructs.",
		requirements: [
			"identify broad constructs",
			"propose dimensions",
			"distinguish related constructs",
			"flag overlap",
			"suggest formative or reflective interpretation",
		],
		outputTitle: "Construct decomposition table",
		headers: [
			"Broad construct",
			"Proposed dimensions",
			"Conceptual definition",
			"Measurement interpretation",
		],
		rows: [
			[
				"Agent observability",
				"Goal visibility; plan visibility; tool-use visibility; data-access visibility; decision-trace visibility",
				"Inspectability of agent intent, action, evidence, and trace.",
				"Formative or second-order.",
			],
			[
				"Human control",
				"Monitoring capacity; override capacity; escalation capacity; review capacity",
				"Human capacity to detect, intervene, and revise agent behaviour.",
				"Multidimensional formative.",
			],
			[
				"Accountability clarity",
				"Responsibility assignment; role clarity; auditability; liability perception",
				"Clarity of responsibility in agent-supported work.",
				"Reflective if measuring perception.",
			],
		],
		memo: "The constructs should be kept distinct: observability concerns visibility, explainability concerns reasons, and accountability concerns responsibility assignment.",
	},
	mechanism_articulation: {
		name: "Mechanism Articulation Agent",
		role: "Develops candidate theoretical mechanisms connecting constructs.",
		requirements: [
			"generate mechanism statements",
			"connect mechanisms to theories",
			"identify assumptions",
			"identify mediators",
			"identify moderators",
			"produce propositions",
		],
		outputTitle: "Mechanisms and propositions",
		headers: [
			"Mechanism",
			"Logic",
			"Mediator / moderator",
			"Candidate proposition",
		],
		rows: [
			[
				"Early detection mechanism",
				"Observability lets humans notice problematic agent actions earlier.",
				"Mediator: intervention readiness",
				"Agent observability improves intervention readiness.",
			],
			[
				"Accountability anchoring mechanism",
				"Traceability anchors responsibility to roles and decision records.",
				"Mediator: perceived auditability",
				"Traceability improves accountability clarity.",
			],
			[
				"Automation complacency mechanism",
				"Over-trust reduces monitoring effort.",
				"Moderator: task risk",
				"High trust weakens oversight under low perceived risk.",
			],
		],
		memo: "The theory should specify when observability helps and when information load or over-trust undermines governance quality.",
	},
	item_generation: {
		name: "Item Generation Agent",
		role: "Generates candidate items for each construct.",
		requirements: [
			"generate multiple items",
			"align items with definitions",
			"avoid double-barrelled wording",
			"avoid leading wording",
			"separate perceptual and behavioural indicators",
		],
		outputTitle: "Candidate measurement items",
		headers: [
			"Construct",
			"Candidate item",
			"Indicator type",
			"Quality warning",
		],
		rows: [
			[
				"Agent observability",
				"I can review the sequence of actions taken by the AI agent.",
				"Perceptual survey",
				"Clarify whether trace access is complete or summary-level.",
			],
			[
				"Agent observability",
				"I can identify which data sources the AI agent accessed.",
				"Perceptual survey",
				"Avoid if data access is technically hidden from users.",
			],
			[
				"Human override capacity",
				"I can stop or redirect the AI agent when its actions are inappropriate.",
				"Perceptual survey",
				"Pair with behavioural logs if available.",
			],
			[
				"Governance latency",
				"Time between agent warning and human intervention.",
				"System log",
				"Requires timestamped events.",
			],
		],
		memo: "Items are candidate wording only; human researchers must revise them for context, population, and construct validity.",
	},
	item_sorting: {
		name: "Item Sorting Agent",
		role: "Supports item sorting and content validity checks.",
		requirements: [
			"assign items to constructs",
			"identify cross-loading items",
			"flag ambiguous wording",
			"suggest revisions",
			"prepare sorting sheets",
		],
		outputTitle: "Item sorting and ambiguity report",
		headers: ["Item", "Intended construct", "Issue", "Recommendation"],
		rows: [
			[
				"I understand why the AI agent made its decision.",
				"Explainability sufficiency",
				"May overlap with observability.",
				"Clarify whether item refers to reasons or visibility.",
			],
			[
				"I can stop the AI agent when needed.",
				"Human override capacity",
				"Clear but broad.",
				"Add condition: inappropriate or risky actions.",
			],
			[
				"The AI agent behaves responsibly.",
				"Accountability clarity",
				"Too vague and anthropomorphic.",
				"Replace with responsibility-assignment item.",
			],
		],
		memo: "Item sorting should be used before validation to detect construct drift and overlapping wording.",
	},
	measurement_model: {
		name: "Measurement Model Agent",
		role: "Suggests appropriate measurement model types.",
		requirements: [
			"identify reflective constructs",
			"identify formative constructs",
			"identify second-order constructs",
			"recommend survey, behavioural, textual, or log measures",
			"explain assumptions",
		],
		outputTitle: "Measurement model specification",
		headers: ["Construct", "Recommended model", "Measure type", "Reason"],
		rows: [
			[
				"Agent observability",
				"Formative / second-order",
				"Survey + interface audit",
				"Dimensions jointly form observability.",
			],
			[
				"Accountability clarity",
				"Reflective",
				"Survey",
				"Items reflect common perception of clear responsibility.",
			],
			[
				"Governance latency",
				"Objective indicator",
				"System log",
				"Latency is directly observable as elapsed time.",
			],
			[
				"Trust calibration",
				"Hybrid",
				"Survey + behaviour",
				"Requires alignment between belief and delegation behaviour.",
			],
		],
		memo: "Do not apply reliability metrics mechanically to formative constructs; specify model assumptions before analysis.",
	},
	psychometric_validation: {
		name: "Psychometric Validation Agent",
		role: "Plans psychometric validation.",
		requirements: [
			"recommend EFA/CFA",
			"recommend reliability checks",
			"recommend convergent validity",
			"recommend discriminant validity",
			"flag common method bias",
			"suggest pilot testing",
		],
		outputTitle: "Validation checklist",
		headers: [
			"Validation concern",
			"Suggested action",
			"Evidence needed",
			"Risk if ignored",
		],
		rows: [
			[
				"Construct overlap",
				"Run discriminant validity checks.",
				"HTMT / Fornell-Larcker / item sorting",
				"Observability may collapse into explainability.",
			],
			[
				"Formative dimensions",
				"Assess weights and multicollinearity.",
				"VIF and theoretical justification",
				"Cronbach alpha may be inappropriate.",
			],
			[
				"Common method bias",
				"Add temporal, source, or method separation.",
				"Design controls and marker variables",
				"Inflated relationships.",
			],
			[
				"Population variation",
				"Test measurement invariance.",
				"Multi-group CFA or equivalent",
				"Group comparisons may be invalid.",
			],
		],
		memo: "Validation planning should be documented before data collection to reduce post-hoc measurement rationalisation.",
	},
	design_selection: {
		name: "Research Design Selection Agent",
		role: "Matches research questions to appropriate empirical designs.",
		requirements: [
			"classify research question",
			"suggest suitable designs",
			"compare trade-offs",
			"identify feasibility constraints",
			"distinguish exploratory, explanatory, causal, and validation studies",
		],
		outputTitle: "Design recommendation matrix",
		headers: [
			"Research question",
			"Recommended design",
			"Trade-off",
			"Validity threat",
		],
		rows: [
			[
				"Does observability improve intervention quality?",
				"Controlled experiment",
				"High control, lower ecological realism",
				"Demand effects and artificial tasks.",
			],
			[
				"How does trust calibration evolve over time?",
				"Longitudinal panel",
				"Temporal insight, higher attrition",
				"Maturation and missingness.",
			],
			[
				"Do firms with observability systems report fewer incidents?",
				"Observational econometric study",
				"Field relevance, weaker causal control",
				"Selection bias and reverse causality.",
			],
			[
				"How do professionals negotiate accountability?",
				"Qualitative field study",
				"Rich mechanism insight, limited generalisability",
				"Researcher interpretation bias.",
			],
		],
		memo: "The primary design should match the causal strength of the claim; strong causal propositions need experimental or credible quasi-experimental logic.",
	},
	experimental_design: {
		name: "Experimental Design Agent",
		role: "Designs controlled experiments.",
		requirements: [
			"propose treatments",
			"define controls",
			"suggest randomisation",
			"suggest manipulation checks",
			"define dependent variables",
			"identify confounds",
			"prepare protocol drafts",
		],
		outputTitle: "Experiment protocol draft",
		headers: ["Condition", "Description", "Outcomes", "Manipulation check"],
		rows: [
			[
				"Low observability",
				"Only final agent recommendation is shown.",
				"Intervention accuracy; over-reliance",
				"Participants report low action-trace visibility.",
			],
			[
				"Medium observability",
				"Recommendation plus explanation is shown.",
				"Trust calibration; cognitive load",
				"Participants can describe agent rationale.",
			],
			[
				"High observability",
				"Goal, plan, tool use, data sources, and action trace are shown.",
				"Intervention quality; review burden",
				"Participants identify agent steps and data access.",
			],
		],
		memo: "Random assignment and manipulation checks are required before interpreting treatment differences as observability effects.",
	},
	longitudinal_design: {
		name: "Longitudinal Design Agent",
		role: "Designs longitudinal studies.",
		requirements: [
			"identify variables to track",
			"suggest measurement intervals",
			"identify temporal mechanisms",
			"distinguish short-term and long-term effects",
			"identify temporal validity threats",
		],
		outputTitle: "Longitudinal study plan",
		headers: [
			"Time point",
			"Measures",
			"Expected temporal logic",
			"Retention risk",
		],
		rows: [
			[
				"Week 0",
				"Baseline trust, domain expertise, prior AI use",
				"Initial calibration and controls",
				"Recruitment screening bias.",
			],
			[
				"Weeks 1-4",
				"Delegation frequency, override frequency, review burden",
				"Practice and adaptation period",
				"Participant fatigue.",
			],
			[
				"Week 6",
				"Trust calibration, accountability clarity, perceived control",
				"Stabilised governance perceptions",
				"Attrition and missing logs.",
			],
		],
		memo: "Longitudinal logic is strongest when repeated behavioural traces are combined with repeated perceptions.",
	},
	econometric_identification: {
		name: "Econometric Identification Agent",
		role: "Supports empirical identification for observational data.",
		requirements: [
			"identify endogeneity risks",
			"suggest identification strategies",
			"propose controls",
			"identify possible instruments",
			"suggest fixed effects",
			"recommend robustness checks",
		],
		outputTitle: "Identification plan",
		headers: ["Threat", "Example", "Possible response", "Residual concern"],
		rows: [
			[
				"Selection bias",
				"Mature firms adopt observability tools earlier.",
				"Propensity matching or firm fixed effects",
				"Unobserved maturity may remain.",
			],
			[
				"Reverse causality",
				"AI incidents trigger governance investment.",
				"Lagged independent variables or event study",
				"Timing assumptions must be defended.",
			],
			[
				"Omitted variables",
				"AI maturity affects both governance and incidents.",
				"Controls, fixed effects, sensitivity analysis",
				"Controls may be incomplete.",
			],
			[
				"Measurement error",
				"Incident reporting varies by firm.",
				"Alternative outcomes and reporting controls",
				"Under-reporting remains possible.",
			],
		],
		memo: "Identification claims should be labelled cautiously unless the design supports causal inference.",
	},
	competing_model: {
		name: "Competing Model Agent",
		role: "Generates and compares alternative theoretical explanations.",
		requirements: [
			"identify rival models",
			"compare explanatory power",
			"compare parsimony",
			"identify overlap",
			"identify contradictory predictions",
		],
		outputTitle: "Competing model table",
		headers: ["Model", "Core logic", "Competing prediction", "Implication"],
		rows: [
			[
				"Observability model",
				"Visibility improves early detection and intervention.",
				"More observability improves governance.",
				"Retain if intervention accuracy improves.",
			],
			[
				"Trust calibration model",
				"Appropriate trust drives delegation and monitoring.",
				"Trust explains outcomes better than visibility.",
				"Model trust as mediator or rival.",
			],
			[
				"Control burden model",
				"Excessive visibility overloads reviewers.",
				"Too much observability reduces performance.",
				"Specify nonlinear or boundary condition.",
			],
			[
				"Socio-technical fit model",
				"Fit between autonomy and workflow risk matters.",
				"Observability helps only in high-risk coupled work.",
				"Add moderation by task risk.",
			],
		],
		memo: "Competing explanations protect the theory from one-mechanism overclaiming.",
	},
	mediation_moderation: {
		name: "Mediation and Moderation Agent",
		role: "Unpacks mechanisms and boundary conditions.",
		requirements: [
			"identify mediators",
			"identify moderators",
			"distinguish mediation from moderation",
			"map mechanisms to tests",
			"suggest direct and indirect interpretation",
		],
		outputTitle: "Conditional process map",
		headers: [
			"Relationship",
			"Mediator / moderator",
			"Interpretation",
			"Suggested test",
		],
		rows: [
			[
				"Agent observability → governance effectiveness",
				"Mediator: intervention readiness",
				"Visibility helps because humans can act sooner.",
				"Indirect-effect model.",
			],
			[
				"Traceability → accountability clarity",
				"Mediator: perceived auditability",
				"Records make responsibility more assignable.",
				"Mediation with auditability measure.",
			],
			[
				"Observability → intervention quality",
				"Moderator: user expertise",
				"Experts may benefit more from trace detail.",
				"Interaction term or multi-group test.",
			],
			[
				"Autonomy → trust",
				"Moderator: task risk",
				"Risk changes tolerance for agent autonomy.",
				"Conditional process model.",
			],
		],
		memo: "Mediation explains why an effect occurs; moderation defines when or for whom it occurs.",
	},
	robustness_validity: {
		name: "Robustness and Validity Agent",
		role: "Suggests robustness checks and identifies validity threats.",
		requirements: [
			"recommend alternative specifications",
			"suggest alternative dependent variables",
			"suggest subgroup analyses",
			"suggest placebo tests",
			"identify common method bias and fairness concerns",
		],
		outputTitle: "Robustness checklist",
		headers: [
			"Validity concern",
			"Robustness check",
			"Required evidence",
			"Decision rule",
		],
		rows: [
			[
				"Self-report bias",
				"Add behavioural or log-based indicators.",
				"Trace data for interventions and overrides",
				"Claims weaken if only perceptions align.",
			],
			[
				"Construct overlap",
				"Test discriminant validity.",
				"Cross-loadings and HTMT",
				"Revise constructs if overlap is high.",
			],
			[
				"Overfitting",
				"Use holdout or preregistered models.",
				"Training/holdout split or preregistration",
				"Avoid exploratory claims as confirmatory.",
			],
			[
				"Demographic variation",
				"Conduct subgroup or fairness analysis.",
				"Group-level effect estimates",
				"Report boundary conditions.",
			],
		],
		memo: "Robustness checks should be tied to concrete threats, not added as generic appendices.",
	},
	theory_refinement: {
		name: "Theory Refinement Agent",
		role: "Helps revise theory after empirical testing.",
		requirements: [
			"compare expected and observed findings",
			"identify unsupported propositions",
			"suggest refined constructs",
			"identify boundary conditions",
			"produce refinement memo",
		],
		outputTitle: "Theory refinement memo",
		headers: [
			"Original proposition",
			"Finding pattern",
			"Refined proposition",
			"Boundary condition",
		],
		rows: [
			[
				"Agent observability improves governance effectiveness.",
				"Positive under high expertise; weaker under high review burden.",
				"Observability improves governance when users have sufficient expertise and interfaces avoid review overload.",
				"Expertise and cognitive load.",
			],
			[
				"Traceability improves accountability clarity.",
				"Supported when roles are formally assigned.",
				"Traceability improves accountability clarity when responsibility structures are explicit.",
				"Role clarity.",
			],
			[
				"Autonomy improves workflow performance.",
				"Mixed across risk levels.",
				"Autonomy improves performance in low-risk tasks but requires stronger oversight in high-risk work.",
				"Task risk.",
			],
		],
		memo: "Theory refinement should make propositions more precise rather than merely adding limitations.",
	},
};

const exampleProject = {
	title: "Agentic AI Governance in Enterprise Systems",
	description:
		"How does agentic AI observability influence human control, trust calibration, and accountability in enterprise workflows?",
	field: "Information Systems / Digital Governance",
	journal: "MIS Quarterly / Information Systems Research",
	context:
		"Regulated enterprise workflows where autonomous agents perform analysis, retrieval, and decision-support tasks.",
	knownTheories:
		"Organisational control theory; trust calibration; delegation theory; accountability theory",
	population: "Knowledge workers and governance leads using agentic AI systems",
	dataMode: "Survey, controlled experiment, workflow logs, interviews",
	ethics:
		"Avoid uploading sensitive enterprise documents; anonymise workflow traces; retain human accountability.",
};

const evaluationRubric = [
	[
		"Conceptualisation",
		"DV clarity, construct decomposition, theoretical grounding, mechanism quality",
	],
	[
		"Measurement",
		"Item clarity, construct distinctiveness, measurement-model appropriateness",
	],
	[
		"Research design",
		"Causal credibility, feasibility, identification of validity threats",
	],
	[
		"Refinement",
		"Competing model awareness, mediation/moderation logic, robustness planning",
	],
	["Overall", "Novelty, parsimony, traceability, scholarly usefulness"],
];

const defaultState = {
	version: 3,
	project: {
		title: "Untitled theory-construction project",
		description: "",
		field: "",
		journal: "",
		context: "",
		knownTheories: "",
		population: "",
		dataMode: "",
		ethics: "",
	},
	active: "project",
	reviewTarget: "",
	outputs: {},
	decisions: {},
	phaseDecisions: {},
	provenance: [],
	documents: [],
	references: [],
	exportHistory: [],
	scores: {},
};

let state = migrateState(
	JSON.parse(localStorage.getItem("atl-state") || "null"),
);
const view = document.getElementById("view");

function migrateState(saved) {
	if (!saved) return structuredClone(defaultState);
	return {
		...structuredClone(defaultState),
		...saved,
		version: 3,
		project: { ...defaultState.project, ...saved.project },
		phaseDecisions: saved.phaseDecisions || {},
	};
}

function save() {
	localStorage.setItem("atl-state", JSON.stringify(state));
	updateChrome();
}

function record(
	phase,
	agent,
	input,
	output,
	decision = "generated",
	humanComment = "",
	sources = [],
	details = {},
) {
	state.provenance.unshift({
		project_id: slug(state.project.title || "atl_project_001"),
		phase,
		agent,
		input,
		model: "deterministic-full-static-agent-v2",
		sources_used: [
			"requirements.md",
			"Stitch project 13154548682289785713",
			...sources,
		],
		retrieved_passages: state.references
			.map((reference) => reference.excerpt)
			.filter(Boolean)
			.slice(0, 3),
		output_summary: output,
		human_decision: decision,
		human_comment: humanComment,
		agent_prompt: details.agentPrompt || input,
		configuration: details.configuration || {
			execution: "static-browser",
			storage: "localStorage",
		},
		full_output: details.fullOutput || null,
		human_edits: details.humanEdits || [],
		rejected_suggestions: details.rejectedSuggestions || [],
		decision_log: details.decisionLog || null,
		validation_notes: details.validationNotes || [],
		timestamp: new Date().toISOString(),
	});
}

function updateChrome() {
	document.getElementById("projectTitle").textContent =
		state.project.title || "Untitled theory-construction project";
	document.getElementById("projectDescription").textContent =
		state.project.description ||
		"Define a project, run bounded agents, review every output, and export an auditable theory-construction package.";
	document.getElementById("approvedCount").textContent = Object.values(
		state.decisions,
	).filter((decision) => decision.status === "approved").length;
	document.getElementById("logCount").textContent = state.provenance.length;
	renderNav();
	renderStepper();
	renderPreview();
}

function renderNav() {
	const items = [
		{ id: "project", title: "Create Project" },
		{ id: "dashboard", title: "Dashboard" },
		{ id: "documents", title: "Documents" },
		...phaseDefinitions.map((phase) => ({ id: phase.id, title: phase.short })),
		{ id: "review", title: "Review Hub" },
		{ id: "sources", title: "Source Verifier" },
		{ id: "evaluation", title: "Evaluation" },
		{ id: "export", title: "Export" },
	];
	document.getElementById("nav").innerHTML = items
		.map(
			(item) =>
				`<button type="button" class="nav-item ${state.active === item.id ? "active" : ""}" data-target="${item.id}"><span>${item.title}</span><span>${statusMark(item.id)}</span></button>`,
		)
		.join("");
	document.querySelectorAll(".nav-item").forEach((button) => {
		button.addEventListener("click", () => show(button.dataset.target));
	});
}

function statusMark(id) {
	if (
		id === "project" &&
		state.project.title !== "Untitled theory-construction project"
	)
		return "✓";
	if (id === "documents")
		return String(state.documents.length + state.references.length || "");
	const phase = phaseDefinitions.find((item) => item.id === id);
	if (!phase) return "";
	const approved = phase.agents.filter(
		(agentId) => state.decisions[agentId]?.status === "approved",
	).length;
	const phaseApproved =
		state.phaseDecisions[id]?.status === "approved" ? " ✓" : "";
	return approved
		? `${approved}/${phase.agents.length}${phaseApproved}`
		: phaseApproved.trim();
}

function renderStepper() {
	document.getElementById("stepper").innerHTML = phaseDefinitions
		.map((phase) => {
			const approved = phase.agents.filter(
				(agentId) => state.decisions[agentId]?.status === "approved",
			).length;
			const phaseStatus =
				state.phaseDecisions[phase.id]?.status || "phase pending";
			return `<button type="button" class="step ${state.phaseDecisions[phase.id]?.status === "approved" ? "complete" : ""} ${state.active === phase.id ? "active" : ""}" data-phase="${phase.id}"><span>${phase.short}</span>${phase.title.split(" and ")[0]}<small>${approved}/${phase.agents.length} agents · ${phaseStatus}</small></button>`;
		})
		.join("");
	document.querySelectorAll(".step").forEach((button) => {
		button.addEventListener("click", () => show(button.dataset.phase));
	});
}

function renderPreview() {
	const records = state.provenance.slice(0, 6);
	document.getElementById("provenancePreview").innerHTML = records.length
		? records
				.map(
					(entry) =>
						`<div class="log-item"><strong>${escapeHtml(entry.agent)}</strong><br>${escapeHtml(entry.human_decision)}: ${escapeHtml(entry.output_summary)}<br><small>${new Date(entry.timestamp).toLocaleString()}</small></div>`,
				)
				.join("")
		: "<p>No provenance records yet.</p>";
}

function show(target) {
	state.active = target;
	save();
	if (target === "project") renderProject();
	else if (target === "dashboard") renderDashboard();
	else if (target === "documents") renderDocuments();
	else if (target === "review") renderReview();
	else if (target === "sources") renderSources();
	else if (target === "evaluation") renderEvaluation();
	else if (target === "export") renderExport();
	else renderPhase(target);
}

function renderProject() {
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Initialize inquiry</p><h2>Create new research project</h2><p>Capture the problem framing, theoretical constraints, empirical context, ethics, and data assumptions used by all agents.</p><div class="form-grid"><label>Project title<input id="titleInput" value="${escapeAttr(state.project.title)}"></label><label>Target field or journal<input id="journalInput" value="${escapeAttr(state.project.journal)}"></label><label class="wide">Research problem<textarea id="descriptionInput">${escapeHtml(state.project.description)}</textarea></label><label>Field<input id="fieldInput" value="${escapeAttr(state.project.field)}"></label><label>Empirical context<input id="contextInput" value="${escapeAttr(state.project.context)}"></label><label class="wide">Known theories<textarea id="theoryInput">${escapeHtml(state.project.knownTheories)}</textarea></label><label>Target population<input id="populationInput" value="${escapeAttr(state.project.population)}"></label><label>Data collection mode<input id="dataModeInput" value="${escapeAttr(state.project.dataMode)}"></label><label class="wide">Ethical / institutional constraints<textarea id="ethicsInput">${escapeHtml(state.project.ethics)}</textarea></label></div><div class="button-row"><button type="button" id="saveProject">Save project</button><button type="button" class="secondary" id="exampleProject">Use example template</button><button type="button" class="secondary" id="resetWorkspace">Reset local workspace</button></div></section>`;
	document.getElementById("saveProject").addEventListener("click", saveProject);
	document
		.getElementById("exampleProject")
		.addEventListener("click", loadExample);
	document
		.getElementById("resetWorkspace")
		.addEventListener("click", resetWorkspace);
}

function saveProject() {
	state.project = {
		title: document.getElementById("titleInput").value.trim(),
		description: document.getElementById("descriptionInput").value.trim(),
		field: document.getElementById("fieldInput").value.trim(),
		journal: document.getElementById("journalInput").value.trim(),
		context: document.getElementById("contextInput").value.trim(),
		knownTheories: document.getElementById("theoryInput").value.trim(),
		population: document.getElementById("populationInput").value.trim(),
		dataMode: document.getElementById("dataModeInput").value.trim(),
		ethics: document.getElementById("ethicsInput").value.trim(),
	};
	record(
		"project",
		"Project Workspace",
		"Create research project",
		`Project saved: ${state.project.title}`,
		"saved",
	);
	save();
	renderProject();
}

function loadExample() {
	state.project = { ...exampleProject };
	if (!state.references.length) {
		state.references = [
			{
				title: "Requirements PRD",
				source: "requirements.md",
				excerpt:
					"AgenticTheoryLab supports four phases of IS theory construction with provenance and human review.",
				status: "verified",
			},
			{
				title: "Stitch Design System",
				source: "Stitch project 13154548682289785713",
				excerpt:
					"Institutional minimalism with deep navy, slate, teal agent zones, and burgundy human-review markers.",
				status: "verified",
			},
		];
	}
	record(
		"project",
		"Example Project Template",
		"Load example",
		"Loaded full agentic AI governance example",
		"saved",
	);
	save();
	show("dashboard");
}

function resetWorkspace() {
	state = structuredClone(defaultState);
	localStorage.removeItem("atl-state");
	save();
	show("project");
}

function renderDashboard() {
	const totalAgents = Object.keys(agentCatalog).length;
	const generated = Object.keys(state.outputs).length;
	const approved = Object.values(state.decisions).filter(
		(decision) => decision.status === "approved",
	).length;
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Project dashboard</p><h2>${escapeHtml(state.project.title)}</h2><p>${escapeHtml(state.project.description || "No research problem defined yet.")}</p><div class="metric-grid"><div><strong>${generated}/${totalAgents}</strong><span>agents run</span></div><div><strong>${approved}</strong><span>approved outputs</span></div><div><strong>${state.documents.length}</strong><span>documents</span></div><div><strong>${state.references.length}</strong><span>sources</span></div></div></section><section class="card"><p class="eyebrow">System architecture</p><table><thead><tr><th>Component</th><th>Implemented role</th></tr></thead><tbody>${[
		[
			"Project Workspace",
			"Stores project details, documents, references, outputs, scores, and decisions in local browser storage.",
		],
		[
			"Workflow Orchestrator",
			"Runs individual agents or full phase workflows and records provenance.",
		],
		[
			"Agent Modules",
			"Sixteen bounded deterministic agents aligned to PRD functional requirements.",
		],
		[
			"Source Verifier",
			"Tracks references, excerpts, verification status, and citation warnings.",
		],
		[
			"Provenance Logger",
			"Records prompts, model version, sources, outputs, human edits, decisions, and export history.",
		],
		[
			"Export Layer",
			"Produces Markdown, JSON provenance, CSV item tables, design memos, refinement memos, and GenAI-use appendices.",
		],
	]
		.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`)
		.join(
			"",
		)}</tbody></table></section><section class="card agent-zone"><p class="eyebrow">Human authority principle</p><p>Agentic AI supports synthesis, generation, comparison, critique, and documentation; human researchers retain scholarly judgement and accountability.</p></section>`;
}

function renderDocuments() {
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Document input</p><h2>Project documents and references</h2><p>Capture pasted text, upload local text/CSV/Markdown notes, summaries, tables, empirical design notes, statistical results, and manually entered references. Files remain local to the browser; this static build does not upload research materials.</p><div class="form-grid"><label>Document title<input id="docTitle"></label><label>Document type<select id="docType"><option>literature summary</option><option>conceptual note</option><option>table</option><option>empirical design note</option><option>statistical result</option><option>reviewer comment</option><option>uploaded file</option></select></label><label class="wide">Upload local document<input id="docFile" type="file" accept=".txt,.md,.csv,.json,text/*"></label><label class="wide">Document text<textarea id="docText"></textarea></label><label>Reference title<input id="refTitle"></label><label>Source / citation<input id="refSource"></label><label class="wide">Retrieved passage or evidence note<textarea id="refExcerpt"></textarea></label></div><div class="button-row"><button type="button" id="addDocument">Add document</button><button type="button" class="secondary" id="addReference">Add reference</button></div></section><section class="card"><p class="eyebrow">Document store</p>${renderList(state.documents, (doc) => `<strong>${escapeHtml(doc.title)}</strong><br><span class="pill">${escapeHtml(doc.type)}</span> ${doc.fileName ? `<span class="pill">${escapeHtml(doc.fileName)}</span>` : ""}<p>${escapeHtml(doc.text)}</p>`)}</section><section class="card"><p class="eyebrow">Reference registry</p>${renderList(state.references, (reference) => `<strong>${escapeHtml(reference.title)}</strong><br><span class="pill">${escapeHtml(reference.status)}</span> ${escapeHtml(reference.source)}<p>${escapeHtml(reference.excerpt)}</p>`)}</section>`;
	document.getElementById("addDocument").addEventListener("click", addDocument);
	document
		.getElementById("addReference")
		.addEventListener("click", addReference);
}

async function addDocument() {
	const file = document.getElementById("docFile").files[0];
	const fileText = file ? await file.text() : "";
	const doc = {
		title: inputValue("docTitle") || file?.name || "Untitled document",
		type: file ? "uploaded file" : inputValue("docType"),
		text: inputValue("docText") || fileText,
		fileName: file?.name || "",
		fileSize: file?.size || 0,
		timestamp: new Date().toISOString(),
	};
	if (!doc.title && !doc.text) return;
	state.documents.unshift(doc);
	record(
		"documents",
		"Document Store",
		"Add document",
		`Added document: ${doc.title || doc.type}`,
		"saved",
		[],
		{ fullOutput: doc },
	);
	save();
	renderDocuments();
}

function addReference() {
	const reference = {
		title: inputValue("refTitle"),
		source: inputValue("refSource"),
		excerpt: inputValue("refExcerpt"),
		status: "needs verification",
	};
	if (!reference.title && !reference.source) return;
	state.references.unshift(reference);
	record(
		"retrieval",
		"Source Verifier",
		"Add reference",
		`Added reference: ${reference.title || reference.source}`,
		"saved",
	);
	save();
	renderDocuments();
}

function renderPhase(id) {
	const phase = phaseDefinitions.find((item) => item.id === id);
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">${phase.short}</p><h2>${phase.title}</h2><p>${phase.purpose}</p><div class="split-grid"><div><h3>Inputs</h3><ul>${phase.inputs.map((input) => `<li>${input}</li>`).join("")}</ul></div><div><h3>Outputs</h3><ul>${phase.outputs.map((output) => `<li>${output}</li>`).join("")}</ul></div></div><div class="button-row"><button type="button" id="runPhase">Run full phase workflow</button><button type="button" class="secondary" id="requestPhaseCritique">Request phase critique</button></div></section><section class="card human-zone"><p class="eyebrow">End-of-phase checkpoint</p><h3>${phase.short} approval</h3><p><span class="pill">${state.phaseDecisions[id]?.status || "pending"}</span> ${escapeHtml(state.phaseDecisions[id]?.comment || "")}</p><div class="button-row"><button type="button" id="approvePhase">Approve phase package</button><button type="button" class="secondary" id="revisePhase">Request phase revision</button></div></section><section class="agent-grid">${phase.agents.map(renderAgentCard).join("")}</section>`;
	document
		.getElementById("runPhase")
		.addEventListener("click", () => runPhase(id));
	document
		.getElementById("requestPhaseCritique")
		.addEventListener("click", () => critiquePhase(id));
	document
		.getElementById("approvePhase")
		.addEventListener("click", () => phaseCheckpoint(id, "approved"));
	document
		.getElementById("revisePhase")
		.addEventListener("click", () => phaseCheckpoint(id, "revision requested"));
	phase.agents.forEach((agentId) => {
		bindAgentButtons(agentId);
	});
}

function renderAgentCard(agentId) {
	const agent = agentCatalog[agentId];
	const output = state.outputs[agentId];
	const decision = state.decisions[agentId]?.status || "not run";
	return `<article class="card agent-card ${output ? "has-output" : ""}"><p class="eyebrow">${escapeHtml(agent.role)}</p><h3>${escapeHtml(agent.name)}</h3><details><summary>Functional requirements</summary><ul>${agent.requirements.map((requirement) => `<li>${escapeHtml(requirement)}</li>`).join("")}</ul></details><div class="button-row"><button type="button" data-run="${agentId}">Run agent</button><button type="button" class="secondary" data-alt="${agentId}">Alternative</button><button type="button" class="secondary" data-review="${agentId}">Select for review</button></div><p><span class="pill">${escapeHtml(decision)}</span></p>${output ? renderOutput(agentId, output) : ""}</article>`;
}

function bindAgentButtons(agentId) {
	document
		.querySelector(`[data-run="${agentId}"]`)
		.addEventListener("click", () => runAgent(agentId));
	document
		.querySelector(`[data-alt="${agentId}"]`)
		.addEventListener("click", () => requestAlternative(agentId));
	document
		.querySelector(`[data-review="${agentId}"]`)
		.addEventListener("click", () => selectForReview(agentId));
}

function runPhase(phaseId) {
	phaseDefinitions
		.find((phase) => phase.id === phaseId)
		.agents.forEach(runAgent);
	show(phaseId);
}

function runAgent(agentId) {
	const agent = agentCatalog[agentId];
	state.outputs[agentId] = {
		memo: contextualizeMemo(agent),
		headers: [...agent.headers],
		rows: agent.rows.map((row) => [...row]),
		alternatives: [],
		critique: "",
		revisedAt: "",
		versions: [],
	};
	storeVersion(agentId, "generated baseline");
	state.decisions[agentId] = { status: "awaiting review", comment: "" };
	state.reviewTarget = agentId;
	record(
		phaseForAgent(agentId).id,
		agent.name,
		state.project.description || "IS research problem",
		agent.outputTitle,
		"generated",
		"",
		state.references.map((reference) => reference.title),
		{
			fullOutput: state.outputs[agentId],
			agentPrompt: agent.requirements.join("; "),
		},
	);
	save();
	show(phaseForAgent(agentId).id);
}

function requestAlternative(agentId) {
	if (!state.outputs[agentId]) runAgent(agentId);
	const agent = agentCatalog[agentId];
	const alternative = `Alternative framing: treat ${agent.outputTitle.toLowerCase()} as a comparison set rather than a final recommendation; require human adjudication before downstream reuse.`;
	state.outputs[agentId].alternatives.unshift(alternative);
	storeVersion(agentId, "alternative requested");
	record(
		phaseForAgent(agentId).id,
		agent.name,
		"Request alternative output",
		alternative,
		"alternative requested",
		[],
		{
			fullOutput: state.outputs[agentId],
			rejectedSuggestions: state.outputs[agentId].alternatives.slice(1),
		},
	);
	save();
	show(phaseForAgent(agentId).id);
}

function phaseCheckpoint(phaseId, status) {
	const phase = phaseDefinitions.find((item) => item.id === phaseId);
	const comment = document.getElementById("reviewComment").value.trim();
	state.phaseDecisions[phaseId] = {
		status,
		comment,
		agentDecisions: Object.fromEntries(
			phase.agents.map((agentId) => [
				agentId,
				state.decisions[agentId] || null,
			]),
		),
		timestamp: new Date().toISOString(),
	};
	record(
		phaseId,
		"Phase Review Checkpoint",
		`End-of-phase review for ${phase.title}`,
		`${status}: ${phase.title}`,
		status,
		comment,
		[],
		{ decisionLog: state.phaseDecisions[phaseId] },
	);
	document.getElementById("reviewComment").value = "";
	save();
	show(phaseId);
}

function critiquePhase(phaseId) {
	const phase = phaseDefinitions.find((item) => item.id === phaseId);
	phase.agents.forEach((agentId) => {
		if (!state.outputs[agentId]) runAgent(agentId);
		state.outputs[agentId].critique =
			`Critique: verify source grounding, inspect construct drift, and require human approval before using ${agentCatalog[agentId].outputTitle.toLowerCase()} in later phases.`;
	});
	record(
		phaseId,
		"Workflow Orchestrator",
		"Request phase critique",
		`Generated critique notes for ${phase.title}`,
		"critique requested",
	);
	save();
	show(phaseId);
}

function contextualizeMemo(agent) {
	const context = state.project.context
		? ` Context: ${state.project.context}`
		: "";
	const theories = state.project.knownTheories
		? ` Relevant theories: ${state.project.knownTheories}.`
		: "";
	return `${agent.memo}${context}${theories}`;
}

function renderOutput(agentId, output) {
	return `<div class="output-block"><h4>${escapeHtml(agentCatalog[agentId].outputTitle)}</h4><p>${escapeHtml(output.memo)}</p><table><thead><tr>${output.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead><tbody>${output.rows.map((row, rowIndex) => `<tr>${row.map((cell, cellIndex) => `<td contenteditable="true" data-edit="${agentId}:${rowIndex}:${cellIndex}">${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>${renderVersionCompare(output)}${output.critique ? `<p class="warning">${escapeHtml(output.critique)}</p>` : ""}${output.alternatives.length ? `<div class="alternative-box"><strong>Alternatives considered</strong>${output.alternatives.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}</div>` : ""}<p class="warning">Citation warning: no unsupported citations are generated. Mark outputs for citation verification before publication claims.</p></div>`;
}

function renderVersionCompare(output) {
	if (!output.versions?.length) return "";
	const first = output.versions[0];
	const latest = output.versions[output.versions.length - 1];
	return `<details><summary>Side-by-side version comparison (${output.versions.length})</summary><div class="compare-grid"><div><strong>Original: ${escapeHtml(first.label)}</strong><pre>${escapeHtml(tableToMarkdown(first.headers, first.rows))}</pre></div><div><strong>Latest: ${escapeHtml(latest.label)}</strong><pre>${escapeHtml(tableToMarkdown(latest.headers, latest.rows))}</pre></div></div></details>`;
}

function selectForReview(agentId) {
	state.reviewTarget = agentId;
	save();
}

function phaseDecision(status) {
	const agentId = state.reviewTarget || firstOutputInActivePhase();
	if (!agentId || !state.outputs[agentId]) return;
	const humanEdits = syncEditableOutput(agentId);
	const comment = document.getElementById("reviewComment").value.trim();
	state.decisions[agentId] = {
		status,
		comment,
		timestamp: new Date().toISOString(),
	};
	record(
		phaseForAgent(agentId).id,
		"Human Review Checkpoint",
		`Review ${agentCatalog[agentId].name}`,
		`${status}: ${agentCatalog[agentId].outputTitle}`,
		status,
		comment,
	);
	state.outputs[agentId].revisedAt = new Date().toISOString();
	storeVersion(agentId, `human ${status}`);
	state.provenance[0].full_output = structuredClone(state.outputs[agentId]);
	state.provenance[0].human_edits = humanEdits;
	state.provenance[0].decision_log = state.decisions[agentId];
	document.getElementById("reviewComment").value = "";
	save();
	show(state.active);
}

function syncEditableOutput(agentId) {
	const edits = [];
	document.querySelectorAll(`[data-edit^="${agentId}:"]`).forEach((cell) => {
		const [, rowIndex, cellIndex] = cell.dataset.edit.split(":");
		const previous =
			state.outputs[agentId].rows[Number(rowIndex)][Number(cellIndex)];
		const next = cell.textContent.trim();
		if (previous !== next) {
			edits.push({
				row: Number(rowIndex),
				column: Number(cellIndex),
				previous,
				next,
			});
		}
		state.outputs[agentId].rows[Number(rowIndex)][Number(cellIndex)] = next;
	});
	return edits;
}

function storeVersion(agentId, label) {
	const output = state.outputs[agentId];
	if (!output) return;
	output.versions = output.versions || [];
	output.versions.push({
		label,
		timestamp: new Date().toISOString(),
		headers: [...output.headers],
		rows: output.rows.map((row) => [...row]),
		memo: output.memo,
	});
}

function firstOutputInActivePhase() {
	const phase = phaseDefinitions.find((item) => item.id === state.active);
	if (!phase) return "";
	return phase.agents.find((agentId) => state.outputs[agentId]) || "";
}

function renderReview() {
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Human Review & Approval Hub</p><h2>Mandatory checkpoints and decisions</h2><p>Every major agent output can be approved, rejected, revised, marked uncertain, sent for citation verification, or escalated for expert review. Each phase also has an end-of-phase approval checkpoint.</p><h3>Phase checkpoints</h3><table><thead><tr><th>Phase</th><th>Status</th><th>Comment</th><th>Timestamp</th></tr></thead><tbody>${phaseDefinitions.map((phase) => `<tr><td>${phase.short}: ${phase.title}</td><td><span class="pill">${state.phaseDecisions[phase.id]?.status || "pending"}</span></td><td>${escapeHtml(state.phaseDecisions[phase.id]?.comment || "—")}</td><td>${escapeHtml(state.phaseDecisions[phase.id]?.timestamp || "—")}</td></tr>`).join("")}</tbody></table><h3>Agent decisions</h3><table><thead><tr><th>Phase</th><th>Agent output</th><th>Decision</th><th>Human comment</th></tr></thead><tbody>${phaseDefinitions.flatMap((phase) => phase.agents.map((agentId) => `<tr><td>${phase.short}</td><td>${agentCatalog[agentId].name}</td><td><span class="pill">${state.decisions[agentId]?.status || "pending"}</span></td><td>${escapeHtml(state.decisions[agentId]?.comment || "—")}</td></tr>`)).join("")}</tbody></table></section>`;
}

function renderSources() {
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Source verifier</p><h2>Citation and grounding checks</h2><p>Track sources, retrieved passages, verification notes, and weak-evidence warnings. This prevents hallucinated citations by requiring human verification.</p><table><thead><tr><th>Source</th><th>Passage</th><th>Status</th><th>Action</th></tr></thead><tbody>${state.references.map((reference, index) => `<tr><td>${escapeHtml(reference.title)}<br><small>${escapeHtml(reference.source)}</small></td><td>${escapeHtml(reference.excerpt)}</td><td><span class="pill">${escapeHtml(reference.status)}</span></td><td><button type="button" class="secondary" data-verify="${index}">Mark verified</button></td></tr>`).join("") || `<tr><td colspan="4">No references registered.</td></tr>`}</tbody></table></section>`;
	document.querySelectorAll("[data-verify]").forEach((button) => {
		button.addEventListener("click", () =>
			verifyReference(Number(button.dataset.verify)),
		);
	});
}

function verifyReference(index) {
	state.references[index].status = "verified";
	record(
		"retrieval",
		"Source Verifier",
		"Verify source",
		`Verified ${state.references[index].title}`,
		"verified",
	);
	save();
	renderSources();
}

function renderEvaluation() {
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Evaluation protocol</p><h2>Expert-rating rubric</h2><p>Score the theory-construction package against the evaluation criteria in the PRD.</p><table><thead><tr><th>Phase</th><th>Criteria</th><th>Score</th></tr></thead><tbody>${evaluationRubric.map(([phase, criteria]) => `<tr><td>${phase}</td><td>${criteria}</td><td><input class="score-input" data-score="${phase}" type="number" min="1" max="5" value="${escapeAttr(state.scores[phase] || "")}" placeholder="1-5"></td></tr>`).join("")}</tbody></table><button type="button" id="saveScores">Save evaluation scores</button></section>`;
	document.getElementById("saveScores").addEventListener("click", saveScores);
}

function saveScores() {
	document.querySelectorAll("[data-score]").forEach((input) => {
		state.scores[input.dataset.score] = input.value;
	});
	record(
		"evaluation",
		"Evaluation Rubric",
		"Save scores",
		"Saved expert-rating rubric scores",
		"saved",
	);
	save();
	renderEvaluation();
}

function renderExport() {
	const markdown = buildMarkdown();
	const provenanceJson = JSON.stringify(buildFullAuditPackage(), null, 2);
	view.innerHTML = `<section class="card ribbon"><p class="eyebrow">Provenance & Export</p><h2>Research package exports</h2><p>Export the full theory-construction package, provenance trail, item table, construct report, measurement development report, design memo, theory refinement memo, decision trail, and GenAI-use appendix.</p><div class="button-row"><button type="button" data-download="report">Markdown report</button><button type="button" class="secondary" data-download="provenance">JSON provenance</button><button type="button" class="secondary" data-download="items">CSV item table</button><button type="button" class="secondary" data-download="constructs">Construct report</button><button type="button" class="secondary" data-download="measurement">Measurement report</button><button type="button" class="secondary" data-download="design">Design memo</button><button type="button" class="secondary" data-download="refinement">Refinement memo</button><button type="button" class="secondary" data-download="decisions">Decision trail</button><button type="button" class="secondary" data-download="appendix">GenAI-use appendix</button></div></section><section class="card"><p class="eyebrow">Markdown preview</p><div class="export-box">${escapeHtml(markdown)}</div></section><section class="card"><p class="eyebrow">Provenance JSON preview</p><div class="export-box">${escapeHtml(provenanceJson)}</div></section>`;
	document.querySelectorAll("[data-download]").forEach((button) => {
		button.addEventListener("click", () => exportFile(button.dataset.download));
	});
}

function exportFile(kind) {
	const files = {
		report: ["agentic-theory-lab-report.md", buildMarkdown(), "text/markdown"],
		provenance: [
			"agentic-theory-lab-provenance.json",
			JSON.stringify(buildFullAuditPackage(), null, 2),
			"application/json",
		],
		items: [
			"agentic-theory-lab-items.csv",
			buildCsv(
				["Construct", "Item", "Type", "Warning"],
				state.outputs.item_generation?.rows || [],
			),
			"text/csv",
		],
		constructs: [
			"agentic-theory-lab-constructs.md",
			sectionMarkdown([
				"phenomenon_definition",
				"reference_mapping",
				"construct_decomposition",
				"mechanism_articulation",
			]),
			"text/markdown",
		],
		design: [
			"agentic-theory-lab-design-memo.md",
			sectionMarkdown([
				"design_selection",
				"experimental_design",
				"longitudinal_design",
				"econometric_identification",
			]),
			"text/markdown",
		],
		measurement: [
			"agentic-theory-lab-measurement-report.md",
			sectionMarkdown([
				"item_generation",
				"item_sorting",
				"measurement_model",
				"psychometric_validation",
			]),
			"text/markdown",
		],
		refinement: [
			"agentic-theory-lab-refinement-memo.md",
			sectionMarkdown([
				"competing_model",
				"mediation_moderation",
				"robustness_validity",
				"theory_refinement",
			]),
			"text/markdown",
		],
		decisions: [
			"agentic-theory-lab-decision-trail.md",
			buildDecisionTrail(),
			"text/markdown",
		],
		appendix: [
			"agentic-theory-lab-genai-appendix.md",
			buildAppendix(),
			"text/markdown",
		],
	};
	const [name, content, type] = files[kind];
	state.exportHistory.unshift({ name, timestamp: new Date().toISOString() });
	record(
		"export",
		"Export Layer",
		`Download ${name}`,
		`Exported ${name}`,
		"exported",
	);
	save();
	download(name, content, type);
}

function buildFullAuditPackage() {
	return {
		project: state.project,
		documents: state.documents,
		references: state.references,
		outputs: state.outputs,
		agent_decisions: state.decisions,
		phase_decisions: state.phaseDecisions,
		evaluation_scores: state.scores,
		export_history: state.exportHistory,
		provenance: state.provenance,
	};
}

function buildMarkdown() {
	const phaseSections = phaseDefinitions
		.map(
			(phase) =>
				`## ${phase.title}\n\n${phase.agents.map(agentMarkdown).join("\n\n")}`,
		)
		.join("\n\n");
	return `# ${state.project.title}\n\n${state.project.description}\n\nField / journal: ${state.project.field || state.project.journal || "Not specified"}\n\nEmpirical context: ${state.project.context || "Not specified"}\n\n${phaseSections}\n\n${buildAppendix()}`;
}

function agentMarkdown(agentId) {
	const agent = agentCatalog[agentId];
	const output = state.outputs[agentId];
	if (!output) return `### ${agent.name}\n\nNot generated yet.`;
	return `### ${agent.name}\n\nDecision: ${state.decisions[agentId]?.status || "awaiting review"}\n\n${output.memo}\n\n${tableToMarkdown(output.headers, output.rows)}${output.critique ? `\n\n${output.critique}` : ""}`;
}

function sectionMarkdown(agentIds) {
	return agentIds.map(agentMarkdown).join("\n\n");
}

function buildAppendix() {
	return `## GenAI-use appendix\n\nAgenticTheoryLab used deterministic, source-bounded agent modules to generate candidate theory-construction outputs. The system recorded project inputs, agent outputs, model identifiers, sources used, retrieved passages, human approvals, revisions, rejected alternatives, citation-verification requests, expert-review escalations, and export history. Human researchers retain final scholarly judgement and publication accountability.\n\nExports generated: ${state.exportHistory.map((item) => item.name).join(", ") || "none yet"}.`;
}

function buildDecisionTrail() {
	const phaseRows = phaseDefinitions.map((phase) => [
		phase.short,
		phase.title,
		state.phaseDecisions[phase.id]?.status || "pending",
		state.phaseDecisions[phase.id]?.comment || "",
	]);
	const agentRows = phaseDefinitions.flatMap((phase) =>
		phase.agents.map((agentId) => [
			phase.short,
			agentCatalog[agentId].name,
			state.decisions[agentId]?.status || "pending",
			state.decisions[agentId]?.comment || "",
		]),
	);
	return `# Decision Trail\n\n## Phase checkpoints\n\n${tableToMarkdown(["Phase", "Scope", "Decision", "Comment"], phaseRows)}\n\n## Agent decisions\n\n${tableToMarkdown(["Phase", "Agent", "Decision", "Comment"], agentRows)}`;
}

function tableToMarkdown(headers, rows) {
	return `| ${headers.join(" | ")} |\n| ${headers.map(() => "---").join(" | ")} |\n${rows.map((row) => `| ${row.join(" | ")} |`).join("\n")}`;
}

function buildCsv(headers, rows) {
	return [headers, ...rows]
		.map((row) =>
			row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","),
		)
		.join("\n");
}

function download(name, content, type) {
	const blob = new Blob([content], { type });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = name;
	link.click();
	URL.revokeObjectURL(url);
}

function phaseForAgent(agentId) {
	return phaseDefinitions.find((phase) => phase.agents.includes(agentId));
}

function renderList(items, renderer) {
	return items.length
		? items
				.map((item) => `<div class="list-card">${renderer(item)}</div>`)
				.join("")
		: "<p>No records yet.</p>";
}

function inputValue(id) {
	return document.getElementById(id).value.trim();
}

function slug(value) {
	return (
		value
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "_")
			.replace(/^_|_$/g, "") || "atl_project_001"
	);
}

function escapeHtml(value) {
	return String(value || "").replace(
		/[&<>"]/g,
		(char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char],
	);
}

function escapeAttr(value) {
	return escapeHtml(value).replace(/'/g, "&#39;");
}

document.getElementById("seedExample").addEventListener("click", loadExample);
document
	.getElementById("approveBtn")
	.addEventListener("click", () => phaseDecision("approved"));
document
	.getElementById("reviseBtn")
	.addEventListener("click", () => phaseDecision("revised"));
document
	.getElementById("rejectBtn")
	.addEventListener("click", () => phaseDecision("rejected"));
document
	.getElementById("uncertainBtn")
	.addEventListener("click", () =>
		phaseDecision("uncertain - citation verification requested"),
	);
document
	.getElementById("alternativesBtn")
	.addEventListener(
		"click",
		() => state.reviewTarget && requestAlternative(state.reviewTarget),
	);
document
	.getElementById("citationBtn")
	.addEventListener("click", () =>
		phaseDecision("citation verification requested"),
	);
document
	.getElementById("expertBtn")
	.addEventListener("click", () =>
		phaseDecision("escalated for expert review"),
	);

updateChrome();
show(state.active || "project");
