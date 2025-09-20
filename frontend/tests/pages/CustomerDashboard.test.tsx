import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomerDashboard from '@/pages/CustomerDashboard';
import { AuthProvider } from '@/contexts/AuthContext';
import { User, UserRole, RiskLevel } from '@/types';

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
      id: 'test-user-id',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      role: 'user', // Use string literal instead of enum
      risk_appetite: 'moderate', // Use string literal instead of enum
      balance: 50000,
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

describe('CustomerDashboard', () => {
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
          data: [],
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: {
            totalInvested: 25000,
            currentValue: 26500,
            totalReturns: 1500,
            returnsPercentage: 6.0,
            activeInvestments: 3,
          },
        }),
      });
  });

  it('should render customer dashboard', async () => {
    render(
      <TestWrapper>
        <CustomerDashboard />
      </TestWrapper>
    );

    expect(screen.getByText(/Investment Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome back, John/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/Marketplace/i)).toBeInTheDocument();
      expect(screen.getByText(/My Portfolio/i)).toBeInTheDocument();
      expect(screen.getByText(/Recommendations/i)).toBeInTheDocument();
      expect(screen.getByText(/Insights/i)).toBeInTheDocument();
    });
  });

  it('should display portfolio summary', async () => {
    render(
      <TestWrapper>
        <CustomerDashboard />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText(/Total Invested/i)).toBeInTheDocument();
      expect(screen.getByText(/Total Returns/i)).toBeInTheDocument();
      expect(screen.getByText(/Active Investments/i)).toBeInTheDocument();
    });
  });

  it('should switch between tabs', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <CustomerDashboard />
      </TestWrapper>
    );

    // Wait for initial load
    await waitFor(() => {
      expect(screen.getByText(/Marketplace/i)).toBeInTheDocument();
    });

    // Switch to Portfolio tab
    const portfolioTab = screen.getByRole('tab', { name: /My Portfolio/i });
    await user.click(portfolioTab);

    // Switch to Recommendations tab
    const recommendationsTab = screen.getByRole('tab', { name: /Recommendations/i });
    await user.click(recommendationsTab);

    // Switch to Insights tab
    const insightsTab = screen.getByRole('tab', { name: /Insights/i });
    await user.click(insightsTab);
  });

  it('should handle product purchase', async () => {
    const user = userEvent.setup();
    
    // Mock successful investment creation
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        data: { id: 'investment-1' },
      }),
    });

    render(
      <TestWrapper>
        <CustomerDashboard />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText(/Available Investment Products/i)).toBeInTheDocument();
    });

    // Look for invest button (if product is displayed)
    const investButtons = screen.queryAllByText(/Invest/i);
    if (investButtons.length > 0) {
      await user.click(investButtons[0]);
    }
  });
});