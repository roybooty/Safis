# 🎟️ Safis Event

Safis Event is a high-performance, **TypeScript-based** event management and ticketing platform. It allows users to discover events and purchase tickets while providing organizers with the tools to host events and process payments securely.

---

## 🚀 Tech Stack

This project is built as a **monorepo** managed by **Turborepo** for optimized builds and type-safe development.

* **Frontend:** [Next.js](https://nextjs.org/) (App Router) + TypeScript
* **Backend:** [Express.js](https://expressjs.com/) + TypeScript
* **Database:** [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
* **Caching:** [Redis](https://redis.io/)
* **Payments:** [Paystack](https://paystack.com/)
* **Media:** [Cloudinary](https://cloudinary.com/) (Image Storage)
* **Auth:** [JSON Web Tokens (JWT)](https://jwt.io/)
* **Communication:** [Nodemailer](https://nodemailer.com/) & [QR Code Generation](https://www.npmjs.com/package/qrcode)

---

## 📂 Project Structure

```text
.
├── apps
│   ├── safis_frontend   # Next.js web application (TS)
│   └── safis_backend    # Express API (TS)
├── packages             # Shared TypeScript configurations & ESLint
├── turbo.json           # Turborepo configuration
└── package.json         # Workspace root dependencies

```

---

## 🛠️ Getting Started

### 1. Prerequisites

* **Node.js** (v18+)
* **npm** (Recommended for Turborepo)
* **PostgreSQL** & **Redis**

### 2. Installation

```bash
git clone https://github.com/your-username/Safis.git
cd Safis
npm install

```

### 3. Environment Setup

Create `.env` files in the respective app directories.

**Backend (`apps/safis_backend/.env`):**

```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/safis_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
PAYSTACK_SECRET_KEY=sk_test_...
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

```

**Frontend (`apps/safis_frontend/.env.local`):**

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_...

```

### 4. Database Setup (Drizzle)

Run the following inside the `safis_backend` directory to sync your schema with PostgreSQL:

```bash
npm drizzle-kit generate

```

### 5. Running the Application

From the root directory, start both the frontend and backend simultaneously:

```bash
npm dev

```

* **Web App:** `http://localhost:3000`
* **API:** `http://localhost:5500`

---

## ✨ Key Features

* **Type Safety:** End-to-end TypeScript implementation for reliable data flow.
* **Event Hosting:** Create and manage event details with Cloudinary image hosting.
* **Paystack Integration:** Seamless payment processing for ticket sales.
* **Digital Tickets:** Automatic **QR Code** generation for easy check-ins.
* **Email Confirmations:** Tickets delivered via Nodemailer upon successful payment.
* **Caching:** Optimized response times using Redis.

---

## 📜 Available Scripts

* `npm dev` – Runs both apps in development mode with hot-reloading.
* `npm build` – Compiles TypeScript and builds apps for production.
* `npm lint` – Checks for linting errors across the entire workspace.

---

