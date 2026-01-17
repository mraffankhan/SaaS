import { GoogleGenAI } from "@google/genai";
import { MatchStats } from "../types";

export const generateMatchSummary = async (stats: MatchStats, playerName: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.error("API Key not found");
    return "Error: API Key is missing. Please check your environment configuration.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    You are an energetic, hype-filled Esports Caster for the game Free Fire.
    Analyze the following match statistics for player "${playerName}" and generate a short, exciting 3-sentence post-match summary suitable for social media sharing.
    
    Use Free Fire terminology (e.g., Booyah, Gloo Wall, Zone, Rush, Headshot).
    
    Stats:
    - Map: ${stats.map}
    - Kills: ${stats.kills}
    - Damage Dealt: ${stats.damage}
    - Final Placement: ${stats.placement} (1 is a Booyah)
    - Revives: ${stats.revives}

    If the placement is 1, congratulate them heavily on the Booyah.
    If kills are high (>5), mention their aggression.
    If damage is high but kills are low, mention they were "stealing kills" or "unlucky".
    Keep it under 60 words.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Analysis failed due to a network or API error. Please try again later.";
  }
};

export const checkToxicContent = async (text: string): Promise<boolean> => {
   if (!process.env.API_KEY) return false;
   
   const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
   
   const prompt = `
     Analyze the following chat message from a gaming tournament for toxicity, hate speech, or severe harassment.
     Respond with ONLY "true" if it is toxic/harmful, or "false" if it is safe.
     
     Message: "${text}"
   `;

   try {
     const response = await ai.models.generateContent({
       model: 'gemini-3-flash-preview',
       contents: prompt,
     });
     
     const result = response.text?.toLowerCase().trim();
     return result === 'true';
   } catch (e) {
     return false;
   }
};