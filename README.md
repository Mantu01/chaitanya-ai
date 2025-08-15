# Persona Bot

This is a [Next.js](https://nextjs.org) project that provides an AI-powered chat experience with selectable personas. It uses the Gemini API (Google Generative Language) via OpenAI-compatible endpoints to generate responses tailored to each persona.

## Features

- Chat with different personas (e.g., Hitesh Sir, Piyush Garg), each with unique prompts and introductions.
- Real-time AI responses using Gemini models.
- Serverless API route for secure AI requests.
- React context for chat state management.
- Typing indicator and message history.

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and add your Gemini API key:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Project Structure

- `src/context/ChatContext.tsx` – React context for managing chat state and sending messages.
- `src/app/api/ai/route.ts` – API route for handling chat requests and fetching AI responses.
- `src/constants/` – Persona prompts and introductions.

## Customization

- Add or modify personas in `src/constants/data.ts` and related prompt files.
- Adjust the chat UI and logic in `src/context/ChatContext.tsx`.

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI Node.js Library](https://github.com/openai/openai-node)
- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs/get-started)

---
