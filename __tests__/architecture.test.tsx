import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    
    // Act
    render(<DesignArchitecture />);
    
    // Assert
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders error message when data fetching fails', async () => {
    // Arrange
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    
    // Act
    render(<DesignArchitecture />);
    
    // Assert
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('renders data when fetched successfully', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    // Act
    render(<DesignArchitecture />);
    
    // Assert
    await waitFor(() => expect(screen.getByText(/test design/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    render(<DesignArchitecture />);
    
    // Act
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Assert
    await waitFor(() => expect(fetchData).toHaveBeenCalled());
  });

  test('validates form inputs and shows error messages for invalid data', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    render(<DesignArchitecture />);
    
    // Act
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Assert
    await waitFor(() => expect(screen.getByText(/please enter a valid name/i)).toBeInTheDocument());
  });

  test('ensures component is accessible', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    render(<DesignArchitecture />);
    
    // Assert
    expect(screen.getByRole('button', { name: /submit/i })).toBeVisible();
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('aria-label');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    
    // Act
    render(<DesignArchitecture />);
    
    // Assert
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders error message when data fetching fails', async () => {
    // Arrange
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    
    // Act
    render(<DesignArchitecture />);
    
    // Assert
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('renders data when fetched successfully', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    // Act
    render(<DesignArchitecture />);
    
    // Assert
    await waitFor(() => expect(screen.getByText(/test design/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    render(<DesignArchitecture />);
    
    // Act
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Assert
    await waitFor(() => expect(fetchData).toHaveBeenCalled());
  });

  test('validates form inputs and shows error messages for invalid data', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    render(<DesignArchitecture />);
    
    // Act
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Assert
    await waitFor(() => expect(screen.getByText(/please enter a valid name/i)).toBeInTheDocument());
  });

  test('ensures component is accessible', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({
      name: 'Test Design',
      description: 'This is a test design'
    } as any);
    
    render(<DesignArchitecture />);
    
    // Assert
    expect(screen.getByRole('button', { name: /submit/i })).toBeVisible();
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('aria-label');
  });
});