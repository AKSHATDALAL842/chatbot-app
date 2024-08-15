// pages/api/chat.js
import { PiecesCopilot } from "pieces-copilot-sdk";

const copilot = new PiecesCopilot({
  apiKey: process.env.PIECES_COPILOT_API_KEY, // Use environment variable for API key
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      const response = await copilot.chat(message);
      res.status(200).json({ reply: response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
