# Story Engine Principles

These principles are the implementation and product guardrails for Story Engine. When requirements conflict, preserve the narrative contract first, then data integrity, then user control and clarity, then convenience.

## The author is in control

The player owns their protagonist's internal life, dialogue, choices, and voluntary actions. AI output must be checked for authorship violations before it becomes canonical. Director mode is an explicit, temporary control mode, not permission to rewrite ordinary player turns.

## Canon is sacred

The ordered transcript is the primary record. Player-declared outcomes, Author directives, universe rules, and authoritative character-sheet facts must be respected by generation, indexing, summaries, MetaChat, and exports. Retcons are explicit, visible, and scoped forward; they do not silently rewrite history.

## One truth, many projections

Every domain has a clear owner. Transcript owns narrative history; universe data owns world canon; character sheets own identity; story state owns derived continuity memory; RP state owns mechanics; media records own generated audio. Views, summaries, indexes, caches, and exports are projections and may be rebuilt.

## Local first, cloud when useful

IndexedDB is the offline primary store for the web experience. Reading, writing drafts, browsing, editing, and exporting should work without a network connection. Supabase is the planned auth and sync boundary, not a reason to move all behavior behind a server or to make cloud state authoritative without a conflict model.

## Preserve valid AI output

If a generated response is valid, save and display it faithfully. Deterministic normalization may repair formatting, but must not rewrite meaning or replace a good streamed response with an invisible retry. Rewrites are targeted recovery for a specific validation failure and must be observable to the author.

## Validate at the boundary

Assistant text passes through deterministic parsing, normalization, authorship protection, speaker validation, and format checks before persistence. Invalid content is repaired when the repair is safe, rewritten when the failure is actionable, and surfaced to the user when it cannot be trusted. Rendering is never the validation layer.

## Evidence beats invented memory

Indexing is transcript-first and evidence-backed. Deep indexing may extract characters, locations, facts, relationships, threads, scene state, and summaries, but it must distinguish durable canon from transient state and retain message references where possible. A stale or missing index must not erase the transcript.

## Commands are not prose

Director, Continue, Canon, Secret, Reveal, Retcon, time commands, and dice triggers are explicit control operations. They may affect generation or state, but their control text must not accidentally appear as ordinary story prose or audiobook narration. Behind-the-scenes views may expose them for review.

## Separate canon from conversation

MetaChat is an out-of-canon writers' room. It can analyse stories, characters, and universes and can use additive references, but it is never silently written into the transcript or canon state. Player Assist suggests; it does not author on the player's behalf.

## Long work is durable work

Indexing, guided chapter generation, audiobook synthesis, AI documents, podcasts, and large exports belong in persistent background jobs. Jobs need progress, cancellation where safe, retryable errors, concurrency limits, and recovery after navigation or reload. A long task must not disappear because the user changed pages.

## Story and mechanics cooperate without replacing one another

RP mode may track HP, currency, time, dice, conditions, recurring events, and NPC state alongside prose. Mechanical changes must be explicit, inspectable, and exportable. Mechanics support the story; they do not silently override player intent or narrative canon.

## Privacy is a feature

Story content and API keys are sensitive. Do not add analytics or telemetry by default. Provider calls should be intentional and clearly attributable. Backups, support bundles, imports, exports, and future sync must make their data scope obvious and avoid leaking secrets.

## Graceful degradation is the default

No AI key should still allow the app to open, browse local data, edit records, read stories, and export. A missing index should degrade to transcript context. A failed provider, TTS job, sync, or background task should leave the underlying story intact and provide a recoverable error.

## Accessible, readable, focused

Transcript readability is a primary requirement. Use semantic structure, keyboard-accessible controls, visible focus, sensible text sizing, responsive layouts, reduced-motion support, and clear distinction between narration, dialogue, commands, and metadata. Reader mode is a first-class use case.

## Prefer plain boundaries

Use strict TypeScript, pure domain functions, small explicit contracts, and a repository boundary around persistence. Avoid introducing state-management or framework abstraction merely for fashion. New behavior should be easy to test without mounting the entire application.

## Every feature earns its place

A feature must improve writing, reading, continuity, authorial control, portability, or safety. If it adds complexity, define the user problem, the owning domain, the persistence behavior, the offline behavior, and the tests before implementation.
