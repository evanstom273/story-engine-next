export type LibraryStory = {
  id: string
  title: string
  premise: string
  universes: string[]
  character?: string
  updatedAt: string
}

export type Character = {
  id: string
  name: string
  aliases: string[]
  age?: string
  species?: string
  gender?: string
  pronouns?: string
  concept?: string
  appearance?: string
  background?: string
  personality?: string
  notes?: string
  createdAt: string
  updatedAt: string
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

export const mockCharacters: Character[] = [
  {
    id: 'mara-venn',
    name: 'Mara Venn',
    aliases: ['The Wayfinder'],
    age: '29',
    species: 'Human',
    concept: 'A patient courier with a talent for finding impossible routes.',
    personality: 'Observant, patient, and quietly stubborn.',
    createdAt: '2026-09-01T10:00:00.000Z',
    updatedAt: '2026-09-01T10:00:00.000Z',
  },
  {
    id: 'jon-bell',
    name: 'Jon Bell',
    aliases: [],
    age: '34',
    species: 'Human',
    concept: 'A salvage diver who trusts instruments more than legends.',
    personality: 'Practical, dryly funny, and hard to frighten.',
    createdAt: '2026-08-22T10:00:00.000Z',
    updatedAt: '2026-08-22T10:00:00.000Z',
  },
  {
    id: 'ellian-vale',
    name: 'Ellian Vale',
    aliases: [],
    concept: 'A village archivist collecting stories before they disappear.',
    personality: 'Thoughtful, curious, and more adventurous than expected.',
    createdAt: '2026-08-18T10:00:00.000Z',
    updatedAt: '2026-08-18T10:00:00.000Z',
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
