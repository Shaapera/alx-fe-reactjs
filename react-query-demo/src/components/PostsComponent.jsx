import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query to fetch data
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts, {
    staleTime: 10000, // Cache data for 10 seconds
  });

  // Loading state
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;