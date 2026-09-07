## Story Engine v3.4.0

_Released: 7 Aug 2026, 04:25 BST_

_Media Library_

### Added

- Media Library: browse all saved audio on your device from the home panel or the dedicated /media-library page
- Stores audiobooks, chapter audio, AI document narration, and podcast audio locally in IndexedDB
- Category filters for audiobooks, chapter audio, AI documents, and podcasts
- Play any saved asset from the library using the shared bottom player bar, with resume position and progress shown on each card
- Save to Library from the playback bar while listening to a chapter or full-story audiobook; replaces an existing copy when the audio has changed
- Story Settings → Save Story Audiobook to Library runs a background job to synthesize and save the full story audiobook
- Auto-ingest: AI document audio, podcast audio, and completed audiobook export jobs are saved to the library automatically
- Orphaned badge when the linked story was deleted but the audio file is still kept
- Delete saved audio from the library or home panel
- Opus compression on ingest when supported for smaller on-device storage