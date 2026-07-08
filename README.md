# Study Guide

Personal study materials for the **Nursing program at Austin Community College (ACC)**.
Source lectures come from professors/the university; everything else here is study aids built
from those sources.

## How it's organized

```
Study Guide/
├── src/                         # raw drop zone — put new source files here (ppt, transcripts, weblocs)
└── courses/
    └── <course-id>/             # e.g. microbiology-biol2420
        └── NN-<topic>/          # e.g. 01-immune-response  (NN keeps them in order)
            ├── source-materials/    # original files, untouched
            ├── assets/slides/       # rendered slide images (slide-01.png …)
            ├── study-guide.md       # the main visual, plain-language guide
            ├── key-terms-glossary.md
            ├── transcript-corrections.md   # flags for machine-transcript errors
            ├── flashcards.json      # portable card data (Anki/Quizlet import)
            └── index.html           # interactive app (one self-contained file — open or share this)
```

## The workflow (repeat for each new lecture)

1. **Drop sources** into `src/` (PowerPoint, PDF, YouTube `.webloc`, transcript).
2. **Extract**: convert slides to images + text (LibreOffice + poppler), pull transcript text.
3. **Review the visuals** frame-by-frame so diagrams are captured, not just text.
4. **Flag transcript errors** (auto-captions mangle technical terms) → `transcript-corrections.md`.
5. **Build** the study guide, glossary, flashcards, and interactive app — organized by
   *course → topic*, using only lecture content (outside facts get cited).
6. **Study** with the HTML app; it tracks which cards/topics you struggle with and drills them.

## Using the interactive app

Each lecture folder has an **`index.html`** that IS the whole app — one self-contained file with every
slide image embedded, so it works with no install and no internet. To use it:

- **Open:** double-click a lecture's `index.html`, or drag it into any browser. Works on Mac, Windows,
  iPhone, or Android.
- **Share one lecture:** send that lecture's `index.html` **file itself** (AirDrop / email / Drive). It
  carries everything inside it, so the recipient just opens it — nothing else required. *(Tip: rename the
  copy you send to something like `immune-response.html` so it's recognizable — every lecture's file is
  named `index.html`.)*

> **The top-level `index.html` is different:** it's just a small **menu** that links to each lecture via
> relative paths, so it only works while it sits inside this folder. Don't share the top-level file on its
> own (its links would break) — share a lecture's self-contained file instead.

Your progress (flashcard mastery, quiz scores, trouble cards) is saved automatically **in that browser
on that device**. (Progress doesn't sync across devices — each device keeps its own.)

**Tabs:** Overview · Read (outline / study guide / transcript fixes) · Flashcards (spaced repetition) ·
Quiz · Scenarios · Concept Maps · Diagrams · Glossary · Progress. Press **/** for quick find, **?** for
shortcuts. The Overview tab also has a **printable one-page cheat sheet** and an **audio summary**.

## Courses

- [Microbiology (BIOL 2420)](courses/microbiology-biol2420/) — immune response & complement; determinants of health & disease; epidemiology; control of microorganisms; and future topics.
