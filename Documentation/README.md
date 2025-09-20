# GripInvest Backend

This is a strictly 3-5 mins read. I recommend reading this before running the code.

## 📖 Table of Contents

- [Info](#-info)
- [Tech Stack](#️-tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Features](#-features)
- [Environment Variables](#-environment-variables)
- [Installation](#-installation)
- [AI](#ai)
  - [The CON of using AI](#the-con-of-using-ai)
  - [The PRO of using AI](#the-pro-of-using-ai)
  - [About GROQ](#about-groq)
- [Personal Note](#personal-note)
  - [Deliverables Met](#deliverables-met)
  - [Deliverables Missing](#deliverabled-missing)
  - [WHY Pranav WHY?](#why-pranav-why-)
- [Extra](#extra)
  - [API Endpoints](#-api-endpoints)

---

## 🚀 Info

Codebase is set to Development only, helps view all logs of backend(int terminal) and frontend(F12 Console)

## 🛠️ Tech Stack

### Backend

- **Runtime**: Node.js (Framework - Express.js)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **AI**: Groq SDK[https://groq.com/]
- **Testing**: Jest with comprehensive coverage of > 75%
- **Validation**: Zod for schema validation

### Frontend

- **Library**: React.js
- **Language**: TypeScript
- **Styling**: TailwindCSS (older version 3.4 - Better AI compatibility)

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication with role-based access control. (We have 'admin' and 'user')
- **Investment Management**: Create, track, and manage user investments with automatic maturity handling (Using CRON Job)
- **Product Catalog**: Comprehensive investment product management with AI generated descriptions
- **Transaction Logging**: Detailed logging of all API transactions with error tracking and AI Summary Generation
- **AI Integration**: Groq AI integration for product descriptions, recommendations, and portfolio insights
- **Comprehensive Testing**: Full test coverage with Jest in backend
- **Type Safety**: Built with TypeScript for type safety

## 📋 Environment Variables

- Supabase Key (Database and Direct)
- Groq API key
- JWT Secret

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Environment Setup**
   Create a `.env` file in the root directories -> /backend and /frontend:

   - Backend

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

   - Frontend

   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

3. **Fire Docker**

   - `docker compose down --volumes --remove-orphans`
   - `docker compose build --no-cache`
   - `docker compose up`

## AI

AI usage can be divided into two -

1. Code Generation

   I have used it in two specific places -
      - Backend: Only Test Generation [Bare Minimum Use]
      - Frontend: Code generation, Code designs [Heavy Intensive Use]
      - Optimizations: Prompt framing for LLM models, Frontend Code refactor, Bugfixes

2. LLM Service

   - Utilzing GROQ LLM Models to provide AI Insights are services

### The **CON of using AI**

For Code-Gen is, frontend code is messy, its a far contrast to the backend code I have built. Code should be beautiful and self explanatory, which LLM Code generation fails in case of complex code or unique UI Designs.

### The **PRO of using AI**

It rescued me from Test Generation in Backend and help me iterate an entire Frontend from scratch, allowing me to finish the project in under 12 hours.

### About **GROQ**

I am currently using the *llama-3.3-70b-versatile* model, which is free and has some *<=38k* free output token limit.

- It is decent but not something I would use for production. I would definitely go with Open-AI models or self hosted LLMS like Ollama (Depends on use-case).
- Input tokens are being wasted since I didn't have time to Fine Tune the Model, else we could have a 70% less Input Token Consumption.
- Caching replies would be golden as it would have further reduced Model use by a 50%

## Personal Note

This covers some questions that may arise in the reader's amazing mind:

### Deliverables Met

   1. Completely Functional and Scalable Backend
   2. Completely Functional Frontend
   3. \>75% Test Coverage Backend
   4. Database Hosted for ease of use - Pre-Seeded
   5. Containerized
   6. Documented

### Deliverabled Missing

   1. \>75% Test Coverage Frontend : I was alrady late, so I ran out of time.
   2. AMAZING Frontend : I love beautiful looking UI Components and UX (company.trippechalo.in), really wanted to craft and work on each component rather than rely on AI for that.

### WHY Pranav WHY ?

1. **Why not MySQL, Why Supabase?** - Since I was going to integrate AI and use an API, I was going to provide .env regardless. So instead of making the reader fire up and use the server I decided to give them a hosted one.

2. **Why haven't you explicitly mmentioned Seed Command?** - Since the DB is on cloud, its already populated, but to ensure that the user can use his own DB, I have provided the seed file in prisma folder, which can be run with `npm run seed`.

3. **Why not work harder and make a better product?** - I came across the post pretty recently and my company's product was scheduled to roll-out on 18/09/2025 = directly proportional to = pain-points and late night bugs screaming my name. Honestly wish I could have worked on this for longer, not that it isn't good but could have built it better definitely.

4. **What will you do now that time has run out?** - I will not be making an modifications to the submitted repo, that would be unfair to other candidates. I have to work on integrating payment portal at my current workplace, once I am done - I'll redo the frontend by hand and some upgrades I have it mind, it's a decent project I can show off.

## Extra

### 🔗 API Endpoints

#### Health Check

- `GET /health` - Server and Database health status - Public/Exposed

#### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/users` - Get all users (admin only)

#### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/recommendations` - Get AI-powered recommendations (requires authentication)
- `POST /api/products/create` - Create product (admin only)
- `PUT /api/products/:productId/update` - Update product (admin only)
- `DELETE /api/products/:productId/delete` - Delete product (admin only)

#### Users

- `GET /api/users/profile` - Get user profile (requires authentication)
- `GET /api/users/portfolioSummary` - Get user portfolio summary (user only)
- `POST /api/users/addBalance` - Add balance to user account (user only)

#### Investments

- `POST /api/investments/create` - Create investment (user only)
- `GET /api/investments` - Get user investments (user only)
- `GET /api/investments/portfolioInsights` - Get portfolio insights (requires authentication)
- `PATCH /api/investments/:id/cancel` - Cancel investment (user only)
- `POST /api/investments/:id/forcemature` - Force mature investments (admin only - marked as illegal in code)

#### Transaction Logs

- `POST /api/logs` - Get transaction logs (requires authentication)
- `POST /api/logs/summary` - Get error summary (admin only)
