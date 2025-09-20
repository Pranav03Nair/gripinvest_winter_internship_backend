import React from "react";
import "@testing-library/jest-dom";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: "div",
    h1: "h1",
    p: "p",
    button: "button",
    nav: "nav",
    tr: "tr",
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/" }),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => children,
  Routes: ({ children }: { children: React.ReactNode }) => children,
  Route: ({ children }: { children: React.ReactNode }) => children,
  Navigate: () => null,
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock environment variables
process.env.VITE_API_BASE_URL = "http://localhost:3000";

// Mock import.meta.env
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_BASE_URL: "http://localhost:3000"
      }
    }
  },
  writable: true,
  configurable: true
});

// Global fetch mock
global.fetch = jest.fn();

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;
