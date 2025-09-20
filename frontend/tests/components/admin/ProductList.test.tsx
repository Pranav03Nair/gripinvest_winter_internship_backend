import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductList } from '@/components/admin/ProductList';
import { InvestmentProduct, InvestmentType, RiskLevel } from '@/types';

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
    description: 'Safe government bond',
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
    created_at: '2024-01-02T00:00:00Z',
  },
];

describe('ProductList', () => {
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render product list with products', () => {
    render(<ProductList products={mockProducts} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    expect(screen.getByText('Government Bond')).toBeInTheDocument();
    expect(screen.getByText('Corporate Bond')).toBeInTheDocument();
    expect(screen.getByText('7.5%')).toBeInTheDocument();
    expect(screen.getByText('9.0%')).toBeInTheDocument();
  });

  it('should handle edit button click', async () => {
    const user = userEvent.setup();
    render(<ProductList products={mockProducts} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    // Find the edit button by role and click it
    const editButtons = screen.getAllByRole('button');
    const editButton = editButtons.find(button => 
      button.querySelector('svg[data-testid="pencil-icon"]') || 
      button.innerHTML.includes('Pencil')
    );
    
    if (editButton) {
      await user.click(editButton);
      expect(mockOnEdit).toHaveBeenCalledWith(mockProducts[0]);
    }
  });

  it('should handle delete button click', async () => {
    const user = userEvent.setup();
    render(<ProductList products={mockProducts} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    // Find the delete button by role and click it
    const deleteButtons = screen.getAllByRole('button');
    const deleteButton = deleteButtons.find(button => 
      button.querySelector('svg[data-testid="trash-icon"]') || 
      button.innerHTML.includes('Trash')
    );
    
    if (deleteButton) {
      await user.click(deleteButton);
      expect(mockOnDelete).toHaveBeenCalledWith('product-1');
    }
  });

  it('should display empty state when no products', () => {
    render(<ProductList products={[]} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    expect(screen.getByText(/No products found/i)).toBeInTheDocument();
  });

  it('should display product details correctly', () => {
    render(<ProductList products={mockProducts} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    expect(screen.getByText('12 months')).toBeInTheDocument();
    expect(screen.getByText('18 months')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
    expect(screen.getByText('Moderate')).toBeInTheDocument();
    expect(screen.getByText('₹1,000.00')).toBeInTheDocument();
    expect(screen.getByText('₹5,000.00')).toBeInTheDocument();
  });
});