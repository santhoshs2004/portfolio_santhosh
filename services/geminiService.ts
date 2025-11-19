
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS, EDUCATION, CERTIFICATES } from "../constants";
import { ChatMessage } from "../types";

const GROQ_API_KEY = (((import.meta as any).env?.VITE_GROQ_API_KEY) as string) || "";

const constructSystemPrompt = () => {
  // Optimize context by removing heavy fields like images/icons
  const simplifiedProjects = PROJECTS.map(({ image, ...rest }) => rest);
  const simplifiedSkills = SKILLS.map(cat => ({
    ...cat,
    items: cat.items.map(({ icon, ...rest }) => rest)
  }));
  
  const dataContext = JSON.stringify({
    personalInfo: PERSONAL_INFO,
    experiences: EXPERIENCES,
    skills: simplifiedSkills,
    projects: simplifiedProjects,
    education: EDUCATION,
    certificates: CERTIFICATES
  });

  return `
    You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website.
    Your role is to answer questions from visitors (recruiters, hiring managers, other developers) about ${PERSONAL_INFO.name}.
    
    Here is the data about the candidate in JSON format:
    ${dataContext}

    Rules:
    1. Answer in the first person (as if you are ${PERSONAL_INFO.name}) or third person (as an assistant), whichever feels more natural, but being an assistant is safer. Let's stick to being a helpful assistant "representing ${PERSONAL_INFO.name}".
    2. Keep answers professional, concise, and relevant to software engineering.
    3. If the answer is not in the provided data, politely say you don't have that information and suggest contacting ${PERSONAL_INFO.name} directly via the contact form.
    4. Do not hallucinate skills or experiences not listed.
    5. Keep responses relatively short (under 100 words) unless asked for details.
  `;
};

export const sendMessageToGroq = async (history: ChatMessage[]): Promise<string> => {
  if (!GROQ_API_KEY) {
    console.error("API Key is missing");
    return "I'm sorry, but I can't connect to the AI service right now. Please contact me directly via email.";
  }

  try {
    // Map our ChatMessage type to Groq's expected format
    const apiMessages = history.map(msg => ({
      role: msg.role === 'model' ? 'assistant' : 'user',
      content: msg.text
    }));

    // Prepend system prompt
    const messagesPayload = [
      {
        role: "system",
        content: constructSystemPrompt()
      },
      ...apiMessages
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY.trim()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: messagesPayload,
        model: "llama-3.3-70b-versatile",
        temperature: 0.5,
        max_tokens: 1024,
        stream: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error Body:", errorText);
      throw new Error(`Groq API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "I didn't receive a response.";
  } catch (error) {
    console.error("Groq API Request Failed:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};
