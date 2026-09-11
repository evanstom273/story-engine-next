/**
 * Temporary generation boundary. Replace this mock with the real AI provider
 * once StoryEngine Next has an AI-provider system.
 */
export async function generateUniverseDescription(concept: string): Promise<string> {
  return `A developing setting shaped by this starting idea:\n\n${concept.trim()}\n\nThis description is a temporary mock generated for the creation flow. It can be edited freely before the Universe is created.`
}
