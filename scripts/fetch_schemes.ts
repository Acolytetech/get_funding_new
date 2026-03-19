import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function fetchAllSchemes() {
  const prompt = `Generate a comprehensive list of at least 60 active Indian government schemes (both Central and State) for startups, MSMEs, and entrepreneurs. 
  Include major schemes like Startup India, MSME schemes, and state-specific ones (Odisha, Kerala, UP, Karnataka, Gujarat, Tamil Nadu, etc.).
  
  Format the output as a JSON array of objects with the following structure:
  {
    id: string (unique slug),
    title: string,
    tag: "FINANCIAL GROWTH" | "CERTIFICATION",
    about: string (brief description),
    fundType: string (e.g., "Grant", "Loan", "Equity", "Subsidy", "Reimbursement", "Allowance", "Not specified"),
    investmentSize: string (e.g., "₹50,00,000", "Up to 80% Subsidy", "Varies"),
    stage: "Idea stage to POC" | "Idea Stage" | "Post Poc" | "Growth Stage" | "Research & Innovation" | "Scale up Stage" | "Residency",
    type: "Central Government" | "State Government",
    focus: "Financial Growth" | "Certifications" | "Technology" | "Export Support",
    industry: string (e.g., "Biotechnology", "Electronics and Information Technology", "Science and Technology", "General", "Scientific and Industrial Research", "DEFENCE", "Communication", "Social Justice", "Space", "Textiles", "Power", "Agriculture", "Railways", "Others", "MSME", "Challenges"),
    reservation: string (e.g., "Unreserved", "SC/ST", "Women", "Youth", "SC/ST , Women"),
    state: string (e.g., "All India", "Odisha", "Kerala", "Uttar Pradesh", "Telangana", "Karnataka", "Gujarat", "Tamil Nadu", "Punjab", "Rajasthan", "Bihar", "Goa", "Jammu and Kashmir", "Madhya Pradesh", "Maharashtra"),
    isCertificate: boolean
  }
  
  Ensure the data is accurate as of 2024-2025.`;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            tag: { type: Type.STRING, enum: ["FINANCIAL GROWTH", "CERTIFICATION"] },
            about: { type: Type.STRING },
            fundType: { type: Type.STRING },
            investmentSize: { type: Type.STRING },
            stage: { type: Type.STRING },
            type: { type: Type.STRING, enum: ["Central Government", "State Government"] },
            focus: { type: Type.STRING },
            industry: { type: Type.STRING },
            reservation: { type: Type.STRING },
            state: { type: Type.STRING },
            isCertificate: { type: Type.BOOLEAN }
          },
          required: ["id", "title", "tag", "about", "fundType", "investmentSize", "stage", "type", "focus", "industry", "reservation", "state", "isCertificate"]
        }
      }
    }
  });

  return JSON.parse(response.text);
}

// This is a script to be run once to generate the data file.
// I will manually copy the output to src/data/schemes.ts
fetchAllSchemes().then(data => console.log(JSON.stringify(data, null, 2)));
