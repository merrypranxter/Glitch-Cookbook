import React from 'react';
import { Section } from '../types';
import './SplashScreen.css';

interface SplashScreenProps {
  sections: Section[];
  onEnter: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ sections, onEnter }) => {
  const recipeTitles = sections.flatMap(s => s.recipes.map(r => r.title)).slice(0, 20);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 overflow-hidden relative font-sans">
      <div className="absolute inset-0 z-0 opacity-20">
        {recipeTitles.map((title, i) => (
          <span
            key={i}
            className="absolute whitespace-nowrap font-mono text-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `move 25s linear infinite`,
              animationDelay: `${i * -1.25}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {title}
          </span>
        ))}
      </div>

      <div className="text-center z-10 p-8 bg-zinc-950/80 backdrop-blur-sm rounded-lg">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 glitch-static" data-text="GLITCH">
          GLITCH
        </h1>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter glitch-static" data-text="COOKBOOK">
          COOKBOOK
        </h1>
        
        <button
          onClick={onEnter}
          className="mt-16 font-bold text-lg bg-fuchsia-600 text-white py-3 px-8 rounded-md transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-fuchsia-600/50 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/50 glitch-text-hover"
        >
          Enter the Chaos
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;