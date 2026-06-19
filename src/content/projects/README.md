# Student projects

Each `.md` file in this folder becomes one project on `/students`.
The filename (without `.md`) is the URL slug, e.g. `pantypes-speech.md` →
`/students/pantypes-speech`.

## Frontmatter

```md
---
title: Self-explainable representations for speech
level: MSc
status: Ongoing            # Open | Ongoing | Completed
year: 2026
team:
  - Alice Andersen
  - Bjørn Berg
tags: [XAI, speech, representation learning]
links:
  - label: GitHub
    url: https://github.com/...
  - label: Preprint (arXiv)
    url: https://arxiv.org/abs/...
abstract: >
  One-paragraph summary used in the listing and as the lede on the detail page.
---

Optional long-form Markdown body. Supports **bold**, _italics_, lists,
links, etc. Shown on the project detail page below the abstract.
```

All fields except `title` are optional. To publish a new project, drop a
new `.md` file in this directory and commit.
