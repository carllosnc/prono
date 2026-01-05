import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

// Initialize the Google provider with the API Key from environment variables
// Note: In a production app, calling this from the client exposes the API Key.
// For this local/demo project, we use dangerouslyAllowBrowser: true via the helper configuration if needed,
// but the customized provider handles the key.
const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY || '',
});

export async function analyzeText(text: string) {
  if (!import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY) {
    throw new Error("Missing API Key. Please add VITE_GOOGLE_GENERATIVE_AI_API_KEY to your .env file.");
  }

  try {
    const { text: analysis } = await generateText({
      model: google('gemini-1.5-flash'),
      system: "You are a friendly English language tutor. Analyze the user's sentence for grammar, vocabulary, and naturalness. Keep feedback concise and encouraging.",
      prompt: `User sentence: "${text}"`,
    });
    return analysis;
  } catch (error) {
    console.error("AI Analysis failed:", error);
    throw error;
  }
}
