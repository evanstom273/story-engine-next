# Story Engine Vision

Story Engine is a persistent, local-first workspace for long-form interactive fiction and roleplay. It helps a person build living fictional worlds, play through stories with an AI collaborator, and preserve continuity across chapters, sequels, branches, and years.

This document is part of the Story Engine Bible. It describes the product we are building, the experience we are protecting, and the boundaries that keep implementation decisions aligned. The original Story Engine reached v3.4.0 with a mature feature set; Story Engine Next should carry forward its narrative contract while providing a cleaner, maintainable web foundation.

## The core promise

The author owns the protagonist. The AI owns the surrounding world.

The author decides what their player character says, thinks, feels, and voluntarily does. The AI may create NPCs, dialogue, consequences, environments, discoveries, and scene momentum, but it must not silently take authorship away from the player. Director-directed scenes are an explicit, temporary exception and must remain visible as such in the behind-the-scenes record.

The transcript is the canonical story. Structured memory, summaries, relationships, exports, audio, and future sync systems are derived from it; they do not replace it.

## What the product is

- A writing and reading workspace for persistent interactive stories.
- A library of reusable Universes, Player Characters, and Stories.
- An AI collaborator that advances the world while respecting canon and player agency.
- A continuity system that turns a long transcript into evidence-backed story state.
- A local-first application that remains useful without a network connection.
- A portable archive: stories and workspace data can be exported, backed up, restored, and eventually synchronised across devices.

## What the product is not

- Not a generic chatbot or blank chat wrapper.
- Not an autonomous novel generator that writes the protagonist for the author.
- Not a social network or multiplayer service in the first product shape.
- Not a system where generated summaries outrank the transcript.
- Not a feature collection whose complexity is justified without improving writing, reading, continuity, or creative control.

## The experience

The primary loop is:

1. Create or choose a Universe containing setting, lore, sources, factions, locations, and rules.
2. Create or choose a reusable Player Character with explicit identity, pronouns, aliases, goals, and background.
3. Start a Story bound to one or more universes and a protagonist.
4. Write a turn, Director note, Continue command, or Author directive.
5. Review the AI-generated scene in a readable transcript.
6. Correct, regenerate, branch, continue, index, listen to, or export the story without losing the canonical record.

The Story Workspace is the heart of the product. It should feel like a focused writing room: a clear transcript, a composer, strong control over modes, and optional tools for archive, relationships, roleplay, MetaChat, audio, and settings.

## Continuity model

Story Engine should remember without flattening fiction into a database of disconnected facts.

- Universes hold durable world canon and may be custom or referenced from imported sources.
- A story binds a universe snapshot so later universe edits cannot silently rewrite an active story.
- Player Character sheets are authoritative for identity facts.
- Story state captures durable facts, current scene, characters, locations, threads, relationships, and RP state.
- Every important indexed claim should point back to transcript evidence.
- Temporary emotion, injury, intention, or scene positioning must not become permanent biography without support.
- Sequels inherit a distilled state and start a new transcript; branches preserve a point-in-time alternate timeline.

## The product horizon

The near-term goal is a reliable web foundation with the original Story Engine contract intact: React and TypeScript, a fast Vite build, Tailwind UI, IndexedDB offline storage, Vitest coverage, GitHub Pages delivery, and clear seams for Supabase authentication and synchronisation.

Supabase should eventually provide identity, encrypted or access-controlled cloud synchronisation, and conflict-aware workspace replication. It must not make the application unusable offline, expose private story data by default, or become a second unexamined source of truth.

## Success looks like

- An author can return to a story months later and trust its canon.
- The author can tell exactly what the AI did and what they did.
- Long stories remain navigable through chapters, archive views, evidence, and search.
- A device can lose network access without losing the writing experience or local data.
- A backup can restore a workspace rather than merely exporting a pretty transcript.
- New agents can understand the domain and extend it without violating the narrative contract.
