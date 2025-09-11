
import React, { useState, useMemo, useEffect } from 'react';
import { cookbookData } from './data/cookbookParser';
import { Recipe, Section } from './types';
import { SearchIcon, BookIcon } from './components/Icons';
import RecipeDetail from './components/RecipeDetail';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Pre-select the first recipe once the app loads behind the splash
        if (cookbookData.length > 0 && cookbookData[0].recipes.length > 0) {
            setSelectedRecipeId(cookbookData[0].recipes[0].id);
        }
    }, []);

    const filteredSections = useMemo(() => {
        if (!searchQuery) {
            return cookbookData;
        }
        const lowercasedQuery = searchQuery.toLowerCase();
        return cookbookData.map(section => {
            const filteredRecipes = section.recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(lowercasedQuery) ||
                recipe.bestFor.toLowerCase().includes(lowercasedQuery) ||
                [...recipe.ingredients, ...recipe.toolsAndPrograms].some(item => item.toLowerCase().includes(lowercasedQuery))
            );
            return { ...section, recipes: filteredRecipes };
        }).filter(section => section.recipes.length > 0);
    }, [searchQuery]);

    const selectedRecipe = useMemo(() => {
      for (const section of cookbookData) {
        const recipe = section.recipes.find(r => r.id === selectedRecipeId);
        if (recipe) return recipe;
      }
      return null;
    }, [selectedRecipeId]);

    if (showSplash) {
        return <SplashScreen sections={cookbookData} onEnter={() => setShowSplash(false)} />;
    }

    return (
        <div className="flex h-screen bg-zinc-900 text-zinc-300 font-sans">
            {/* Sidebar */}
            <aside className="w-1/3 max-w-sm h-full flex flex-col bg-zinc-950 border-r border-zinc-800">
                <header className="p-4 border-b border-zinc-800 flex items-center space-x-3">
                    <BookIcon className="w-8 h-8 text-cyan-400" />
                    <div>
                        <h1 className="text-2xl font-black tracking-tighter text-zinc-100">Glitch_Cookbook</h1>
                        <p className="text-xs text-zinc-500">A Compendium of Databending Recipes</p>
                    </div>
                </header>
                <div className="p-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search recipes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-zinc-500" />
                        </div>
                    </div>
                </div>
                <nav className="flex-1 overflow-y-auto scrollbar-thin-dark pr-1">
                    {filteredSections.map(section => (
                        <div key={section.id} className="py-2">
                             <h2 className="px-4 text-sm font-bold text-cyan-400 uppercase tracking-wider">{section.title}</h2>
                            <ul>
                                {section.recipes.map(recipe => (
                                    <li key={recipe.id}>
                                        <button
                                            onClick={() => setSelectedRecipeId(recipe.id)}
                                            className={`w-full text-left px-4 py-2 text-sm rounded-md transition-all duration-150 ${
                                                selectedRecipeId === recipe.id
                                                    ? 'bg-cyan-500/10 text-cyan-300 glitch-text-active'
                                                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100 glitch-text-hover'
                                            }`}
                                        >
                                            {recipe.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto scrollbar-thin-dark">
                {selectedRecipe ? (
                    <RecipeDetail recipe={selectedRecipe} />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center p-4">
                            <h2 className="text-2xl font-bold">No Recipe Found</h2>
                            <p className="text-zinc-500">
                                {searchQuery ? `No recipes match your search for "${searchQuery}".` : "Choose a recipe from the list to start glitching."}
                            </p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default App;
