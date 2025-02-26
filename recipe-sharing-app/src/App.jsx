import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import useRecipeStore from "./useRecipeStore";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <useRecipeStore />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
