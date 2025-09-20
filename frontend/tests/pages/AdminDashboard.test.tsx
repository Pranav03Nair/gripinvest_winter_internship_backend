import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdminDashboard from '@/pages/AdminDashboard';
import { AuthProvider } from '@/contexts/AuthContext';
import { UserRole, RiskLevel } from '@/types';

// Mock the hooks
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}));

jest.mock('@/contexts/AuthContext', () => ({
  ...jest.requireActual('@/contexts/AuthContext'),
  useAuth: () => ({
    user: {
      id: 'admin-user-id',
      first_name: 'Admin',
      last_name: 'User',
      email: 'admin@example.com',
      role: UserRole.ADMIN,
      risk_appetite: RiskLevel.MODERATE,
      balance: 0,
    },
    isAuthenticated: true,
    updateUser: jest.fn(),
  }),
}));

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('AdminDashboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetch.mockClear();
    
    // Default fetch responses
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [
            {
              id: 'product-1',
              name: 'Test Bond',
              investment_type: 'bond',
              annual_yield: 8.5,
              tenure_months: 12,
              risk_level: 'moderate',
              min_investment: 1000,
              max_investment: 100000,
            },
          ],
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [
            {
              id: 'user-1',
              first_name: 'John',
              last_name: 'Doe',
              email: 'john@example.com',
              role: 'user',
              balance: 50000,
              risk_appetite: 'moderate',
              created_at: '2024-01-01T00:00:00Z',
            },
          ],
        }),
      });
  });

  it('should render admin dashboard', async () => {
    render(
      <TestWrapper>
        <AdminDashboard />
      </TestWrapper>
    );

    expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage investment products/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/Products/i)).toBeInTheDocument();
      expect(screen.getByText(/Users/i)).toBeInTheDocument();
      expect(screen.getByText(/Transaction Logs/i)).toBeInTheDocument();
    });
  });

  it('should display statistics cards', async () => {
    render(
      <TestWrapper>
        <AdminDashboard />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText(/Total Products/i)).toBeInTheDocument();
      expect(screen.getByText(/High Risk Products/i)).toBeInTheDocument();
      expect(screen.getByText(/Total Users/i)).toBeInTheDocument();
    });
  });

  it('should switch between tabs', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <AdminDashboard />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText(/Products/i)).toBeInTheDocument();
    });

    // Switch to Users tab
    const usersTab = screen.getByRole('tab', { name: /Users/i });
    await user.click(usersTab);

    // Switch to Transaction Logs tab
    const logsTab = screen.getByRole('tab', { name: /Transaction Logs/i });
    await user.click(logsTab);
  });

  it('should handle add product button', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <AdminDashboard />
      </TestWrapper>
    );

    await waitFor(() => {
      const addButton = screen.getByText(/Add Product/i);
      expect(addButton).toBeInTheDocument();
    });

    const addButton = screen.getByText(/Add Product/i);
    await user.click(addButton);
  });

  it('should display users in users tab', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <AdminDashboard />
      </TestWrapper>
    );

    // Switch to Users tab
    await waitFor(() => {
      const usersTab = screen.getByRole('tab', { name: /Users/i });
      return user.click(usersTab);
    });

    await waitFor(() => {
      expect(screen.getByText(/User Management/i)).toBeInTheDocument();
      expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    });
  });

  it('should handle product creation', async () => {
    const user = userEvent.setup();
    
    // Mock successful product creation
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          id: 'new-product',
          name: 'New Test Product',
        },
      }),
    });

    render(
      <TestWrapper>
        <AdminDashboard />
      </TestWrapper>
    );

    // Click Add Product button
    await waitFor(() => {
      const addButton = screen.getByText(/Add Product/i);
      return user.click(addButton);
    });
  });
});