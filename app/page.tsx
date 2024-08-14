import DataBlock from "./components/DataBlock";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col py-4 items-center before:absolute before:self-center before:content-['MY-GEM'] before:text-9xl before:font-extrabold before:opacity-10 before:top-0 before:bottom-0">
      <h1 className="text-center text-3xl font-bold">Welcome to my home page</h1>
      <p className="text-gray-500 text-sm font-light">GEM is your personal AI assistant. You can ask any question you want...</p>
      <DataBlock/>
    </main>
  );
}
