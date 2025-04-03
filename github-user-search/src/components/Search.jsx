import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">GitHub User Search</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex gap-4">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. octocat"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 disabled:bg-blue-400 h-[42px]"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </form>

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p>{error}</p>
        </div>
      )}

      {userData && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start space-x-6">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="w-24 h-24 rounded-full border-2 border-gray-200"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {userData.name || userData.login}
                </a>
              </h2>
              <p className="text-gray-600 mb-2">@{userData.login}</p>
              
              {userData.bio && (
                <p className="text-gray-700 mb-4">{userData.bio}</p>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Repositories</p>
                  <p className="text-xl font-semibold">{userData.public_repos}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Followers</p>
                  <p className="text-xl font-semibold">{userData.followers}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Following</p>
                  <p className="text-xl font-semibold">{userData.following}</p>
                </div>
                {userData.location && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-xl font-semibold">{userData.location}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}