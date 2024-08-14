import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyB_spH9lXCkcqaVJRZETV_pVARJaTHET2Q");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(msg: string) {
  const prompt = msg;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
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
