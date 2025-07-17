import { GoogleGenAI } from "@google/genai";
const api_key = import.meta.env.VITE_API_KEY


const ai = new GoogleGenAI({apiKey: api_key});

export async function Ai(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: text,
  });
  
  return response.text
}