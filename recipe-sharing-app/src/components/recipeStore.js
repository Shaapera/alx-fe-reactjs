/*import {create}  from 'zustand'; // Use named import for 'create'

const useRecipeStore = create((set get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filteredRecipes();
  },
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
    });
  },
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

    deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setRecipes: (recipes) => set({ recipes }),
});

export default useRecipeStore;
*/
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // Mock implementation: Recommend recipes that are in favorites and pass a random condition
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
  // Existing actions for recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

export default useRecipeStore;