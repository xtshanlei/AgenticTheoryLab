# AgenticTheoryLab

AgenticTheoryLab is a human-in-the-loop multi-agent framework for supporting theory construction in Information Systems research.

This static implementation follows the full workflow in `requirements.md`: project creation, pasted and uploaded local document capture, reference capture, phase-based navigation, sixteen bounded agent modules, user-supplied OpenAI-compatible LLM execution with deterministic fallback, Elsevier Scopus discovery, agent-level and phase-level human review checkpoints, manual source verification, provenance logging with full outputs and edit records, evaluation rubrics, version comparison, and Markdown/JSON/CSV exports. The UI follows the Stitch project design system: institutional minimalism, Newsreader headings, Public Sans interface text, deep navy structure, teal agent zones, burgundy human-review actions, bordered cards, and dense research tables.

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Agent modules

| Phase | Agent |
|---|---|
| Phase 1 | Phenomenon Definition, Reference Discipline Mapping, Construct Decomposition, Mechanism Articulation |
| Phase 2 | Item Generation, Item Sorting, Measurement Model, Psychometric Validation |
| Phase 3 | Research Design Selection, Experimental Design, Longitudinal Design, Econometric Identification |
| Phase 4 | Competing Model, Mediation and Moderation, Robustness and Validity, Theory Refinement |

Agent outputs use the configured LLM provider when credentials are supplied in the browser, otherwise they fall back to deterministic source-bounded examples for agentic AI governance in enterprise systems. LLM agent runs transmit project fields, reference text, and document snippets to the configured endpoint after user confirmation, while Elsevier discovery sends the search query to Elsevier. Outputs remain editable by the researcher. The app does not fabricate citations, stores provider keys only in local browser storage, redacts provider keys from provenance, and explicitly routes citation checks to human review.
