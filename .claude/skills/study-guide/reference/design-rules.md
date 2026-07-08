# Design & content rules (non-negotiable)

These are the user's approved standards, refined over many rounds. The
gold-standard `01-immune-response/index.html` already embodies all of them — when
you clone it and only swap data, you inherit them for free. Consult this list
whenever you author or change UI. The user is a visual, detail-oriented learner;
filler and inconsistency make them distrust the material.

## Palette & surfaces
- **Light mode only.** Background `#f4f7f6`, white cards. Never dark.
- **Primary = teal.** Accent `#0d9488`, darker `#0f766e`, chip tint `#e6f4f1`.
  Ink `#152825`, muted `#5a726c`, line `#e5ece9`. (These are the `:root` vars.)
- **No gradients anywhere.** Solid fills only — headers, buttons, bars, cards.
- **Minimal borders.** Prefer soft shadows + light backgrounds; use a colored
  left-border only where meaningful (concept-map nodes, callouts).
- **Topic color palette must be dark enough to read on light** — use ~600-level
  hexes: teal `#0d9488`, cyan `#0891b2`, sky `#0284c7`, slate `#475569`, red
  `#dc2626`, orange `#ea580c`, emerald `#059669`, amber `#b45309`, violet
  `#7c3aed`, pink `#db2777`, teal-700 `#0f766e`, indigo `#4f46e5`, lime `#65a30d`.
  NOT pastels.
  Reserve the topic color for the icon + bar fill; render label TEXT in `--ink`.

## Icons
- **Real icon set** (Lucide/Font Awesome style) via **inline SVG sprite** — no
  CDN (must work offline). Reuse the template's existing `<symbol>` set.
- Icons MUST be `<symbol id … viewBox="0 0 24 24">` (NOT `<g>`) so `<use>` scales
  them into the 1em box. A plain `<g>` renders oversized/clipped.
- **No emoji anywhere** in the UI. Strip 📷🔵🔴🟡❌✅★✓🎯⛔ at doc-render time:
  color dots → `<span class="cdot">`, ❌✅ → `i-x`/`i-check`, 🎯 → green on-test
  pill, ⛔ → red not-tested pill. JS/concept-map strings use `icon('…')`, not glyphs.
- Don't over-use icons — icon overload kills meaning. Segmented filters have no
  per-item icons; on/off toggles do.

## No filler
- Do NOT add jargon, made-up section labels, or framing/editorial text that
  doesn't help studying. Banned examples the user called out: "The one-paragraph
  story", "straight from the professor", "the 5 mnemonics that carry this unit",
  "(his words)", "a favorite exam topic", "In plain terms", "Heads up", "In class".
- Use plain, functional headings: "On the test", "Mnemonics", "Exam scope".
- **Never quiz or flashcard material flagged NOT tested.** The quiz and flashcard
  decks must only drill on-scope content. A card/question is a violation when its
  *correct answer* hinges on a fact the professor de-scoped (a reference-only
  numeric table, staining colors, "context only" chemistry, etc.). Content the
  guide/glossary still *explains* for background is fine — just don't test it.
  This is part of the coverage audit (see `coverage-audit.md`).
- **De-bold prose hard.** Per `<p>`/`<li>`: if >32% of its text is bold, strip all
  bold; otherwise unbold any run over ~3 words. Leave only short, deliberate key
  terms bold. (The engine's `enhanceDoc` already does this.)
- No trailing "…" in UI labels/placeholders (keep it only in fill-in-the-blank
  quiz stems). Keep UI copy quote-free (stray quotes break HTML attributes).

## Layout & chrome
- **Sticky header**, content-width `.hwrap` max 940px, **hamburger drawer nav**.
- Header shows the lecture title as **text only (no icon)**; the home link is a
  `home` icon button in the header actions. No "· Austin Community College".
- **Drawer nav must not look ghosted.** Inactive items = CRISP dark icons
  (`#2f4a44`) + `--ink` labels; active item = SOLID teal fill with white text+icon.
- **Tooltips are JS-positioned** (a single `.tipbubble` element via a `Tip` module
  on `[data-tip]` hover), NOT CSS `::after`/`::before`. This is a hard rule because
  the CSS bubble kept getting **clipped or pushed off-screen**; the JS version
  measures and **clamps horizontally to the viewport and flips above/below** as
  needed. **One consistent color** (`--ink`) — do NOT color-code per source
  (`--tip-bg` was retired; the changing color read as a bug). Still use `data-tip`
  attributes; drop `title=` and drop tooltips from controls that already show a label.
- **Breathing room**: err toward generous whitespace. Cramped controls read as "running together".
- **Mobile (`@media (max-width:640px)`, placed at the END of the stylesheet so it
  wins on source order):** truncate the lecture title (`nowrap`+ellipsis); make
  control rows (`.toolbar`, `#docNav`, `.seg-wrap`, `.slide-controls`, `#mapFilter`)
  `flex-wrap:nowrap;overflow-x:auto` so they **scroll instead of wrapping**; shrink
  the flashcard grade buttons to **icon-only** (`font-size:0`, colored `i-check`/`i-x`).
  The page body must never scroll horizontally.

## Tabs (the 9 views)
Overview · Read · Flashcards · Quiz · Scenarios · Concept Maps · Diagrams ·
Glossary · Progress. Single-letter hotkeys O R F Q S C D G P jump to each.

- **Overview**: printable one-page cheat sheet + audio summary (browser
  SpeechSynthesis API — offline). On-test chips (no icons) link to their guide
  section via `openGuide(keyword)`.
- **Read**: renders the markdown docs in-app (outline / study guide / transcript
  fixes) — never link out to raw `.md`. Outline has an "All at once / Step by
  step" segmented control + a Graphics toggle that inlines slide thumbnails.
  **The learner must never have to find or track anything down.** `enhanceDoc`
  makes references self-explaining in place: every glossary term / acronym is
  auto-linked (`.gterm`, dotted underline) — **hover shows the meaning/definition
  in a tooltip, click opens the full card in the `defModal`** (`enhanceGloss` +
  `glossPop`); a slide mention (`Slide N`, `Slides 8, 10–13`) is a `.slidelink` —
  a **multi-slide reference opens the lightbox as a set with prev/next** so all
  referenced slides are viewable, not just one (`enhanceSlideRefs` + `slideList`
  → `LB.openSet([...])`; single → `LB.open(n)`). First occurrence per term per doc;
  skip text inside links/code/headings/callout labels. **Don't mute italics** —
  `.doc em{color:inherit}` (only a genuine source line should read muted).
- **On-test / not-tested markers used with inline content = an icon-only BADGE,
  no text.** A green `.tbadge on` (solid `i-check`) / red `.tbadge off` (solid `i-x`),
  24px, `16px` icon — bump the size so it's easy to see; do NOT bake "on the test"/
  "not tested" text into the marker (that duplicated the heading/sentence words).
  `loadDoc` normalizes BOTH legacy `.tbadge` and `.pill.pill-on/off` doc markup to
  the icon-only badge; the Overview section headings are `[badge] On the test` /
  `[badge] Not tested` (badge + the heading's own words). (This reversed the
  round-2 "full pills with text" experiment.)
- **Flashcards**: Leitner spaced repetition (boxes 1–5) + trouble tracking. Always
  **question → answer** (front → flip → back); do NOT add a reverse/ask-the-term
  mode (tried `Flash.format` qa/aq/mix — the user rejected it). Mastery % starts at
  0; box→% = `(box-1)/4`. No left border — tint the flap bg by topic + colored topic
  **label with NO per-topic icon**.
  - **Answers must be CONCISE** — a short recallable phrase or tight list, never a
    paragraph. Questions should target one fact, not "everything about X."
  - **Back navigation**: `flashBack` button + `←` key. **"Missed only"** (a tooltip'd
    filter) shows missed cards; its empty state explains itself.
- **Quiz / Scenarios**: small uppercase topic caption (**no icon**) + a large
  (~20px) question. **Answer options have NO borders** — states read by background +
  text color only. Rationales on scenarios. Call it "Scenarios," not "NCLEX-style".
  - **A correct pick auto-reveals.** **A wrong pick colors YOUR choice red
    immediately** (and locks the options) even when "instant" is off — the *correct*
    answer stays hidden behind the "Reveal answer" button. So "Show answer
    immediately" now only controls whether the correct answer shows on pick vs. on Reveal.
  - **Nav buttons are consistent + bordered** (`.btn.qnav`, arrow on BOTH Back and
    Next) so they don't blend into the borderless options; Back is left, Next is
    right (spacer between). **Score sits next to the progress** ("Score x/y" + "n of N"
    up by the heading), not down in the button row.
  - **Bring back missed questions** (default-on `SETTINGS.requeueMissed`, with a
    settings toggle): a missed question is spliced back a few slots later in the
    round (capped at 3 appearances) and re-shown with a `.qretry` "Seen before"
    banner. This is the quiz analog of the flashcard Leitner loop — active recall
    of exactly what you got wrong.
  - **Back navigation** + answer memory: `order` holds `{q,retry}` entries and
    `answers` maps position→pick, so a `quizBack`/`scBack` button re-shows an
    answered question read-only (no re-scoring). Scoring happens once, on reveal.
  - **Feedback (`-fb`) must add value, not repeat the highlight.** Don't echo
    "Correct: <answer>" (the option is already highlighted). Show the
    correct/incorrect badge, the rationale (scenarios), and a `chip-link`
    "Review <topic> in the study guide" (`openGuide`) — a real reference, not noise.
- **Concept Maps**: every node's bg tinted a light shade of its left-border color.
  "Study mode" toggle blurs subtitles, reveal on tap. **Every arrow gets a label.**
  The map **filter is a dropdown** (`<select>`, like the flashcard topic filter),
  not a row of chips.
- **Diagrams**: slides as bordered `.gitem` cards, `SLIDE N` caption + muted text,
  teal note footer. Grid uses `align-items:start`. The **slide-group filter is a
  dropdown**, and the "Key images" toggle + "How the deck breaks down" button sit
  on **one controls line** (after the search, with generous vertical margin); the
  deck-breakdown table expands directly below that line. `overflow:hidden` on the
  card for image radius — so no tooltips inside it.
- **Glossary**: grouped by category with headers; term (bold) and definition on
  their own lines. Click a term (rotating chevron aligned to the name) to
  expand/collapse. "Hide definitions (self-test)" collapses all. Keep search.
- **Progress**: per-topic bars + icons in the topic colors.

## Callouts (doc blockquotes)
`enhanceDoc` classifies each blockquote paragraph into ONE box per message type —
never combine two types in one box. Each type its own color, and all must differ
from the green on-test badge:
- **Slide** — blue `#0284c7`, `i-image`. Links to the slide lightbox; with
  Graphics on, appends clickable slide thumbnails.
- **Analogy** — violet `#7c3aed`, `i-bulb`.
- **Important** — amber `#d97706`, `i-alert`.
- **Why** — teal `#0d9488`, `i-help`.
- **Note** — slate `#64748b`, `i-info`. (NOT green — collided with on-test green.)
- **Quote** ("In class") — indigo, `i-quote`, italic.

Header = filled colored circle `.co-badge` (26px, white icon) + plain `.co-lbl`.
Labels are plain nouns: Slide / Note / Analogy / Important / Why / Quote — never cute.
**Page legends are NOT callouts** — the "flagged on the test / not tested" key
renders as a neutral gray `.doc-legend` with an info icon.

**Color-code teacher quotes** — professor quotes are high-value (often flag exam
scope). A *blockquote* quote → the indigo Quote callout; `coType` classifies it as a
quote even when it opens with an attribution ("Professor: …", "on the exam", "be sure
you know…"). An *inline* attributed quote in prose (`Professor: "…"`, "he said", "in
class") is wrapped in an indigo `.tquote` span by `loadDoc`, so it stands out in place.

## Badges & markers
- **On the test** = green `.tbadge on` = **solid `i-check`** (bg `#dcfce7` / text
  `#15803d`). **Not tested** = red `.tbadge off` = **solid `i-x`** (bg `#fee2e2` /
  text `#b91c1c`). **Icon-only, 24px** (icon `16px`) — big enough to read, NO baked-in
  text when marking inline content (the surrounding heading/sentence supplies the words).
- `loadDoc` normalizes any legacy doc markup (`.tbadge` with any inner icon, and
  `.pill.pill-on/off` from newer `render_docs.py`) to this icon-only badge.
- The amber `.pill` "know this" (icon + text) is the ONE labeled pill that stays.
- Badges use `vertical-align:middle` so the icon lines up with the text.

## Cross-linking (everything that references other content)
- In the rendered study guide, every `Slide N` mention → clickable
  `LB.open(n)` lightbox link (regex `\bSlide (\d+)\b` at build).
- Every **"On the test"** chip (and mnemonic card) links to its section via
  `openGuide(keyword)`, which switches to Read, loads the guide, sets a unique
  deep-link hash `#read/guide/<section>`, and scrolls with a highlight-flash.
  `scrollToSec` matches a section **h2** first, falling back to the h1 title —
  so a keyword like "Complement" lands on "10. Complement", not the doc title.
  Pick each chip's keyword so it uniquely matches its section h2. Extend this
  linking to any new content that references slides/sections.
- Docs must NOT reference external `.md`/`.html` files — use in-app `chip-link`
  buttons calling `loadDoc()` / `goView()`.

## Navigation & URLs
- **Every view and section must have a unique URL, and Back/Forward/reload must
  work.** The app uses hash routing (`#<view>`, `#read/<doc>`,
  `#read/guide/<section>`) — see `app-template-map.md` for the engine. This is a
  hard requirement, not optional polish: sharing/bookmarking a specific view and
  the browser back button are expected to work.
- **Back navigation everywhere a flow steps forward.** Quiz, Scenarios, Flashcards,
  and the Outline "Step by step" mode each get a Back/Prev control (see the Tabs
  bullets). Never trap the learner going one direction only.
- **Keep the drawer flat — no Read sub-pages.** Do NOT nest the Read docs under
  the "Read" item (tried a `.nav-sub`; the user rejected it). The drawer is the 9
  top-level views only; switch docs from the in-Read `#docNav` tabs.
- **No initial box-shadow on nav buttons** — the resting drawer items are flat
  (shadows made them read as detached raised chips). The drawer *panel* keeps its
  slide-out elevation shadow.
- **`N` toggles the drawer** (in addition to the letter jump-keys) — documented in
  the shortcuts sheet.
- **Header: NO icon on the lecture name.** The class name is text only; the
  Study-Guide-home link is a `home` icon button in the header actions (with the
  search/print/settings icons), never a shield glued to the title.
- **Table headers use `--ink`, never `--muted`** (`th{color:var(--ink)}`) — muted
  headers read as disabled/greyed to this user.
- **Command-palette / result rows: vertically center the icon, label, and
  jump/run badge** (`.s-res{align-items:center}`, no `margin-top` nudge on the
  icon). Applies to any icon+text+trailing-badge row.

## Interactive patterns
- **Mnemonics**: interactive reveal cards (tap to reveal), with a "Test me" toggle
  that hides all answers. Same active-recall pattern as the glossary self-test.
- **Filters vs toggles are visually distinct.** Mutually-exclusive filters = `.seg`
  segmented control (connected, no per-item icons, active = white inset). On/off
  toggles = `.tool` (icon + label, `.on` = teal). Read toggle state via
  `.classList.contains('on')`, not `.checked`. Don't bold an active state that
  already changes color/bg.
- **Quick find = command palette** (`/` or ⌘K): top-aligned modal, empty state
  lists "Jump to" (all views + each Read doc) + "Actions" (print, listen, settings,
  shortcuts, reset). Indexes glossary, cards, slides, mnemonics, guide headings.
- **Hotkeys** (guard with `inField()` + no modal open): `/` or ⌘K palette · `?`
  shortcuts · `N` toggles the drawer · single letters O R F Q S C D G P jump to the
  views · flashcards keep Space/1/2 and add `←` = previous card.
  `closeModal` must `blur()` so letter keys work right after.
- **Hide verbose helper text** behind a subtle "?" icon button, toggled on demand
  — don't leave instructional paragraphs always visible.
- **Settings modal** grouped into cards (Quiz & Scenarios / Flashcards / Audio)
  with a filter box; each `.set-sec` is a `--panel2` card with a teal/uppercase
  readable `h3`. Shuffle settings actually gate the Fisher-Yates.

## Assets
- **Embed all images as base64 data URIs** in the single `index.html`. `file://`
  and the preview panel do NOT serve sibling `assets/` files, so a gallery that
  points at `assets/` appears broken. Embedding is what makes the one-file share work.
- Use **JPEG** for the embedded slide images (the reference app is ~5.7MB; PNG
  would balloon it). Keep the on-disk `assets/slides/*.png` too, for reference.

## The markdown-render gotcha
- python-markdown won't parse a list that immediately follows a non-blank line —
  insert a blank line before each list run in a preprocessing pass, or bullets
  render as literal dashes. `scripts/render_docs.py` handles this.
