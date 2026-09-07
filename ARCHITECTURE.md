# Story Engine Architecture

Story Engine is a local-first interactive fiction system. The architecture separates readable presentation, domain orchestration, deterministic narrative processing, persistence, and external providers so that the transcript remains trustworthy while the application grows.

## System shape

```text
React UI and Story Workspace
        |
Application state and feature orchestration
        |
Domain services: context, generation, transcript, indexing, RP, export, jobs
        |
Repository boundary and sync coordinator
        |
IndexedDB (offline primary) <-> Supabase (planned auth and sync)
        |
AI providers, wiki sources, and TTS providers (network services)
```

The current Next scaffold implements the web shell, IndexedDB helper, Supabase client seam, Vite build, Vitest runner, and GitHub Pages deployment. Supabase is intentionally unconfigured until its schema, auth policy, conflict rules, and privacy model are designed.

## Technology boundaries

| Concern | Choice | Boundary rule |
|---|---|---|
| Language | TypeScript | Strict shared contracts; avoid `any` |
| UI | React | Components render state and emit intent |
| Build | Vite | Production output is a static SPA |
| Styling | Tailwind CSS | Design tokens and accessible responsive primitives |
| Offline storage | IndexedDB via `idb` | Primary local entity and cache store |
| Cloud | Supabase | Auth, sync, and future multi-device replication |
| AI | Provider adapters | Keys and provider quirks stay behind interfaces |
| Tests | Vitest | Pure domain logic first; component tests as UI stabilises |
| Hosting | GitHub Pages | Static `dist` artifact deployed by Actions |
| Package manager | pnpm | Lockfile is committed; CI uses frozen installs |

## Domain model

The core entities are:

- **Universe**: a canon container with custom lore or ordered external references and imported material.
- **Player Character**: a reusable or story-local protagonist sheet. Identity, aliases, pronouns, species, goals, and background are explicit.
- **Story**: a play session linking a protagonist to one or more universes, with lineage, settings, summary, archive state, and optional RP mode.
- **Story Message**: the atomic transcript record with role, content, speaker metadata, command metadata, chapter markers, and story time.
- **Story State**: derived structured memory containing characters, facts, threads, scene state, indexes, relationships, and RP data.
- **Chapter**: navigational boundaries and chapter review metadata.
- **MetaChat Message**: out-of-canon analysis stored separately from the transcript.
- **Background Job**: durable async work with type, status, progress, payload, result, and error state.
- **Media Asset**: locally stored audiobook, chapter, AI-document, or podcast audio with resume and orphan handling.
- **Workspace Backup**: versioned portable snapshot of entities and UI preferences.

The v1 backup supplied with this repository demonstrates the real data shape: 18 universes, 65 player characters, 43 stories, 1,581 messages, 10 story summaries, 45 story states, 49 per-story AI configurations, and 41 story UI states. The repository and migration code must treat backup versions as contracts, not incidental JSON.

## Ownership and persistence

IndexedDB is the local source of truth. A repository module should own schema creation, migrations, CRUD, cascade deletes, import/export, and backup validation. React providers may cache entities, but pages should not write directly to IndexedDB.

Use localStorage only for non-entity preferences such as theme, reader mode, text size, chrome visibility, changelog acknowledgement, and backup scheduling. Binary audio belongs in IndexedDB, not localStorage.

The future Supabase layer should synchronise versioned entity records through an explicit coordinator. It must define user ownership, row-level security, deleted records, conflict resolution, offline queues, and migration compatibility before it becomes active. Local edits must remain recoverable when sync fails.

## Generation pipeline

```text
User intent
  -> parse commands and mode
  -> assemble canon, character, state, and recent transcript context
  -> call provider through adapter
  -> show the stream as a draft
  -> normalize and validate
  -> targeted rewrite only if required
  -> persist canonical Story Message
  -> update RP state and queue indexing
```

Context assembly should include universe lore, a bound universe snapshot, authoritative player identity, durable story state, recent messages, active directives, scene sizing, RP state, and mature-fiction policy when enabled. Recent transcript context is not a substitute for canon state, and canon state is not a substitute for evidence.

Provider adapters should support story generation, MetaChat, indexing, creation, and TTS as distinct model roles. Provider failure, refusal, timeout, cancellation, and malformed output need distinct user-readable error states.

## Transcript processing

The canonical presentation is screenplay-like:

```text
Morgan:
*She studies the door for a long moment.*
"We should leave before dawn."

The rain begins against the window.
```

Processing responsibilities should remain separate:

- Parse scene blocks and speaker labels.
- Parse action beats, narration, and quoted dialogue.
- Normalize safe formatting without changing meaning.
- Mask a player's legal name with their active scene alias where required.
- Detect player authorship violations.
- Exclude Director and Continue control lines from default prose and audiobook views.
- Produce speech plans for narrator and character voices.

Validation is a save-time boundary. It should check substance, speaker attribution, format, ownership, hidden dialogue, and scene-state renarration. A valid stream is saved; a rewrite is visible and bounded; an unresolved unsafe or invalid draft is not silently committed.

## Memory, archive, and relationships

Indexing is derived from saved messages and should be incremental or deep according to story settings. It extracts evidence-backed characters, locations, items, world facts, persistent traits, transient state, open threads, turning points, summaries, and relationships.

Relationships are pairwise state with metrics, tier, history, evidence, and optional arc metadata. Re-indexing may update projections but must not destroy transcript history. Archive views should link claims back to message evidence and distinguish current situation from durable canon.

## Modes and feature surfaces

- **Transcript view** is the default readable story surface.
- **Bubble/BTS view** exposes message operations and hidden control messages.
- **Reader mode** removes distracting chrome and the composer.
- **Director** stages scenes and temporarily permits broader AI control.
- **Continue** advances a scene without a new player turn.
- **Author directives** manage Canon, Secret, Reveal, and Retcon state.
- **RP mode** adds stats, time, currency, dice, conditions, recurring events, and event logs.
- **Guided chapters** plan and generate scenes as a durable job with continuity ledgers.
- **MetaChat** supports out-of-canon analysis and additive references.
- **Audiobook and media library** turn transcript content into cached, resumable audio.
- **Import/export** provides story, universe, character, RP, archive, support-bundle, and full-workspace formats.

## Background work

Long tasks include indexing, guided chapter generation, audiobook synthesis, AI documents, podcasts, MetaChat responses, and large exports. A persistent queue should survive route changes and reloads, enforce configurable concurrency, expose progress and errors, and avoid duplicate jobs for the same logical work.

## Web and deployment constraints

GitHub Pages serves a static Vite build under `/story-engine-next/`. The build must use the configured base path, avoid server-only APIs in the client bundle, and preserve SPA navigation behavior appropriate to static hosting. GitHub Actions visibly separates the `build` job from the `deploy` job and passes the generated `dist` artifact between them.

## Extension rules for coding agents

Before changing a feature, identify its owning domain and its source of truth. Preserve existing data and backup compatibility. Keep provider calls behind adapters, persistence behind repositories, and formatting rules in pure modules. Add a regression test for every new parser, validator, merge rule, migration, or export contract. Update the changelog and Decisions log when behavior or architecture changes materially.
