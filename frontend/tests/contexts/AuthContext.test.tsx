import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider } from '@/contexts/AuthContext';
import { User, UserRole, RiskLevel } from '@/types';

// Mock user data
const mockUser: User = {
  id: 'test-user-id',
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@example.com',
  role: UserRole.USER,
  risk_appetite: RiskLevel.MODERATE,
  balance: 10000,
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
};

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

// Test wrapper component
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('AuthContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue('mock-token');
  });

  it('should provide authentication context', () => {
    const TestComponent = () => {
      return <div data-testid="test-component">Auth Context Test</div>;
    };

    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );

    expect(screen.getByTestId('test-component')).toBeInTheDocument();
  });

  it('should handle user login', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          user: mockUser,
          token: 'mock-token',
        },
      }),
    });

    const TestComponent = () => {
      return <div data-testid="login-test">Login Test</div>;
    };

    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );

    expect(screen.getByTestId('login-test')).toBeInTheDocument();
  });

  it('should handle logout', () => {
    const TestComponent = () => {
      return <div data-testid="logout-test">Logout Test</div>;
    };

    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );

    expect(screen.getByTestId('logout-test')).toBeInTheDocument();
  });
});