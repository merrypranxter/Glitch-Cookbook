import React, { useState, useCallback } from 'react';
import { Recipe } from '../types';
import { getCreativeInsight } from '../services/geminiService';
import { SparkleIcon } from './Icons';

interface RecipeDetailProps {
    recipe: Recipe;
}

const RecipeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">{title}</h3>
        {children}
    </div>
);

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
    const [insight, setInsight] = useState<string | null>(null);
    const [isLoadingInsight, setIsLoadingInsight] = useState(false);

    const handleGenerateInsight = useCallback(async () => {
        setIsLoadingInsight(true);
        setInsight(null);
        const recipeText = `
            Best for: ${recipe.bestFor}
            Ingredients: ${recipe.ingredients.join(', ')}
            Tools & Programs: ${recipe.toolsAndPrograms.join(', ')}
            Settings & Parameters: ${recipe.settingsAndParameters.join(', ')}
            Expected Results: ${recipe.expectedResults.join(', ')}
        `;
        const result = await getCreativeInsight(recipe.title, recipeText);
        setInsight(result);
        setIsLoadingInsight(false);
    }, [recipe]);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <header className="mb-8 pb-4 border-b border-zinc-800">
                <h2 className="text-4xl font-black text-zinc-100 tracking-tighter">{recipe.title}</h2>
                <p className="mt-2 text-md text-zinc-400 font-mono inline-block bg-zinc-800 px-3 py-1 rounded">
                    Best for: <span className="text-magenta-400 font-bold">{recipe.bestFor}</span>
                </p>
            </header>

            <div className="prose prose-invert prose-zinc max-w-none prose-p:text-zinc-300">
                <RecipeSection title="Ingredients">
                    <ul className="list-none p-0">
                        {recipe.ingredients.map((item, index) => <li key={index} className="mb-1">{item}</li>)}
                    </ul>
                </RecipeSection>

                <RecipeSection title="Tools & Programs">
                     <ul className="list-none p-0">
                        {recipe.toolsAndPrograms.map((item, index) => <li key={index} className="mb-1">{item}</li>)}
                    </ul>
                </RecipeSection>

                <RecipeSection title="Settings & Parameters">
                    <div className="space-y-3">
                        {recipe.settingsAndParameters.map((item, index) => (
                             <div key={index} className="flex items-start">
                                <span className="mr-3 text-cyan-400 font-mono font-bold">{index + 1}.</span>
                                <p className="flex-1 -mt-1" dangerouslySetInnerHTML={{ __html: item }} />
                            </div>
                        ))}
                    </div>
                </RecipeSection>

                <RecipeSection title="Expected Results & Why">
                     <ul className="list-none p-0">
                        {recipe.expectedResults.map((item, index) => <li key={index} className="mb-1">{item}</li>)}
                    </ul>
                </RecipeSection>
            </div>

            <div className="mt-12 p-6 border border-dashed border-zinc-700 rounded-lg bg-zinc-950/50">
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-bold text-lg text-zinc-100">AI Creative Assistant</h4>
                        <p className="text-sm text-zinc-500">Push your art further with a suggestion from Gemini.</p>
                    </div>
                    <button
                        onClick={handleGenerateInsight}
                        disabled={isLoadingInsight}
                        className="flex items-center space-x-2 px-4 py-2 bg-fuchsia-600 text-white rounded-md font-semibold text-sm hover:bg-fuchsia-500 transition-all disabled:bg-zinc-600 disabled:cursor-not-allowed transform hover:scale-105"
                    >
                        <SparkleIcon className="w-5 h-5" />
                        <span>{isLoadingInsight ? 'Generating...' : 'Glitch This Recipe'}</span>
                    </button>
                </div>
                {isLoadingInsight && <div className="text-center p-4 text-zinc-400">Corrupting the predictable...</div>}
                {insight && (
                    <div className="mt-4 p-4 bg-zinc-800/50 border border-zinc-700 rounded-md">
                        <p className="text-zinc-300 whitespace-pre-wrap">{insight}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeDetail;