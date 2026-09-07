function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10131f] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 lg:px-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-wide">
            <span className="grid size-9 place-items-center rounded-xl bg-amber-300 text-lg text-[#10131f]">✦</span>
            STORY ENGINE
          </div>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">A new chapter is loading</span>
        </nav>

        <section className="relative flex flex-1 items-center py-20">
          <div className="absolute -right-32 top-24 size-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -left-40 bottom-10 size-96 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Write what comes next</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Turn a spark into a story worth following.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              Story Engine gives your ideas room to grow, one considered scene at a time.
            </p>
            <button className="mt-10 rounded-full bg-amber-300 px-6 py-3 font-semibold text-[#10131f] transition hover:bg-amber-200">
              Start exploring →
            </button>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-white/40 sm:flex-row sm:justify-between">
          <span>Built for unfinished ideas.</span>
          <span>© 2026 Story Engine</span>
        </footer>
      </div>
    </main>
  )
}

export default App
