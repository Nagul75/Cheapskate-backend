# Cheapskate  
**Personal Finance & Budget Management Platform**

Cheapskate is a production-style, full-stack personal finance application that enables users to securely track accounts, transactions, budgets, and spending insights. The project emphasizes backend correctness, data integrity, and a clean, responsive user experience.

This project is **actively developed** and reflects real-world engineering concerns such as authentication lifecycle management, transactional consistency, and scalable frontend state handling.

---

## Overview

Cheapskate allows users to:
- Manage multiple financial accounts
- Track income and expenses with strong consistency guarantees
- Create monthly budgets per category
- Visualize spending trends and category breakdowns
- Securely authenticate and access their own data only

The system is designed with a clear separation of concerns between backend APIs and frontend state, mirroring real production architectures.

---

## Tech Stack

### Backend
- Node.js, Express
- PostgreSQL
- Prisma ORM
- JWT (Access + Refresh tokens)
- Zod (schema validation)

### Frontend
- React (Vite)
- shadcn/ui
- React Query (TanStack Query)
- Axios
- Recharts
- react-hook-form + Zod

---

## Key Features

### Authentication & Security
- JWT-based authentication with access and refresh token flow
- Protected routes on both backend and frontend
- Authorization checks ensuring users can only access their own data
- Secure password hashing with bcrypt

---

### Accounts & Transactions
- Multiple accounts per user
- Transaction creation, updates, and deletion
- Automatic account balance reconciliation on every transaction change
- Advanced filtering by date range, category, account, and type

---

### Budgets
- Monthly budgets per category
- Real-time budget utilization tracking
- Over-budget indicators and visual warnings
- Budget creation, updates, and deletion

---

### Analytics Dashboard
- Monthly income, expenses, and net balance summary
- Spending grouped by category (pie/donut charts)
- Spending trends over time (line/area charts)
- Configurable date range with current-month defaults

---

### Frontend UX
- Responsive layout with sidebar navigation
- Loading skeletons and empty states for all views
- Optimistic UI updates for transactions
- Error handling with toast notifications
- Light/Dark mode support

---

## Architecture Highlights

### Backend
- RESTful API design with modular routing
- Centralized error handling middleware
- Input validation on all endpoints using Zod
- Transaction-safe financial logic to ensure balance consistency
- Clean separation between routes, controllers, and database layer

### Frontend
- API abstraction layer using Axios
- Global data fetching and caching with React Query
- Form state and validation using react-hook-form + Zod
- Reusable UI components built with shadcn/ui
