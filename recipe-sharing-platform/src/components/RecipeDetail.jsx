import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-8">Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{recipe.title}</h1>
      <div className="max-w-2xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-600">{recipe.summary}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            {/* Add dynamic ingredients here if available in your data */}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600">
            <li>Step 1: Do something</li>
            <li>Step 2: Do something else</li>
            <li>Step 3: Finish cooking</li>
            {/* Add dynamic steps here if available in your data */}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;