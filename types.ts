
export interface Recipe {
  id: string;
  title: string;
  bestFor: string;
  ingredients: string[];
  toolsAndPrograms: string[];
  settingsAndParameters: string[];
  expectedResults: string[];
}

export interface Section {
  id: string;
  title:string;
  recipes: Recipe[];
}
