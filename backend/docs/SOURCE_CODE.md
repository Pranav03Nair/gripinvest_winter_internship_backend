# Source Code Documentation

This document provides an overview of the source code structure and organization for the GripInvest backend.

## Architecture Overview

The codebase follows a layered architecture pattern with clear separation of concerns:

```md
src/
├── controllers/     # HTTP request handlers
├── middleware/      # Request/response interceptors
├── routes/         # API route definitions
├── services/       # Business logic layer
├── utils/          # Shared utilities
├── validators/     # Input validation schemas
├── types/          # TypeScript definitions
└── jobs/           # Background tasks
```

## 📁 Directory Structure

### `/controllers`

**Purpose**: Handle HTTP requests and responses, coordinate between routes and services.

**Responsibilities**:

- Parse request data
- Call appropriate service methods
- Handle response formatting
- Error handling and status codes

**Files**:

- `auth.controller.ts` - User authentication endpoints
- `investment.controller.ts` - Investment management endpoints
- `product.controller.ts` - Product catalog endpoints
- `transactionLog.controller.ts` - Transaction logging endpoints

**Pattern**:

```typescript
export const controllerFunction = async (req: Request, res: Response) => {
  try {
    const result = await serviceFunction(req.body);
    return sendSuccess(res, result, 200, 'Success message');
  } catch (error) {
    return sendFailure(res, error.message, 400);
  }
};
```

### `/middleware`

**Purpose**: Implement cross-cutting concerns that apply to multiple routes.

**Types**:

- **Authentication**: `authenticate.middleware.ts` - JWT token validation
- **Authorization**: `isAdmin.middleware.ts`, `isUser.middleware.ts` - Role-based access
- **Logging**: `transactionLog.middlerware.ts` - Request/response logging
- **Validation**: `validateRequest.middleware.ts` - Input validation
- **Error Handling**: `errorHandler.middleware.ts` - Global error processing

**Usage Pattern**:

```typescript
// Applied to routes
router.post('/endpoint', authenticate, validateRequest, controller);
```

### `/routes`

**Purpose**: Define API endpoints and apply appropriate middleware.

**Structure**:

- Route definitions with HTTP methods
- Middleware application order
- Parameter validation
- Documentation comments

**Example**:

```typescript
router.post('/create', authenticate, isUser, validateRequest(schema), controller);
```

### `/services`

**Purpose**: Implement core business logic and data operations.

**Responsibilities**:

- Database interactions via Prisma
- Business rule enforcement
- Data transformation
- Integration with external services (AI)

**Key Services**:

- `auth.service.ts` - User management and authentication
- `investment.service.ts` - Investment lifecycle management
- `product.service.ts` - Product catalog operations
- `transactionLog.service.ts` - Logging and audit trails

### `/utils`

**Purpose**: Provide reusable utility functions across the application.

**Categories**:

- **Database**: `prisma.util.ts` - Database client configuration
- **Authentication**: `jwt.util.ts` - JWT token operations
- **Response**: `sendResponse.util.ts` - Standardized API responses
- **Error Handling**: `catchAsync.util.ts` - Async error wrapper
- **AI Integration**: `groq.utils.ts` - AI service integrations

### `/validators`

**Purpose**: Define and validate request schemas using Zod.

**Features**:

- Type-safe validation
- Custom error messages
- Schema composition
- Runtime type checking

**Example**:

```typescript
export const createProductSchema = z.object({
  name: z.string().min(1),
  investment_type: z.enum(['FD', 'Bonds', 'Equity']),
  // ...more fields
});
```

### `/types`

**Purpose**: TypeScript type definitions and interfaces.

**Content**:

- API response types
- Database model extensions
- Shared interfaces
- Utility types

### `/jobs`

**Purpose**: Background tasks and scheduled operations.

**Implementation**:

- Cron job scheduling
- Investment maturity checks
- Cleanup operations
- Automated processing

## 🔄 Data Flow

### Typical Request Flow

1. **Route** receives HTTP request
2. **Middleware** processes authentication, validation, logging
3. **Controller** extracts data and calls service
4. **Service** implements business logic and database operations
5. **Utils** provide supporting functionality (AI, validation, etc.)
6. **Response** formatted and sent back

### Error Handling Flow

1. Service throws error
2. Controller catches and formats error
3. Global error middleware processes unhandled errors
4. Standardized error response sent

## 🛡️ Security Patterns

### Authentication Flow

1. User credentials validated
2. JWT token generated with user payload
3. Token attached to subsequent requests
4. Middleware validates token on protected routes
5. User context available in request object

### Authorization Levels

- **Public**: No authentication required
- **User**: Valid JWT token required
- **Admin**: JWT token + admin role required

## 📊 Testing Structure

Tests mirror the source structure:

```md
tests/
├── controllers/
├── middleware/
├── services/
├── utils/
└── validators/
```

Each test file covers:

- Happy path scenarios
- Error conditions
- Edge cases
- Integration points

## 🔧 Development Patterns

### Service Patter

- Services contain business logic
- Controllers are thin wrappers
- Database operations centralized
- Reusable across different endpoints

### Middleware Pattern

- Composable request processing
- Order-dependent execution
- Reusable across routes
- Clear separation of concerns

### Error Handling Pattern

- Consistent error structure
- Proper HTTP status codes
- Detailed error messages
- Logging for debugging

## 📝 Code Standards

### Naming Conventions

- `camelCase` for variables and functions
- `PascalCase` for types and interfaces
- `kebab-case` for file names
- Descriptive, meaningful names

### File Organization

- One main export per file
- Related functions grouped
- Clear module boundaries
- Minimal dependencies

### TypeScript Usage

- Strict type checking enabled
- Interfaces for data structures
- Proper error typing
- Generic types where appropriate

---
