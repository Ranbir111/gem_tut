import DataBlock from "./components/DataBlock";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col py-4 items-center before:absolute before:self-center before:content-['MY-GEM'] before:text-9xl before:font-extrabold before:opacity-5 before:top-0 before:bottom-0">
      <h1 className="text-center text-3xl font-bold">Welcome to MY-GEM</h1>
      <p className="text-gray-500 text-sm font-light text-center">GEM is your personal AI assistant. You can ask any question you want...</p>
      <DataBlock/>
    </main>
  );
}
