import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SERVICES, STYLISTS } from '../constants';

let client: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    // The API key must be obtained exclusively from the environment variable process.env.API_KEY
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

// Construct a system instruction that knows about the salon's context
const SYSTEM_INSTRUCTION = `
You are "Gia", the AI Style Consultant for Glam Era Salon. 
Your tone is chic, professional, warm, and knowledgeable about beauty trends.

Here is the list of services we offer:
${SERVICES.map(s => `- ${s.name} ($${s.price}, ${s.duration} mins): ${s.description}`).join('\n')}

Here are our top stylists:
${STYLISTS.map(s => `- ${s.name} (Specializations: ${s.specializations.join(', ')})`).join('\n')}

Your goal is to:
1. Help customers choose the right service based on their needs.
2. Explain what specific treatments (like Balayage) are.
3. Be concise but helpful. 
4. If a user wants to book, encourage them to click the "Book Appointment" button in the interface. Do not try to book it yourself, just guide them.
5. If they ask about the loyalty program, explain: "Buy 9 services, get the 10th free!"

Keep responses under 100 words unless asked for a detailed explanation.
`;

export const startChat = async (): Promise<void> => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await startChat();
  }

  if (!chatSession) {
    return "I'm having trouble connecting to the salon network right now. Please try again later.";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I'm sorry, I didn't quite catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a brief makeover moment (technical difficulty). Please try again!";
  }
};