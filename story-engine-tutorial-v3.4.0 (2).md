# Welcome to Story Engine

*Story Engine v3.4.0*

You always control your protagonist. The AI controls the world, NPCs, and narration around you — that's the core idea behind Story Engine.
Story Engine is a local-first storytelling workspace. You build universes and characters, then play through AI-assisted stories on your device until you choose to export them.
Use the sections below as an onboarding guide. Start with setup, then open a story and experiment with the workspace taskbar. You can download this tutorial as PDF, TXT, or Markdown from the bottom of this tab.

## Why Story Engine?

Story Engine is different because:

- You always control your protagonist.
- Stories maintain continuity over long campaigns.
- Universes, characters, and stories can all be reused and connected.

## Quick start — your first story

1. Open Settings → AI and add an API key for OpenAI, Gemini, OpenRouter, or Anthropic. Use Validate to confirm the connection works.
2. Create a Universe — your world container. Use Custom mode to describe a setting, or Referenced mode to pull from wiki sources.
3. Create a Player Character — your reusable protagonist. You can attach one or more universes (useful for crossovers).
4. Create a Story — open the universe dropdown, check every world this story should use, pick a protagonist, add a title, and start at Chapter I.
5. Open the story, type in the Chat composer, and press Send to generate the next scene.

[New Universe](/universes/new) · [New Character](/player-characters/new) · [New Story](/stories/new)

## Install as an app (PWA)

On supported browsers you can install Story Engine to your home screen for a full-screen, app-like experience with automatic updates when you open it.

- Use the Install banner on the home page when it appears, or your browser’s “Install app” / “Add to Home Screen” option.
- On iPhone: Share → Add to Home Screen.
- The installed PWA uses the same local data as the browser tab on that device.

## The story workspace

When you open a story, the workspace is where you read, write, and manage everything. The header shows your universe(s), protagonist, and story title. The transcript in the middle is your timeline. The Chat panel at the bottom is where you send turns.

### Bottom taskbar

- **Settings** — Per-story options: AI model, accent color, RP mode, content mode, exports, sequel/branch actions, and indexing.
- **Bubble view** — Chat-style bubbles with Edit, Regenerate, and Delete on each message. Good for reviewing recent turns.
- **Archive** — Automatically summarises your story, characters, locations, relationships, and open plot threads so you don't have to remember everything yourself.
- **Reader mode** — Distraction-free reading. Hides the composer and extra chrome so you can read like a book.
- **MetaChat** — Out-of-canon AI chat for brainstorming, planning arcs, or comparing ideas — never written into the story.
- **Character Sheet** — RP stats, HP, currency, in-story time, and event log when RP Mode is enabled.
- **Relationships** — Track bonds between characters with tier tags (Devoted, Family, Rival, etc.) and short summaries, updated when you index.
- **Manual entry** — Add or edit transcript lines directly — user, assistant, or system roles with specific speaker types.

## Transcript layout

The transcript separates character dialogue from narrator prose so long scenes stay readable.

- Character lines show a blue name label (for example Morgan:, Elena:) followed by dialogue and actions.
- Narrator blocks are gray italic prose without a “Narrator:” header — omniscient description and scene-setting.
- When the AI embeds a character name inside narrator prose, the name stays in the text as natural writing (not a second dialogue label).
- Bubble view uses the same content with per-message edit controls.

## Writing turns & AI generation

Each Send sends your message and generates the next AI scene.

- Generate Response / Generate Direction — AI suggests your next turn. Before any scenes exist it proposes player dialogue or action; once scenes exist it defaults to a Director staging note (`Director: *beat*` with optional `("gist")` for approximate dialogue) using full transcript context (you can edit before sending).
- Regenerate — replace the last AI message with a new version.
- Edit — change the last AI message manually.
- Response variants — when multiple candidates exist, use Previous / Next to pick the best one.
- Cancel — stop a generation that is still running.
- Retry — resend if a generation failed.

Use the story Settings drawer to override the AI provider or model for this story only, separate from global Settings → AI.

## View modes

- Transcript view (default) — prose layout with speaker tags, chapter banners, and RP time/gold when enabled.
- Bubble view — behind-the-scenes message list with Edit, Regenerate, and Delete on each entry. Shows Director, Continue, and other transcript commands hidden from the default prose view.
- Reader mode — clean reading without composer controls.
- Archive view — automatically summarises your story, characters, locations, relationships, and open plot threads. Use Jump to #N links to return to a transcript message.

Text size is in Settings → Theme (Small through Extra Large). Per-story accent colors are in the story Settings drawer (or use the global theme in Settings → Theme).

## Chapters

Chapters break long stories into readable sections. They are created when you write chapter boundaries in your turns or when the story reaches natural chapter ends.

- Write “Chapter Two”, “end of chapter one”, or “The End” in a message to mark boundaries.
- Chapter banners appear in the transcript as “Chapter N” headers.
- Jump to Latest Chapter — floating button when you have two or more chapters; scrolls to the current chapter header.
- The End saves a final chapter break and can prompt you to create a sequel.

## Director, author & continue

Advanced speaker types in Manual entry or the composer let you steer the story without breaking immersion.

- Director — scene cuts and time skips (“three days later”, “cut to the tavern”). /time +2h, +30m, +3d also works in chat.
- Author — declare canon the AI should always remember (highest-priority truth). Example: “The king is secretly a vampire.”
- Secret, Reveal, and Retcon — record hidden facts, authorise when they surface, or correct earlier canon going forward.
- Continue — send a continue turn to nudge the AI forward without adding new player dialogue.
- Canon speaker lines — assistant messages attributed to named NPCs from your universe.
- Narrator — omniscient narration beats separate from character dialogue.

## RP mode

Turn on RP Mode in the Character Sheet overlay to track mechanics alongside narrative.

- HP tracking for your protagonist and NPCs — zero HP can trigger consequence prompts.
- Currency and in-story time shown in the taskbar when configured.
- Dice rolls — enable in RP Settings, then use [roll] or [roll str/dex/con/int/wis/cha] in messages.
- Character conditions — AI may suggest status effects you can accept or dismiss.
- Export RP data as JSON, Markdown, TXT, or PDF from the Character Sheet.

## MetaChat & relationships

MetaChat is separate from your story transcript. Use it to brainstorm plot ideas, compare character motivations, or plan future arcs. Reference entities with @Story, @Character, or @Universe. Library MetaChat on the home page works across your whole workspace.

Relationships tracks how characters feel about each other using tier tags and short descriptions. Update or full reindex to sync with the transcript. The Archive view also surfaces relationships with evidence links.

## Sequels, branches & prequels

- Sequel — continue after The End. The original story becomes a locked read-only prequel; the sequel inherits distilled state and starts at Chapter I.
- Branch — fork the story into an editable copy at any point. The original stays editable.
- Follow-up links appear in the story header so you can navigate between related stories.

Create sequels from the post-ending prompt, story Settings, or New Story with a predecessor selected.

## Universes & characters

- Universes hold lore, reference sources, and imported wiki content.
- Multiple universes — characters and stories can span several worlds (crossovers). Use the universe dropdown and check each world you need.
- The character picker when creating a story includes library characters from any selected universe, plus characters tagged with multiple universes.
- Generate Universe / Generate Character Details — AI fills in blueprint or character fields.
- Import Universe — pull lore from wiki URLs into a new universe.
- Quick Character — create a story-local protagonist during story creation; promote to library later from story Settings.
- Archive stories from the story list or story Settings to hide them without deleting.

## Indexing, exports & backups

- Automatic Indexing — in story Settings, index after N messages or each chapter so Archive stays current.
- Update index / Full reindex — refresh structured story state from the transcript.
- Exports — JSON, Markdown, TXT, PDF, and Archive PDF from story Settings or the right sidebar.
- Workspace backup — Settings → Data exports everything; import to restore or migrate.
- Automatic backups — about every 12 hours when data changes. Android opens a share sheet; web/PWA keeps the last five copies locally and downloads a file. See Settings → Data → Automatic Backups.
- Storage — Settings → Storage shows record counts and destructive delete options.

## Tips for new players

- Write specific turns — actions, dialogue, and intent give the AI clearer direction.
- Use Director for time skips instead of narrating “nothing happened for a week.”
- Use Author directives for secrets the AI should know but characters should not.
- Check Archive after a few chapters to see what the index captured.
- Validate your AI key before starting a long session.
- Export a backup before major experiments or imports.
- Install the PWA on mobile so your library stays in one place on that device.

## You're ready

That's it! The best way to learn Story Engine is to create a universe, build a character, and start writing.
