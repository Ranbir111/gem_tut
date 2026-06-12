import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY!});

async function run(msg: string) {
  const prompt = msg;

  // const result = await model.generateContent(prompt);
  // const response = await result.response;
  // const text = response.text();

  const response = await ai.models.generateContent({
    model: process.env.GEMINI_MODEL_NAME!,
    contents: prompt,
  });
  const text = response.text;
  return text;
}

export const POST = async (req: Request) => {
  const { msg } = await req.json();
  const response = await run(msg);
  return Response.json({ status: 200, data: response });
};

export const GET = async () => {
  return Response.json({
    status: 200,
    msg: "GET method not avalible try using POST...",
  });
};
