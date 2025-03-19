import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = 'Title is required';
    }
    if (!ingredients.trim()) {
      validationErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      validationErrors.ingredients = 'Please include at least two ingredients';
    }
    if (!steps.trim()) {
      validationErrors.steps = 'Preparation steps are required';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Handle form submission (e.g., send data to an API or update state)
    const newRecipe = {
      id: Date.now(), // Generate a unique ID
      title,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      steps: steps.split('\n').map((step) => step.trim()),
    };

    console.log('New Recipe:', newRecipe); // For testing purposes

    // Reset form fields
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md" // Added shadow-md here
      >
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded-lg shadow-sm ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`} // Added shadow-sm here
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-lg font-semibold mb-2">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border rounded-lg shadow-sm ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`} // Added shadow-sm here
            placeholder="Enter ingredients, separated by commas"
            rows="4"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border rounded-lg shadow-sm ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`} // Added shadow-sm here
            placeholder="Enter preparation steps, one per line"
            rows="6"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300" // Added shadow-md here
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;