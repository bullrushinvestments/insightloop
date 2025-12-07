import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useSomeApi: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', async () => {
    const useSomeApi = jest.fn().mockResolvedValue({ data: 'someData' });
    (useSomeApi as unknown as jest.Mock)();

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(useSomeApi).toHaveBeenCalled());
  });

  test('displays loading state when fetching data', async () => {
    const useSomeApi = jest.fn().mockRejectedValue(new Error('Failed to fetch'));
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('displays error message when data fetching fails', async () => {
    const useSomeApi = jest.fn().mockRejectedValue(new Error('Failed to fetch'));
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('validates form inputs and displays error messages', () => {
    const useSomeApi = jest.fn();
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', async () => {
    const useSomeApi = jest.fn().mockResolvedValue({ data: 'someData' });
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(document.body).toHaveTextContent(/core functionality/i));
    expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();
  });

  test('mocks external dependencies correctly', () => {
    const useSomeApi = jest.fn().mockResolvedValue({ data: 'someData' });
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(useSomeApi).toHaveBeenCalled();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useSomeApi: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', async () => {
    const useSomeApi = jest.fn().mockResolvedValue({ data: 'someData' });
    (useSomeApi as unknown as jest.Mock)();

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(useSomeApi).toHaveBeenCalled());
  });

  test('displays loading state when fetching data', async () => {
    const useSomeApi = jest.fn().mockRejectedValue(new Error('Failed to fetch'));
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('displays error message when data fetching fails', async () => {
    const useSomeApi = jest.fn().mockRejectedValue(new Error('Failed to fetch'));
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('validates form inputs and displays error messages', () => {
    const useSomeApi = jest.fn();
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', async () => {
    const useSomeApi = jest.fn().mockResolvedValue({ data: 'someData' });
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(document.body).toHaveTextContent(/core functionality/i));
    expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();
  });

  test('mocks external dependencies correctly', () => {
    const useSomeApi = jest.fn().mockResolvedValue({ data: 'someData' });
    
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(useSomeApi).toHaveBeenCalled();
  });

});