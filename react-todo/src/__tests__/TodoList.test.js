// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';
import userEvent from '@testing-library/user-event'; // Ensure this import is correct

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders the initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  // Test 2: Adding a Todo
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    userEvent.type(input, 'New Todo');
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test 3: Toggling a Todo
  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  // Test 4: Deleting a Todo
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});