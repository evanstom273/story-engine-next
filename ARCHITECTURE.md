# Architecture

## Core domains

-   Universes
-   Stories
-   Chapters
-   Characters
-   Transcript
-   Scene State
-   Relationships
-   Archive

## Flow

User Input → Context Assembly → AI Generation → Validation → Transcript
Persistence → Archive Update → Rendering

## Rules

-   Transcript is authoritative.
-   Validation rejects or repairs invalid content only.
-   Rendering never changes persisted data.
-   Characters exist independently of stories.
-   Universes outlive stories.
