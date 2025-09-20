import React from 'react';
import { render, screen } from '@testing-library/react';
import { PortfolioSummary } from '@/components/customer/PortfolioSummary';
import { PortfolioSummary as PortfolioSummaryType } from '@/types';

const mockPortfolioSummary: PortfolioSummaryType = {
  totalInvested: 50000,
  currentValue: 52500,
  totalReturns: 2500,
  returnsPercentage: 5.0,
  activeInvestments: 3,
};

describe('PortfolioSummary', () => {
  it('should render portfolio summary with correct data', () => {
    render(<PortfolioSummary summary={mockPortfolioSummary} />);

    expect(screen.getByText(/Total Invested/i)).toBeInTheDocument();
    expect(screen.getByText(/Current Value/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Returns/i)).toBeInTheDocument();
    expect(screen.getByText(/Returns %/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Investments/i)).toBeInTheDocument();

    expect(screen.getByText('₹50,000')).toBeInTheDocument();
    expect(screen.getByText('₹52,500')).toBeInTheDocument();
    expect(screen.getByText('₹2,500')).toBeInTheDocument();
    expect(screen.getByText('5.0%')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should handle zero values', () => {
    const emptyPortfolio: PortfolioSummaryType = {
      totalInvested: 0,
      currentValue: 0,
      totalReturns: 0,
      returnsPercentage: 0,
      activeInvestments: 0,
    };

    render(<PortfolioSummary summary={emptyPortfolio} />);

    expect(screen.getByText('₹0')).toBeInTheDocument();
    expect(screen.getByText('0.0%')).toBeInTheDocument();
  });

  it('should display negative returns correctly', () => {
    const negativePortfolio: PortfolioSummaryType = {
      totalInvested: 50000,
      currentValue: 47500,
      totalReturns: -2500,
      returnsPercentage: -5.0,
      activeInvestments: 2,
    };

    render(<PortfolioSummary summary={negativePortfolio} />);

    expect(screen.getByText('-₹2,500')).toBeInTheDocument();
    expect(screen.getByText('-5.0%')).toBeInTheDocument();
  });
});