import { Link } from 'react-router-dom';

const HomePage = () => {
  // ... existing code

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="text-center mb-8">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Add New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ... existing recipe cards */}
      </div>
    </div>
  );
};

export default HomePage;