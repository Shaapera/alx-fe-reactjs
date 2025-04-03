import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async ({ query, location, minRepos, language, page = 1 }) => {
  try {
    // Construct the query string with all parameters
    let searchQuery = '';
    
    if (query) searchQuery += `${query} in:login,in:name`;
    if (location) searchQuery += ` location:${location}`;
    if (minRepos) searchQuery += ` repos:>${minRepos}`;
    if (language) searchQuery += ` language:${language}`;

    // Explicitly construct the URL with q parameter
    const apiUrl = `${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}&per_page=30&page=${page}`;
    
    const response = await axios.get(apiUrl);

    // Fetch additional details for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        try {
          const userDetails = await axios.get(user.url);
          return {
            ...user,
            ...userDetails.data
          };
        } catch {
          return user;
        }
      })
    );

    return {
      ...response.data,
      items: usersWithDetails
    };
  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error("API rate limit exceeded. Please try again later.");
    }
    throw new Error("Failed to fetch users. Please check your search criteria.");
  }
};