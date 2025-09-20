export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export enum RiskLevel {
  LOW = "low",
  MODERATE = "moderate",
  HIGH = "high",
}

export enum InvestmentType {
  BOND = "bond",
  FD = "fd",
  MF = "mf",
  ETF = "etf",
  OTHER = "other",
}

export enum StatusType {
  ACTIVE = "active",
  MATURED = "matured",
  CANCELLED = "cancelled",
}

export interface User {
  id: string;
  first_name: string;
  last_name?: string;
  email: string;
  role: UserRole;
  risk_appetite: RiskLevel;
  balance: number;
  created_at?: string;
  updated_at?: string;
}

export interface InvestmentProduct {
  id: string;
  name: string;
  investment_type: InvestmentType;
  tenure_months: number;
  annual_yield: number;
  risk_level: RiskLevel;
  min_investment: number;
  max_investment?: number;
  description?: string;
  created_by?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserInvestment {
  id: string;
  user_id: string;
  product_id: string;
  amount: number;
  invested_at: string;
  status: StatusType;
  expected_return?: number;
  maturity_date?: string;
  product: InvestmentProduct;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    riskLevel: RiskLevel
  ) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

export interface PortfolioSummary {
  totalInvested: number;
  currentValue: number;
  totalReturns: number;
  returnsPercentage: number;
  activeInvestments: number;
}
