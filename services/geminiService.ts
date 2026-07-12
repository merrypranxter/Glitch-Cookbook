
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getCreativeInsight = async (recipeTitle: string, recipeText: string): Promise<string> => {
  if (!API_KEY) {
    return "AI insights are disabled. Please configure your Gemini API key.";
  }
  
  const prompt = `
    You are an experimental glitch artist and creative coding expert. 
    A user is following the "${recipeTitle}" recipe from the Glitch Art Cookbook.
    Here is the recipe:
    ---
    ${recipeText}
    ---
    Provide a short, inspiring, and technically creative suggestion to take this recipe to the next level. 
    Think outside the box. Suggest a novel combination of techniques, a philosophical approach, or an unexpected tool to introduce.
    Keep the tone encouraging and experimental. Format the output as a single paragraph of Markdown text.
    `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching creative insight from Gemini:", error);
    return "An error occurred while generating an AI insight. The glitch is part of the art, right?";
  }
};
