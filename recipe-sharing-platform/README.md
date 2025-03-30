# Recipe Sharing Platform

This is a React-based Recipe Sharing Platform built using Vite. The platform allows users to view detailed information about recipes, including ingredients, cooking instructions, and a summary.

## Features

- View a list of recipes.
- Detailed recipe view with ingredients and cooking instructions.
- Responsive design for a seamless experience on all devices.

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd recipe-sharing-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## RecipeDetail Component

The `RecipeDetail` component is responsible for displaying detailed information about a specific recipe. It fetches the recipe data based on the `id` parameter from the URL and displays the following:

- Recipe title and image.
- Summary of the recipe.
- List of ingredients.
- Cooking instructions (if available).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
