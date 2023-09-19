import PersonalityCard from "./personalityCard";

export default function App() {
  return (
    <main className="h-full flex flex-col items-center w-full">
      <header className="h-20 bg-slate-50 w-full flex items-center justify-center">
        <h1>Hey! Ich bin Marius :)</h1>
      </header>
      <div className="flex flex-row gap-4 items-center justify-evenly w-full">
        <div>
          <PersonalityCard />
        </div>
        <div>
          <PersonalityCard />
        </div>
        <div>
          <PersonalityCard />
        </div>
      </div>
    </main>
  );
}
