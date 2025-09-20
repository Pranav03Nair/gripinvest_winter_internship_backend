import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductForm } from '@/components/admin/ProductForm';
import { InvestmentProduct, InvestmentType, RiskLevel } from '@/types';

// Mock the hooks
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}));

const mockProduct: InvestmentProduct = {
  id: 'product-1',
  name: 'Test Bond',
  investment_type: InvestmentType.BOND,
  tenure_months: 12,
  annual_yield: 8.5,
  risk_level: RiskLevel.MODERATE,
  min_investment: 1000,
  max_investment: 100000,
  description: 'Test bond description',
  created_by: 'admin-id',
  created_at: '2024-01-01T00:00:00Z',
};

describe('ProductForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render product form for creation', () => {
    render(<ProductForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    expect(screen.getByText(/Add New Product/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Investment Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Annual Yield/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tenure/i)).toBeInTheDocument();
    expect(screen.getByText(/Risk Level/i)).toBeInTheDocument();
  });

  it('should render product form for editing', () => {
    render(<ProductForm product={mockProduct} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    expect(screen.getByText(/Edit Product/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Bond')).toBeInTheDocument();
    expect(screen.getByDisplayValue('8.5')).toBeInTheDocument();
    expect(screen.getByDisplayValue('12')).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    const user = userEvent.setup();
    render(<ProductForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    // Fill out the form
    await user.type(screen.getByLabelText(/Product Name/i), 'New Bond Product');
    await user.type(screen.getByLabelText(/Annual Yield/i), '7.5');
    await user.type(screen.getByLabelText(/Tenure/i), '24');
    await user.type(screen.getByLabelText(/Minimum Investment/i), '5000');
    await user.type(screen.getByLabelText(/Maximum Investment/i), '150000');
    await user.type(screen.getByLabelText(/Description/i), 'Test description');

    // Submit the form
    await user.click(screen.getByRole('button', { name: /Create Product/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  it('should handle form cancellation', async () => {
    const user = userEvent.setup();
    render(<ProductForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    await user.click(screen.getByRole('button', { name: /Cancel/i }));
    expect(mockOnCancel).toHaveBeenCalled();
  });

  it('should handle form submission with empty fields', async () => {
    const user = userEvent.setup();
    render(<ProductForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    // Try to submit without filling required fields
    await user.click(screen.getByRole('button', { name: /Create Product/i }));

    // Form should still submit (no validation implemented)
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: '',
        investment_type: 'bond',
        tenure_months: 12,
        annual_yield: 0,
        risk_level: 'moderate',
        min_investment: 1000,
        max_investment: undefined,
        description: '',
      });
    });
  });
});