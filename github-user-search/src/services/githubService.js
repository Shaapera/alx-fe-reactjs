import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async ({ query, location, minRepos, language, page = 1 }) => {
  try {
    let searchQuery = '';
    
    if (query) searchQuery += `${query} in:login,in:name`;
    if (location) searchQuery += ` location:${location}`;
    if (minRepos) searchQuery += ` repos:>${minRepos}`;
    if (language) searchQuery += ` language:${language}`;
    
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: searchQuery,
        per_page: 30,
        page
      }
    });

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