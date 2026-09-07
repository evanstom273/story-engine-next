import { openDB } from 'idb'

const database = openDB('story-engine', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('stories')) db.createObjectStore('stories', { keyPath: 'id' })
  },
})

export async function saveStory(story: { id: string; title: string; content: string }) {
  return (await database).put('stories', story)
}

export async function getStories() {
  return (await database).getAll('stories')
}
