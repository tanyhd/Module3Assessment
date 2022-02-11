
export interface RecipeList {
  id: string;
  title: string;
}

export interface Recipe {
  id: string;
  title: string;
  image: string;
  instruction: string;
  ingredients: String[];
}
