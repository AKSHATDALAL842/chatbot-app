// pages/index.js
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import the Chat component as a client component
const Chat = dynamic(() => import("../components/chat"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chatbot App</title>
        <meta
          name="description"
          content="Chatbot App using Next.js and Pieces Copilot SDK"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Chatbot App</h1>
        <Chat />
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}
