# AgenticTheoryLab

AgenticTheoryLab is a human-in-the-loop multi-agent framework for supporting theory construction in Information Systems research.

This MVP implements the four-phase workflow from `requirements.md` as a static browser application: project creation, phase-based navigation, one bounded agent per phase, human review checkpoints, provenance logging, and Markdown/JSON export. The UI follows the Stitch project design system: institutional minimalism, Newsreader headings, Public Sans interface text, deep navy structure, teal agent zones, burgundy human-review actions, bordered cards, and dense research tables.

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## MVP agents

| Phase | Agent |
|---|---|
| Phase 1 | Construct Decomposition Agent |
| Phase 2 | Item Generation Agent |
| Phase 3 | Research Design Selection Agent |
| Phase 4 | Competing Model Agent |

All outputs are deterministic MVP examples for agentic AI governance in enterprise systems. The app does not fabricate citations and explicitly routes citation checks to human review.
