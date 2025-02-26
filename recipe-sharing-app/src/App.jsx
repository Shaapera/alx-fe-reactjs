import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import useRecipeStore from "./components/recipeStore";
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (

    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
