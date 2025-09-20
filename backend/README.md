# GripInvest Backend

## 🛠️ Tech Stack

- **Runtime**: Node.js (Framework - Express.js)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **AI**: Groq SDK[https://groq.com/]
- **Testing**: Jest with comprehensive coverage of > 75%
- **Validation**: Zod for schema validation

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication with role-based access control. (We have 'admin' and 'user')
- **Investment Management**: Create, track, and manage user investments with automatic maturity handling (Using CRON Job)
- **Product Catalog**: Comprehensive investment product management with AI generated descriptions
- **Transaction Logging**: Detailed logging of all API transactions with error tracking and AI Summary Generation
- **AI Integration**: Groq AI integration for product descriptions, recommendations, and portfolio insights
- **Comprehensive Testing**: Full test coverage with Jest
- **Type Safety**: Built with TypeScript for type safety


## 📋 Prerequisites

- Node.js
- Supabase Key (Database and Direct)
- Groq API key

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/gripinvest"
   DIRECT_URL="postgresql://username:password@localhost:5432/gripinvest"
   
   # JWT
   JWT_SECRET="your-jwt-secret"
   JWT_EXPIRES_IN="1h"
   
   # Groq AI
   GROQ_API_KEY="your-groq-api-key"
   
   # Server
   PORT=3000
   ```

4. **Database Setup**

   ```bash   
   # Generate Prisma client
   npx prisma generate
   
   # Seed database (Only required if you are using personal database)
   npm run seed
   ```

## 🚀 Quick Start

### Development

```bash
npm run dev
```

Server will start on `http://localhost:3000`

### Production

```bash
npm start
```

### Testing

```bash
npm test

npm run test:watch

npm run test:coverage
```

## 📁 Project Structure

```md
src/
├── controllers/    # Request handlers and business logic
├── middleware/     # Custom middleware functions
├── routes/         # API route definitions
├── services/       # Business logic and data access
├── utils/          # Utility functions and helpers
├── validators/     # Request validation schemas
├── types/          # TypeScript type definitions
└── jobs/           # Cron Job

tests/              # Test files mirroring src structure
prisma/             # Database schema and migrations
coverage/           # Test coverage reports
```

## 🔗 API Endpoints

### Health Check

- `GET /health` - Server and Database health status - Public/Exposed

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/users` - Get all users (admin only)

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)
- `GET /api/products/recommendations` - Get AI-powered recommendations

### Investments

- `POST /api/investments` - Create investment
- `GET /api/investments` - Get user investments
- `DELETE /api/investments/:id` - Cancel investment
- `GET /api/investments/insights` - Get portfolio insights
- `POST /api/investments/force-mature` - Force mature investments (admin only)

### Transaction Logs

- `POST /api/logs` - Get transaction logs
- `POST /api/logs/errors` - Get error summary

## 🤖 AI Features

The platform integrates with Groq AI to provide:

- **Product Descriptions**: Auto-generated compelling product descriptions
- **Investment Recommendations**: Personalized investment suggestions based on user profile
- **Portfolio Insights**: AI-powered analysis of investment performance and trends
- **Error Summaries**: Intelligent error categorization and summaries

See [AI Usage Documentation](./docs/AI_USAGE.md) for detailed information.

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control (User/Admin)
- Protected routes with middleware
- Secure password hashing with bcrypt

## 📊 Testing & Coverage

The project maintains high test coverage across:

- Controllers (100% coverage)
- Services (varies by service)
- Middleware (97%+ coverage)
- Utilities (100% coverage)

Current coverage statistics are available in the `coverage/` directory.

## 🏗️ Architecture

### Layered Architecture

1. **Controllers**: Handle HTTP requests/responses
2. **Services**: Business logic and data operations
3. **Middleware**: Cross-cutting concerns (auth, logging, validation)
4. **Utils**: Shared utility functions

### Key Design Patterns

- Repository pattern for data access
- Middleware pattern for request processing
- Service layer for business logic
- Error handling with global middleware

## 🔄 Background Jobs

- **Maturity Check**: Automated daily checks for investment maturity
- **Transaction Cleanup**: Periodic cleanup of old transaction logs

## 📈 Monitoring & Logging

- Comprehensive transaction logging
- Error tracking and categorization
- Performance monitoring
- Health check endpoints
