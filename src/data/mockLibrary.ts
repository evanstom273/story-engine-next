export type LibraryStory = {
  id: string
  title: string
  premise: string
  universes: string[]
  character?: string
  updatedAt: string
}

export type LibraryCharacter = {
  id: string
  name: string
  description: string
  universes: string[]
}

export type UniverseSource = {
  id: string
  url: string
}

export type Universe = {
  id: string
  name: string
  type: 'referenced' | 'custom'
  description?: string
  concept?: string
  sources?: UniverseSource[]
  createdAt: string
  updatedAt: string
}

export const mockStories: LibraryStory[] = [
  {
    id: 'glass-horizon',
    title: 'The Glass Horizon',
    premise: 'A courier finds a message from a future that should not exist.',
    universes: ['The Meridian Reach'],
    character: 'Mara Venn',
    updatedAt: 'Opened today',
  },
  {
    id: 'under-moss-and-moonlight',
    title: 'Under Moss and Moonlight',
    premise: 'A quiet village keeps one very old promise.',
    universes: ['The Briarwild'],
    updatedAt: 'Opened yesterday',
  },
  {
    id: 'black-salt',
    title: 'Black Salt',
    premise: 'A salvage crew follows a signal beneath a vanished sea.',
    universes: ['The Meridian Reach', 'The Briarwild'],
    character: 'Jon Bell',
    updatedAt: 'Opened 5 days ago',
  },
]

export const mockCharacters: LibraryCharacter[] = [
  {
    id: 'mara-venn',
    name: 'Mara Venn',
    description: 'A patient courier with a talent for finding impossible routes.',
    universes: ['The Meridian Reach'],
  },
  {
    id: 'jon-bell',
    name: 'Jon Bell',
    description: 'A salvage diver who trusts instruments more than legends.',
    universes: ['The Meridian Reach', 'The Briarwild'],
  },
  {
    id: 'ellian-vale',
    name: 'Ellian Vale',
    description: 'A village archivist collecting stories before they disappear.',
    universes: ['The Briarwild'],
  },
]

export const mockUniverses: Universe[] = [
  {
    id: 'meridian-reach',
    name: 'The Meridian Reach',
    type: 'custom',
    description: 'A constellation of floating cities linked by old, luminous roads.',
    concept: 'A constellation of floating cities linked by old, luminous roads.',
    createdAt: '2026-09-01T10:00:00.000Z',
    updatedAt: '2026-09-01T10:00:00.000Z',
  },
  {
    id: 'briarwild',
    name: 'The Briarwild',
    type: 'referenced',
    description: 'An ancient woodland where every path remembers who walked it.',
    sources: [{ id: 'briarwild-source', url: 'https://example.com/the-briarwild' }],
    createdAt: '2026-08-22T10:00:00.000Z',
    updatedAt: '2026-08-22T10:00:00.000Z',
  },
]
