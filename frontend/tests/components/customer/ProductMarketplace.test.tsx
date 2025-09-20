import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductMarketplace } from '@/components/customer/ProductMarketplace';
import { InvestmentProduct, InvestmentType, RiskLevel } from '@/types';

// Mock the hooks
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}));

const mockProducts: InvestmentProduct[] = [
  {
    id: 'product-1',
    name: 'Government Bond',
    investment_type: InvestmentType.BOND,
    tenure_months: 12,
    annual_yield: 7.5,
    risk_level: RiskLevel.LOW,
    min_investment: 1000,
    max_investment: 100000,
    description: 'Safe government bond with steady returns',
    created_by: 'admin-id',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'product-2',
    name: 'Corporate Bond',
    investment_type: InvestmentType.BOND,
    tenure_months: 18,
    annual_yield: 9.0,
    risk_level: RiskLevel.MODERATE,
    min_investment: 5000,
    max_investment: 200000,
    description: 'Corporate bond with higher returns',
    created_by: 'admin-id',
    created_at: '2024-01-01T00:00:00Z',
  },
];

describe('ProductMarketplace', () => {
  const mockOnPurchase = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render product marketplace with products', () => {
    render(<ProductMarketplace products={mockProducts} onPurchase={mockOnPurchase} />);

    expect(screen.getByText('Government Bond')).toBeInTheDocument();
    expect(screen.getByText('Corporate Bond')).toBeInTheDocument();
    expect(screen.getByText('7.5% p.a.')).toBeInTheDocument();
    expect(screen.getByText('9.0% p.a.')).toBeInTheDocument();
  });

  it('should display product details correctly', () => {
    render(<ProductMarketplace products={mockProducts} onPurchase={mockOnPurchase} />);

    expect(screen.getByText('12 months')).toBeInTheDocument();
    expect(screen.getByText('18 months')).toBeInTheDocument();
    expect(screen.getByText('Low Risk')).toBeInTheDocument();
    expect(screen.getByText('Moderate Risk')).toBeInTheDocument();
  });

  it('should handle product purchase', async () => {
    const user = userEvent.setup();
    render(<ProductMarketplace products={mockProducts} onPurchase={mockOnPurchase} />);

    const investButtons = screen.getAllByText(/Invest/i);
    await user.click(investButtons[0]);

    // Should open investment modal or form
    expect(screen.getByText(/Investment Amount/i)).toBeInTheDocument();
  });

  it('should validate investment amount', async () => {
    const user = userEvent.setup();
    render(<ProductMarketplace products={mockProducts} onPurchase={mockOnPurchase} />);

    const investButtons = screen.getAllByText(/Invest/i);
    await user.click(investButtons[0]);

    const amountInput = screen.getByLabelText(/Investment Amount/i);
    const confirmButton = screen.getByRole('button', { name: /Confirm Investment/i });

    // Test minimum amount validation
    await user.clear(amountInput);
    await user.type(amountInput, '500');
    await user.click(confirmButton);

    expect(screen.getByText(/Minimum investment amount is ₹1,000/i)).toBeInTheDocument();
  });

  it('should handle empty products list', () => {
    render(<ProductMarketplace products={[]} onPurchase={mockOnPurchase} />);

    expect(screen.getByText(/No investment products available/i)).toBeInTheDocument();
  });

  it('should filter products by search', async () => {
    const user = userEvent.setup();
    render(<ProductMarketplace products={mockProducts} onPurchase={mockOnPurchase} />);

    const searchInput = screen.getByPlaceholderText(/Search products/i);
    await user.type(searchInput, 'Government');

    expect(screen.getByText('Government Bond')).toBeInTheDocument();
    expect(screen.queryByText('Corporate Bond')).not.toBeInTheDocument();
  });

  it('should filter products by risk level', async () => {
    const user = userEvent.setup();
    render(<ProductMarketplace products={mockProducts} onPurchase={mockOnPurchase} />);

    const lowRiskFilter = screen.getByText('Low Risk');
    await user.click(lowRiskFilter);

    expect(screen.getByText('Government Bond')).toBeInTheDocument();
    expect(screen.queryByText('Corporate Bond')).not.toBeInTheDocument();
  });
});