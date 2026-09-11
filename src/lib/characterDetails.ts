import type { Character } from '../data/mockLibrary'

export type CharacterDetailsInput = Pick<Character, 'name' | 'aliases' | 'age' | 'species' | 'gender' | 'pronouns' | 'concept'>

/** Temporary mock boundary. Replace with the real AI provider later. */
export async function generateCharacterDetails(input: CharacterDetailsInput): Promise<Pick<Character, 'appearance' | 'background' | 'personality'>> {
  const identity = [input.name, input.species, input.age && `${input.age} years old`].filter(Boolean).join(', ')
  return {
    appearance: `${identity || 'This character'} has a distinctive presence shaped by the concept provided. Add clothing, physical details, and mannerisms here. This is temporary mock content, not a response from a real AI model.`,
    background: `${input.concept?.trim() || `${input.name || 'The character'} has a story waiting to be developed.`}\n\nExpand this starting point with the events and experiences that shaped them. This is temporary mock content, not a response from a real AI model.`,
    personality: `${input.name || 'The character'} is guided by the ideas in the concept and identity fields above. Add their habits, strengths, flaws, and ways of relating to others here. This is temporary mock content, not a response from a real AI model.`,
  }
}
