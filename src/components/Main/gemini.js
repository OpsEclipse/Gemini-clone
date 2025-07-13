import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyBdf7ASZJ2kPPJB4RlshdY_lkT0hnVPdb4"});

export async function Ai(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: text,
  });
  
  return response.text
}