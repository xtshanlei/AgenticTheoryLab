# Project Requirements Document  
## AgenticTheoryLab: A Human-in-the-Loop Multi-Agent System for Information Systems Theory Construction

---

## 1. Project Overview

### 1.1 Project Name

**AgenticTheoryLab**

### 1.2 Short Description

AgenticTheoryLab is a human-in-the-loop multi-agent research system designed to support the full lifecycle of theory construction in Information Systems research. It assists researchers across four phases: conceptualisation and theoretical framing, instrument development and measurement, rigorous research design and data collection, and model testing, evaluation, and theory refinement.

### 1.3 Project Vision

The vision of AgenticTheoryLab is to provide an auditable, structured, and theoretically disciplined environment where Information Systems researchers can use agentic AI to support theory construction without surrendering scholarly judgement.

The system should not act as an autonomous theorist. Instead, it should function as a research collaborator that helps scholars generate alternatives, compare theoretical framings, decompose constructs, design measurements, identify empirical strategies, test competing models, and document the provenance of human–AI collaboration.

### 1.4 Core Positioning

AgenticTheoryLab is:

> A human-governed agentic AI laboratory for supporting Information Systems theory construction from research problem definition to theory refinement.

It is not:

- a generic chatbot,
- a simple literature review assistant,
- an automated paper-writing tool,
- a black-box theory generator,
- a replacement for human researchers.

---

## 2. Project Rationale

### 2.1 Problem Statement

Information Systems theory construction is a complex, multi-stage process. Researchers must define dependent variables, integrate reference disciplines, decompose constructs, develop valid instruments, design rigorous empirical studies, compare competing models, test mechanisms, and refine theory.

However, the use of generative AI in research is often informal, fragmented, and poorly documented. Researchers may use LLMs for brainstorming, summarising, or editing, but there is limited structured support for the full IS theory-construction lifecycle.

This creates several problems:

1. **Lack of theoretical discipline**  
   AI-generated ideas may sound plausible but lack grounding in IS theory.

2. **Poor traceability**  
   Researchers may not be able to document how AI contributed to constructs, mechanisms, items, or hypotheses.

3. **Weak measurement support**  
   Existing tools often help generate ideas but do not support item development, construct validity, or measurement model reasoning.

4. **Limited empirical rigour**  
   AI may suggest research designs without considering identification, validity threats, longitudinal logic, or endogeneity.

5. **Automation bias**  
   Researchers may over-trust AI-generated outputs without adequate critique or human adjudication.

6. **Fragmented workflow**  
   The research process is not connected across conceptualisation, measurement, design, analysis, and refinement.

### 2.2 Proposed Solution

AgenticTheoryLab addresses these problems by providing a structured multi-agent workflow aligned with the four phases of IS theory construction:

1. **Conceptualisation and Theoretical Framing**
2. **Instrument Development and Measurement**
3. **Rigorous Research Design and Data Collection**
4. **Model Testing, Evaluation, and Theory Refinement**

Each phase contains specialised agents that perform bounded tasks. Human researchers review, approve, reject, and revise all major outputs.

A provenance layer records prompts, sources, model versions, agent outputs, human edits, rejected suggestions, and final decisions.

---

## 3. Target Users

### 3.1 Primary Users

| User Type | Description | Main Needs |
|---|---|---|
| IS researchers | Academic researchers developing theory-driven IS studies | Theory framing, construct development, research design |
| PhD students | Early-career researchers learning theory construction | Structured guidance, examples, feedback |
| Research teams | Multi-author teams developing manuscripts | Shared workflow, provenance, consistency |
| Methodologists | Researchers interested in AI-supported research methods | Auditable agentic workflows |
| Supervisors | Academics supervising doctoral or funded research | Reviewable outputs and decision trails |

### 3.2 Secondary Users

| User Type | Description | Main Needs |
|---|---|---|
| Journal authors | Researchers preparing submissions involving GenAI use | Transparent GenAI-use documentation |
| Reviewers/editors | Evaluators of AI-supported research | Traceability and audit trail |
| Research software developers | Developers building academic AI tools | Modular architecture and APIs |
| Research ethics committees | Bodies assessing AI-supported research workflows | Accountability and human oversight |

---

## 4. Project Goals

### 4.1 Main Goal

To develop a human-in-the-loop multi-agent system that supports Information Systems researchers in constructing, measuring, testing, and refining theory in a rigorous, transparent, and auditable manner.

### 4.2 Specific Goals

AgenticTheoryLab should:

1. Help researchers define focal IS phenomena and dependent variables.
2. Support integration of IS and reference-discipline theories.
3. Assist construct decomposition and mechanism articulation.
4. Generate candidate measurement items.
5. Identify construct overlap and ambiguous items.
6. Support measurement model specification.
7. Recommend appropriate empirical research designs.
8. Identify validity threats and identification challenges.
9. Compare competing theoretical models.
10. Support mediation, moderation, and robustness reasoning.
11. Assist theory refinement after empirical findings.
12. Record a complete provenance trail of human–AI collaboration.
13. Keep human researchers in control of theoretical judgement and final decisions.

---

## 5. Scope

### 5.1 In Scope

The project will include:

- multi-agent workflow design,
- user-facing research workflow interface,
- agent orchestration,
- phase-based task modules,
- human review checkpoints,
- source tracking,
- provenance logging,
- exportable research outputs,
- evaluation rubrics,
- example workflows,
- documentation.

### 5.2 Out of Scope for MVP

The first version does not need to include:

- fully automated literature search across all academic databases,
- direct submission to journals,
- automatic statistical analysis of user datasets,
- full survey deployment,
- full SEM/PLS modelling engine,
- automatic causal inference pipeline,
- collaborative multi-user editing,
- institutional ethics review automation,
- automatic manuscript writing.

These can be considered future extensions.

---

## 6. Four-Phase Workflow

AgenticTheoryLab is organised around four major labs.

---

# Phase 1: Conceptualisation and Theoretical Framing

## 6.1 Purpose

This phase supports the theoretical foundation of the study. It helps researchers define the focal phenomenon, clarify dependent variables, integrate reference theories, decompose constructs, and articulate candidate mechanisms.

## 6.2 Inputs

The system should accept:

- research problem statement,
- focal IS phenomenon,
- initial research question,
- target journal or field,
- known theories,
- relevant literature,
- empirical context,
- user notes,
- conceptual diagrams,
- optional uploaded papers or summaries.

## 6.3 Outputs

The system should produce:

- refined research problem,
- candidate dependent variables,
- unit of analysis,
- theoretical scope,
- boundary conditions,
- reference-theory map,
- construct definitions,
- construct decomposition table,
- candidate theoretical mechanisms,
- initial conceptual model,
- human-approved conceptual framing.

---

## 6.4 Agents in Phase 1

### 6.4.1 Phenomenon Definition Agent

#### Role

Clarifies the IS phenomenon and dependent variable.

#### Functional Requirements

The agent shall:

- parse the user’s research problem,
- identify the focal phenomenon,
- suggest possible dependent variables,
- distinguish outcome variables from explanatory variables,
- identify unit of analysis,
- identify scope conditions,
- flag ambiguous or overly broad outcomes,
- ask for human selection or revision.

#### Example Output

| Candidate dependent variable | Definition | Unit of analysis | Risk |
|---|---|---|---|
| Agent observability | Degree to which users can see AI-agent goals, plans, tool use, and traces | Individual/system | May overlap with explainability |
| Accountability clarity | Degree to which responsibility for AI-supported actions is clear | Individual/team/organisation | Needs precise operationalisation |
| Human override effectiveness | Ability to detect and intervene in inappropriate AI-agent actions | Individual/team | Requires experimental or log data |

---

### 6.4.2 Reference Discipline Mapping Agent

#### Role

Maps relevant theories from IS and reference disciplines.

#### Functional Requirements

The agent shall:

- identify relevant IS theories,
- identify relevant reference-discipline theories,
- explain how each theory may contribute,
- identify imported constructs,
- warn against superficial or inappropriate theory borrowing,
- produce a theory comparison table.

#### Example Output

| Theory | Discipline | Key concept | Potential IS adaptation |
|---|---|---|---|
| Organisational control theory | Management | Behaviour/output control | Human oversight of AI agents |
| Trust theory | Psychology/IS | Trusting beliefs | Trust calibration in agentic AI |
| Delegation theory | Organisation studies | Delegated authority | Delegated digital agency |
| Metacognition | Psychology | Awareness of knowledge limits | Judgement about when to delegate to AI |

---

### 6.4.3 Construct Decomposition Agent

#### Role

Decomposes broad constructs into clearer multidimensional constructs.

#### Functional Requirements

The agent shall:

- identify broad or monolithic constructs,
- propose construct dimensions,
- distinguish related constructs,
- flag construct overlap,
- suggest formative or reflective interpretations,
- propose conceptual definitions.

#### Example Output

| Broad construct | Proposed dimensions |
|---|---|
| Agent observability | Goal visibility, plan visibility, tool-use visibility, data-access visibility, decision-trace visibility |
| Human control | Monitoring capacity, override capacity, escalation capacity, review capacity |
| Accountability | Responsibility assignment, role clarity, auditability, liability perception |

---

### 6.4.4 Mechanism Articulation Agent

#### Role

Develops candidate theoretical mechanisms connecting constructs.

#### Functional Requirements

The agent shall:

- generate mechanism statements,
- connect mechanisms to theories,
- identify assumptions,
- identify possible mediators,
- identify possible moderators,
- produce candidate propositions.

#### Example Output

| Mechanism | Logic | Possible proposition |
|---|---|---|
| Early detection mechanism | Greater agent observability helps users identify problematic AI-agent actions earlier | Agent observability improves intervention readiness |
| Accountability anchoring mechanism | Traceability helps assign responsibility for agent-supported decisions | Traceability improves accountability clarity |
| Automation complacency mechanism | Excessive trust may reduce monitoring effort | Over-trust weakens oversight quality |

---

# Phase 2: Instrument Development and Measurement

## 6.5 Purpose

This phase supports measurement development. It helps researchers operationalise constructs, generate items, assess construct overlap, plan validation, and reason about measurement models.

## 6.6 Inputs

The system should accept:

- construct definitions,
- conceptual model,
- candidate mechanisms,
- literature-derived scales,
- user-provided items,
- target population,
- data collection mode,
- survey/interview/log-data context.

## 6.7 Outputs

The system should produce:

- candidate measurement items,
- item-construct mapping,
- ambiguous item report,
- construct overlap report,
- measurement model recommendation,
- validation plan,
- human-approved measurement specification.

---

## 6.8 Agents in Phase 2

### 6.8.1 Item Generation Agent

#### Role

Generates candidate items for each construct.

#### Functional Requirements

The agent shall:

- generate multiple items per construct,
- align each item with a construct definition,
- avoid double-barrelled items,
- avoid leading wording,
- avoid anthropomorphic wording unless theoretically justified,
- distinguish perceptual items from behavioural indicators,
- suggest Likert-scale wording where appropriate.

#### Example Output

Construct: **Agent observability**

Candidate items:

- “I can see what goal the AI agent is trying to accomplish.”
- “I can review the sequence of actions taken by the AI agent.”
- “I can identify which data sources the AI agent accessed.”
- “I can understand why the AI agent selected a particular tool.”
- “The AI agent’s actions are recorded in a way that can be audited.”

---

### 6.8.2 Item Sorting Agent

#### Role

Supports item sorting and content validity checks.

#### Functional Requirements

The agent shall:

- assign candidate items to constructs,
- identify items that could belong to multiple constructs,
- flag ambiguous items,
- flag items with unclear referents,
- suggest revised wording,
- prepare item-sorting sheets for human judges.

#### Example Output

| Item | Intended construct | Issue | Recommendation |
|---|---|---|---|
| “I understand why the AI agent made its decision.” | Explainability sufficiency | May overlap with observability | Clarify whether item refers to explanation or visibility |
| “I can stop the AI agent when needed.” | Human override capacity | Clear | Retain |
| “The AI agent behaves responsibly.” | Accountability clarity | Too vague | Replace with responsibility-assignment item |

---

### 6.8.3 Measurement Model Agent

#### Role

Suggests appropriate measurement model types.

#### Functional Requirements

The agent shall:

- identify reflective constructs,
- identify formative constructs,
- identify second-order constructs,
- identify behavioural/log-based indicators,
- recommend whether survey, behavioural, textual, or system-log measures are suitable,
- explain measurement assumptions.

#### Example Output

| Construct | Recommended model | Reason |
|---|---|---|
| Agent observability | Formative or second-order | Multiple visibility dimensions jointly form observability |
| Accountability clarity | Reflective | Items reflect a common latent perception |
| Governance latency | Objective/log-based | Time delay can be captured from system traces |
| Trust calibration | Hybrid | Requires both perception and behaviour |

---

### 6.8.4 Psychometric Validation Agent

#### Role

Plans psychometric validation.

#### Functional Requirements

The agent shall:

- recommend EFA or CFA where appropriate,
- recommend reliability checks,
- recommend convergent validity checks,
- recommend discriminant validity checks,
- flag common method bias risks,
- recommend measurement invariance checks,
- suggest pilot testing procedures,
- generate a validation checklist.

#### Example Output

| Validation concern | Suggested action |
|---|---|
| Observability and explainability may overlap | Test discriminant validity |
| Some constructs may be formative | Do not rely only on Cronbach’s alpha |
| Different user groups may interpret items differently | Test measurement invariance |
| Self-reported governance effectiveness may be biased | Add behavioural or log-based indicators |

---

# Phase 3: Rigorous Research Design and Data Collection

## 6.9 Purpose

This phase helps researchers choose appropriate empirical designs and data collection strategies to test the theory.

## 6.10 Inputs

The system should accept:

- conceptual model,
- propositions or hypotheses,
- measurement specification,
- target population,
- available data,
- possible interventions,
- research constraints,
- ethical constraints,
- institutional constraints.

## 6.11 Outputs

The system should produce:

- recommended research design,
- alternative design options,
- experimental design plan,
- longitudinal design plan,
- econometric identification plan,
- data requirements,
- validity threat assessment,
- human-approved empirical strategy.

---

## 6.12 Agents in Phase 3

### 6.12.1 Research Design Selection Agent

#### Role

Matches research questions to appropriate empirical designs.

#### Functional Requirements

The agent shall:

- classify the type of research question,
- suggest suitable designs,
- compare design trade-offs,
- identify feasibility constraints,
- distinguish exploratory, explanatory, causal, and validation studies,
- recommend mixed-method designs where appropriate.

#### Example Output

| Research question | Recommended design |
|---|---|
| Does agent observability improve human intervention quality? | Controlled experiment |
| How does trust calibration evolve over time? | Longitudinal panel study |
| Do firms with stronger observability systems experience fewer AI incidents? | Observational econometric study |
| How do professionals negotiate accountability with AI agents? | Qualitative field study |

---

### 6.12.2 Experimental Design Agent

#### Role

Designs controlled experiments.

#### Functional Requirements

The agent shall:

- propose experimental treatments,
- define control conditions,
- suggest randomisation strategy,
- suggest manipulation checks,
- define dependent variables,
- identify confounds,
- suggest sample requirements,
- prepare experiment protocol drafts.

#### Example Experimental Design

| Condition | Description |
|---|---|
| Low observability | Only final AI-agent recommendation is shown |
| Medium observability | Recommendation plus explanation is shown |
| High observability | Goal, plan, tool use, data sources, and action trace are shown |

Possible outcomes:

- task performance,
- intervention accuracy,
- over-reliance,
- under-reliance,
- perceived accountability clarity,
- cognitive load,
- trust calibration.

---

### 6.12.3 Longitudinal Design Agent

#### Role

Designs longitudinal studies.

#### Functional Requirements

The agent shall:

- identify variables to track over time,
- suggest measurement intervals,
- identify expected temporal mechanisms,
- distinguish short-term and long-term effects,
- suggest retention strategies,
- identify temporal validity threats.

#### Example Output

A six-week longitudinal study tracking:

- delegation frequency,
- override frequency,
- perceived control,
- trust calibration,
- perceived agent competence,
- review burden,
- accountability clarity.

---

### 6.12.4 Econometric Identification Agent

#### Role

Supports empirical identification for observational data.

#### Functional Requirements

The agent shall:

- identify endogeneity risks,
- suggest possible identification strategies,
- propose control variables,
- identify possible instruments,
- suggest fixed effects structures,
- recommend robustness checks,
- flag weak identification claims.

#### Example Output

| Threat | Example | Possible response |
|---|---|---|
| Selection bias | More mature firms adopt observability tools earlier | Propensity score matching or fixed effects |
| Reverse causality | AI incidents trigger governance investment | Lagged independent variables or event study |
| Omitted variables | AI maturity affects both governance and outcomes | Firm fixed effects and maturity controls |
| Measurement error | Incident reporting varies by organisation | Alternative outcome measures |

---

# Phase 4: Model Testing, Evaluation, and Theory Refinement

## 6.13 Purpose

This phase supports hypothesis testing, competing model comparison, mediation and moderation analysis, robustness reasoning, and theory refinement.

## 6.14 Inputs

The system should accept:

- data description,
- empirical results,
- model outputs,
- statistical tables,
- qualitative findings,
- competing theories,
- rejected models,
- reviewer comments,
- robustness results.

## 6.15 Outputs

The system should produce:

- competing model comparison,
- mediation and moderation interpretation,
- robustness assessment,
- refined theoretical model,
- revised propositions,
- boundary conditions,
- limitations,
- final theory contribution statement.

---

## 6.16 Agents in Phase 4

### 6.16.1 Competing Model Agent

#### Role

Generates and compares alternative theoretical explanations.

#### Functional Requirements

The agent shall:

- identify rival models,
- compare explanatory power,
- compare parsimony,
- identify theoretical overlap,
- identify contradictory predictions,
- produce model comparison tables.

#### Example Output

| Model | Core logic | Competing prediction |
|---|---|---|
| Observability model | Visibility improves governance | More observability improves intervention |
| Trust calibration model | Appropriate trust improves governance | Trust calibration explains performance better than visibility |
| Control burden model | Too much visibility creates overload | Excessive observability reduces performance |
| Socio-technical fit model | Fit between autonomy and workflow matters | Observability only helps under high workflow coupling |

---

### 6.16.2 Mediation and Moderation Agent

#### Role

Unpacks mechanisms and boundary conditions.

#### Functional Requirements

The agent shall:

- identify likely mediators,
- identify likely moderators,
- distinguish mediation from moderation,
- map mechanisms to statistical tests,
- suggest interpretation of direct and indirect effects,
- recommend conditional process models where appropriate.

#### Example Output

| Relationship | Mediator |
|---|---|
| Agent observability → governance effectiveness | Intervention readiness |
| Traceability → accountability clarity | Perceived auditability |
| Explainability → appropriate delegation | Metacognitive calibration |
| Agent autonomy → acceptance | Perceived professional control |

| Relationship | Moderator |
|---|---|
| Observability → intervention quality | User expertise |
| Autonomy → trust | Task risk |
| Explainability → delegation | Domain knowledge |
| Agent use → productivity | Workflow coupling |

---

### 6.16.3 Robustness and Validity Agent

#### Role

Suggests robustness checks and identifies validity threats.

#### Functional Requirements

The agent shall:

- recommend alternative model specifications,
- suggest alternative dependent variables,
- suggest alternative operationalisations,
- identify subgroup analyses,
- suggest placebo tests,
- identify common method bias risks,
- identify fairness or demographic concerns,
- suggest sensitivity analyses,
- prepare robustness checklist.

#### Example Output

| Validity concern | Suggested robustness check |
|---|---|
| Self-report bias | Add behavioural/log-based indicators |
| Construct overlap | Test discriminant validity |
| Overfitting | Use holdout validation or preregistered models |
| Demographic variation | Conduct subgroup or fairness analysis |
| Endogeneity | Use lagged variables or IV strategy |

---

### 6.16.4 Theory Refinement Agent

#### Role

Helps revise the theory after empirical testing.

#### Functional Requirements

The agent shall:

- compare expected and observed findings,
- identify unsupported propositions,
- suggest refined constructs,
- identify boundary conditions,
- propose revised theoretical mechanisms,
- produce a theory refinement memo.

#### Example Output

Original proposition:

> Agent observability improves governance effectiveness.

Refined proposition:

> Agent observability improves governance effectiveness when users possess sufficient domain expertise and when observability interfaces do not impose excessive review burden.

---

## 7. Human-in-the-Loop Requirements

### 7.1 Human Roles

Human researchers must remain responsible for:

- research problem framing,
- theory selection,
- construct definition approval,
- item approval,
- research design choice,
- data interpretation,
- empirical judgement,
- final theory contribution,
- ethical responsibility,
- publication accountability.

### 7.2 Human Review Checkpoints

AgenticTheoryLab should include mandatory human checkpoints after each phase.

| Checkpoint | Human decision |
|---|---|
| End of Phase 1 | Approve conceptual model and constructs |
| End of Phase 2 | Approve measurement specification |
| End of Phase 3 | Approve empirical design |
| End of Phase 4 | Approve refined theory and contribution claims |

### 7.3 Decision Options

At each checkpoint, the user should be able to:

- approve,
- reject,
- revise,
- request alternatives,
- add comments,
- mark as uncertain,
- request citation verification,
- escalate for expert review.

### 7.4 Human Authority Principle

The system shall always make clear that:

> Agentic AI supports synthesis, generation, comparison, critique, and documentation; human researchers retain scholarly judgement and accountability.

---

## 8. Provenance and Auditability Requirements

### 8.1 Purpose

The provenance layer records the full human–AI collaboration process. It is essential for transparency, reproducibility, and journal reporting.

### 8.2 Data to Capture

The system shall record:

| Element | Description |
|---|---|
| User prompts | Researcher instructions and queries |
| Agent prompts | Internal prompts sent to agents |
| Model versions | LLM and tool versions used |
| Sources | Literature, datasets, notes, and references used |
| Retrieved passages | Relevant source excerpts |
| Agent outputs | Generated concepts, items, designs, and critiques |
| Human edits | User revisions and approvals |
| Rejected suggestions | Alternatives considered but not adopted |
| Decision logs | Human approval/rejection decisions |
| Validation notes | Citation checks and quality checks |
| Export history | Generated reports and files |

### 8.3 Provenance Export

The system should allow export of:

- GenAI-use appendix,
- provenance report,
- decision trail,
- construct development report,
- measurement development report,
- research design memo,
- theory refinement memo.

### 8.4 Example Provenance Record

```json
{
  "project_id": "atl_project_001",
  "phase": "conceptualisation",
  "agent": "construct_decomposition_agent",
  "input": "Define dimensions of agent observability",
  "model": "gpt-x",
  "sources_used": ["paper_001", "paper_002"],
  "output_summary": "Proposed five dimensions of agent observability",
  "human_decision": "revised",
  "human_comment": "Merged plan visibility and tool-use visibility",
  "timestamp": "2026-05-01T10:30:00Z"
}
```

---

## 9. Functional Requirements Summary

### 9.1 Project Management

The system shall allow users to:

- create a new research project,
- define project title and description,
- specify target field or journal,
- upload project documents,
- save workflow progress,
- revisit prior phase outputs,
- export project outputs.

### 9.2 Document Input

The system shall support:

- pasted text,
- uploaded literature summaries,
- uploaded conceptual notes,
- uploaded tables,
- uploaded empirical design notes,
- uploaded statistical results,
- manually entered references.

### 9.3 Agent Execution

The system shall allow users to:

- run individual agents,
- run a full phase workflow,
- request alternative outputs,
- compare agent outputs,
- request critiques,
- revise outputs,
- save approved outputs.

### 9.4 Human Review

The system shall provide:

- approval buttons,
- rejection buttons,
- revision comments,
- uncertainty flags,
- side-by-side comparison of versions,
- explanation of agent reasoning,
- provenance trail for each output.

### 9.5 Export

The system shall export:

- Markdown reports,
- JSON provenance logs,
- CSV item tables,
- conceptual model summaries,
- measurement tables,
- empirical design memos,
- GenAI-use appendix.

---

## 10. Non-Functional Requirements

### 10.1 Usability

The system should be usable by researchers without software engineering expertise.

Requirements:

- clear phase-based navigation,
- simple input forms,
- editable outputs,
- visual progress indicators,
- readable tables,
- exportable summaries.

### 10.2 Transparency

The system must make visible:

- what each agent does,
- what sources were used,
- what assumptions were made,
- what outputs were AI-generated,
- what humans approved or changed.

### 10.3 Reliability

The system should:

- handle incomplete inputs,
- flag uncertainty,
- avoid fabricating citations,
- warn users when evidence is weak,
- preserve project state.

### 10.4 Modularity

The system should be modular so that agents can be added, removed, or replaced.

### 10.5 Reproducibility

The system should record:

- prompts,
- configurations,
- model versions,
- source documents,
- outputs,
- human decisions.

### 10.6 Security and Privacy

The system should:

- avoid uploading sensitive data without user consent,
- support local or private deployment where possible,
- allow users to delete project data,
- store API keys securely,
- avoid exposing uploaded research materials.

---

## 11. System Architecture

### 11.1 High-Level Architecture

```text
User Interface
    ↓
Project Workspace
    ↓
Workflow Orchestrator
    ↓
Four Labs / Agent Modules
    ↓
LLM Provider + Retrieval Layer
    ↓
Provenance Logger
    ↓
Export Layer
```

### 11.2 Main Components

| Component | Role |
|---|---|
| User Interface | Allows researchers to interact with the system |
| Project Workspace | Stores project information and phase outputs |
| Workflow Orchestrator | Controls agent execution and phase progression |
| Agent Modules | Perform specialised theory-construction tasks |
| Retrieval Layer | Retrieves relevant project documents and literature |
| Source Verifier | Checks citations and source grounding |
| Provenance Logger | Records human–AI collaboration |
| Export Layer | Produces reports and appendices |

---

## 12. Recommended Repository Structure

```text
AgenticTheoryLab/
│
├── README.md
├── LICENSE
├── pyproject.toml
├── .env.example
│
├── docs/
│   ├── overview.md
│   ├── theory_construction_workflow.md
│   ├── agent_design.md
│   ├── provenance_schema.md
│   ├── evaluation_protocol.md
│   └── examples.md
│
├── agentic_theory_lab/
│   ├── __init__.py
│   │
│   ├── labs/
│   │   ├── conceptualisation/
│   │   │   ├── phenomenon_definition_agent.py
│   │   │   ├── reference_mapping_agent.py
│   │   │   ├── construct_decomposition_agent.py
│   │   │   └── mechanism_articulation_agent.py
│   │   │
│   │   ├── measurement/
│   │   │   ├── item_generation_agent.py
│   │   │   ├── item_sorting_agent.py
│   │   │   ├── measurement_model_agent.py
│   │   │   └── psychometric_validation_agent.py
│   │   │
│   │   ├── research_design/
│   │   │   ├── design_selection_agent.py
│   │   │   ├── experimental_design_agent.py
│   │   │   ├── longitudinal_design_agent.py
│   │   │   └── econometric_identification_agent.py
│   │   │
│   │   └── refinement/
│   │       ├── competing_model_agent.py
│   │       ├── mediation_moderation_agent.py
│   │       ├── robustness_validity_agent.py
│   │       └── theory_refinement_agent.py
│   │
│   ├── orchestration/
│   │   ├── workflow.py
│   │   ├── state.py
│   │   └── human_review.py
│   │
│   ├── provenance/
│   │   ├── logger.py
│   │   ├── schema.py
│   │   └── export.py
│   │
│   ├── retrieval/
│   │   ├── document_store.py
│   │   ├── literature_retriever.py
│   │   └── source_verifier.py
│   │
│   ├── evaluation/
│   │   ├── rubric.py
│   │   ├── baseline_comparison.py
│   │   └── expert_rating.py
│   │
│   └── ui/
│       ├── app.py
│       └── components/
│
├── examples/
│   ├── agentic_ai_governance/
│   └── human_ai_delegation/
│
└── tests/
    ├── test_provenance_schema.py
    ├── test_workflow_state.py
    └── test_agent_outputs.py
```

---

## 13. MVP Requirements

### 13.1 MVP Goal

Develop a working prototype that demonstrates the four-phase workflow using one IS research example: **agentic AI governance in enterprise systems**.

### 13.2 MVP Features

The MVP should include:

1. Project creation page.
2. Phase-based workflow navigation.
3. One working agent per phase.
4. Human review and approval after each phase.
5. Provenance logging.
6. Markdown export.
7. Example project template.

### 13.3 MVP Agents

| Phase | MVP Agent |
|---|---|
| Phase 1 | Construct Decomposition Agent |
| Phase 2 | Item Generation Agent |
| Phase 3 | Research Design Selection Agent |
| Phase 4 | Competing Model Agent |

### 13.4 MVP Outputs

The MVP should generate:

- conceptual framing memo,
- construct table,
- measurement item table,
- research design recommendation,
- competing model table,
- provenance report.

---

## 14. Future Features

Future versions could include:

- integration with Zotero,
- integration with Semantic Scholar or Crossref,
- PDF ingestion and citation extraction,
- visual conceptual model builder,
- survey item export to Qualtrics,
- SEM/PLS analysis support,
- causal design assistant,
- experiment protocol generator,
- collaborative multi-user mode,
- peer review simulation,
- journal-specific GenAI-use appendix generator,
- local LLM deployment,
- institutional repository integration.

---

## 15. Evaluation Plan

### 15.1 Evaluation Objective

To assess whether AgenticTheoryLab improves IS theory-construction quality compared with human-only and single-LLM workflows.

### 15.2 Evaluation Conditions

| Condition | Description |
|---|---|
| Human-only | Researchers work without AI support |
| Single-LLM | Researchers use a general chatbot |
| AgenticTheoryLab | Researchers use the structured four-phase workflow |

### 15.3 Evaluation Task

Participants develop a theory around a given IS phenomenon, for example:

> How does agentic AI observability influence human control, trust calibration, and accountability in enterprise workflows?

### 15.4 Evaluation Criteria

| Phase | Criteria |
|---|---|
| Conceptualisation | DV clarity, construct decomposition, theoretical grounding, mechanism quality |
| Measurement | item clarity, construct distinctiveness, measurement-model appropriateness |
| Research design | causal credibility, feasibility, identification of validity threats |
| Refinement | competing model awareness, mediation/moderation logic, robustness planning |
| Overall | novelty, parsimony, traceability, scholarly usefulness |

### 15.5 Evaluation Data

The evaluation should collect:

- final theory outputs,
- participant interaction logs,
- provenance records,
- expert ratings,
- participant interviews,
- time spent,
- number of revisions,
- number of rejected AI suggestions,
- perceived usefulness ratings.

---

## 16. Risks and Mitigations

| Risk | Description | Mitigation |
|---|---|---|
| Hallucinated sources | AI invents references or misrepresents theory | Source verification and citation checks |
| Shallow plausibility | Outputs sound convincing but lack theoretical depth | Counterargument and human review |
| Construct drift | AI changes construct meaning across phases | Construct registry and version control |
| Automation bias | Users over-trust AI outputs | Mandatory human checkpoints |
| Measurement weakness | Items are poorly worded or invalid | Item sorting and validation planning |
| Poor empirical design | AI suggests weak causal designs | Validity threat and identification agent |
| Overcomplexity | Too many agents overwhelm users | MVP starts with one agent per phase |
| Lack of IS focus | Outputs become generic management theory | IS-domain prompts and reference theory mapping |
| Privacy risks | Sensitive documents are uploaded | Local storage and explicit user consent |
| Reproducibility gaps | Workflow cannot be audited | Provenance logger required |

---

## 17. Success Criteria

AgenticTheoryLab will be considered successful if it can:

1. Produce a complete four-phase theory-construction output for an IS research problem.
2. Maintain a clear human decision trail.
3. Generate useful construct definitions and decompositions.
4. Produce plausible measurement items with validity warnings.
5. Recommend appropriate empirical designs and identify threats.
6. Compare competing models and suggest theory refinements.
7. Export a usable GenAI-use appendix.
8. Demonstrate improvement over single-LLM use in expert evaluation.
9. Be reusable for different IS research topics.
10. Support a publishable design-science or methods paper.

---

## 18. Example Use Case

### Use Case Title

Developing theory on agentic AI governance in enterprise systems.

### User Goal

An IS researcher wants to build a theory explaining how organisations govern agentic AI systems embedded in enterprise workflows.

### Workflow

1. User enters research problem.
2. Phase 1 agents clarify phenomenon, dependent variable, constructs, and mechanisms.
3. User approves constructs such as agent observability, accountability clarity, human override capacity, and trust calibration.
4. Phase 2 agents generate measurement items and validation plan.
5. User revises and approves items.
6. Phase 3 agents recommend experimental and longitudinal designs.
7. User selects a controlled experiment.
8. Phase 4 agents generate competing models and mediation/moderation logic.
9. User refines theory.
10. System exports conceptual model, measurement table, empirical design memo, and provenance report.

### Final Output

A theory-construction package including:

- theoretical framing,
- construct table,
- measurement items,
- empirical design,
- competing models,
- refined propositions,
- provenance report.

---

## 19. Recommended README Opening

```markdown
# AgenticTheoryLab

AgenticTheoryLab is a human-in-the-loop multi-agent framework for supporting theory construction in Information Systems research.

The framework organises agentic AI support around four phases of theory development:

1. Conceptualisation and theoretical framing
2. Instrument development and measurement
3. Rigorous research design and data collection
4. Model testing, evaluation, and theory refinement

AgenticTheoryLab helps researchers clarify dependent variables, integrate reference theories, decompose constructs, generate and validate measurement items, design empirical studies, compare competing models, unpack mechanisms, and document the provenance of human–AI collaboration.

AgenticTheoryLab is not designed to replace researchers. It is designed to support scholarly judgement through structured synthesis, generation, critique, comparison, documentation, and human review.
```

---

## 20. Final Product Definition

AgenticTheoryLab should be defined as:

> A human-governed, provenance-aware, multi-agent research environment that supports Information Systems researchers across the full theory-construction lifecycle, from conceptualisation and measurement development to empirical design, model testing, and theory refinement.

Its distinctive value is not merely that it uses generative AI. Its value is that it embeds agentic AI into a disciplined IS research process, with explicit human oversight, measurement awareness, empirical rigour, and auditability.

