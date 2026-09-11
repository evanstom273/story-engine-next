import {
  mockCharacters,
  mockStories,
  mockUniverses,
  type LibraryCharacter,
  type LibraryStory,
  type LibraryUniverse,
} from './data/mockLibrary'
import type { ReactNode } from 'react'

function IconButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-lg text-white/55 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
    >
      {children}
    </button>
  )
}

function SectionHeader({ title, actionLabel }: { title: string; actionLabel: string }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 id={title.toLowerCase().replaceAll(' ', '-')} className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <button
        type="button"
        className="rounded-lg border border-amber-300/35 bg-amber-300/10 px-3 py-2 text-sm font-medium text-amber-200 transition hover:border-amber-300/60 hover:bg-amber-300/20 focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        {actionLabel}
      </button>
    </div>
  )
}

function EmptyState({ label }: { label: string }) {
  return <p className="rounded-xl border border-dashed border-white/15 px-5 py-8 text-sm text-white/45">No {label.toLowerCase()} yet.</p>
}

function StoryCard({ story }: { story: LibraryStory }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.06]">
      <h3 className="font-medium text-white">{story.title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/55">{story.premise}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/45">
        {story.universes.map((universe) => <span key={universe} className="rounded-full bg-white/[0.07] px-2.5 py-1">{universe}</span>)}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/35">
        <span>{story.character ? `Character: ${story.character}` : 'No character attached'}</span>
        <span>{story.updatedAt}</span>
      </div>
    </article>
  )
}

function CharacterCard({ character }: { character: LibraryCharacter }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex items-start gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-fuchsia-400/15 text-sm font-semibold text-fuchsia-200">{character.name.slice(0, 1)}</div>
        <div>
          <h3 className="font-medium text-white">{character.name}</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">{character.description}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/45">
        {character.universes.map((universe) => <span key={universe} className="rounded-full bg-white/[0.07] px-2.5 py-1">{universe}</span>)}
      </div>
    </article>
  )
}

function UniverseCard({ universe }: { universe: LibraryUniverse }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.06]">
      <h3 className="font-medium text-white">{universe.name}</h3>
      <p className="mt-2 text-sm leading-6 text-white/55">{universe.description}</p>
      <p className="mt-5 text-xs text-white/35">
        {universe.referenceSources ? `${universe.referenceSources} reference sources` : 'No reference sources'}
      </p>
    </article>
  )
}

function App() {
  const recentStory = mockStories[0]

  return (
    <div className="min-h-screen bg-[#10131f] text-white">
      <header className="border-b border-white/10 bg-[#10131f]/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight">Story Engine</span>
            <span className="text-sm text-white/40">v0.1.0</span>
          </div>
          <div className="flex items-center gap-1">
            <IconButton label="Search">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
            </IconButton>
            <IconButton label="Settings">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /><path d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 0 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 0 1 0-3.6h.2a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a1.8 1.8 0 0 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3.1-1.3v-.2a1.8 1.8 0 0 1 3.6 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 1.3 3.1h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1Z" /></svg>
            </IconButton>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-12 px-5 py-10 sm:px-8 sm:py-14">
        <section aria-labelledby="recent-heading">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Library</p>
          <h1 id="recent-heading" className="mb-5 text-2xl font-semibold tracking-tight">Recent Story</h1>
          {recentStory ? (
            <article className="relative overflow-hidden rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[0.12] via-white/[0.045] to-fuchsia-400/[0.08] p-6 sm:p-8">
              <div className="absolute -right-20 -top-28 size-72 rounded-full bg-amber-300/10 blur-3xl" />
              <div className="relative max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-200/75">Last opened today</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{recentStory.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">{recentStory.premise}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/55">
                  {recentStory.universes.map((universe) => <span key={universe} className="rounded-full border border-white/15 px-3 py-1.5">{universe}</span>)}
                  {recentStory.character && <span className="rounded-full border border-white/15 px-3 py-1.5">{recentStory.character}</span>}
                </div>
              </div>
            </article>
          ) : <EmptyState label="recent story" />}
        </section>

        <section aria-labelledby="stories-heading">
          <SectionHeader title="All Stories" actionLabel="+ New Story" />
          {mockStories.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{mockStories.map((story) => <StoryCard key={story.id} story={story} />)}</div> : <EmptyState label="stories" />}
        </section>

        <section aria-labelledby="characters-heading">
          <SectionHeader title="Characters" actionLabel="+ New Character" />
          {mockCharacters.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{mockCharacters.map((character) => <CharacterCard key={character.id} character={character} />)}</div> : <EmptyState label="characters" />}
        </section>

        <section aria-labelledby="universes-heading">
          <SectionHeader title="Universes" actionLabel="+ New Universe" />
          {mockUniverses.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{mockUniverses.map((universe) => <UniverseCard key={universe.id} universe={universe} />)}</div> : <EmptyState label="universes" />}
        </section>
      </main>
    </div>
  )
}

export default App
