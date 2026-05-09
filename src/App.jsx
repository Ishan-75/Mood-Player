import { useState } from "react";

import Intro from "./components/Intro";
import MoodSelector from "./components/MoodSelector";
import MusicCard from "./components/MusicCard";
import BackgroundEffects from "./components/BackgroundEffects";

export default function App() {
  const [started, setStarted] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 overflow-hidden relative">
      
      <BackgroundEffects />

      {!started ? (
        <Intro setStarted={setStarted} />
      ) : !selectedMood ? (
        <div className="z-10">
          <h1 className="text-5xl font-bold text-center mb-4">
            Choose Your Mood ✨
          </h1>

          <MoodSelector
            setSelectedMood={setSelectedMood}
          />
        </div>
      ) : (
        <MusicCard
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
      )}
    </div>
  );
}