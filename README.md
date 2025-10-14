# 🧠 NextLevel

**NextLevel** is an **AI-powered fitness and lifestyle web application** built with **Next.js 15**, **TypeScript**, and **Convex** for real-time data management.  
It helps users **generate personalized workout programs**, **track progress**, and **level up their fitness journey** using AI-driven automation.

## 🚀 Features

- 💪 **AI Fitness Generator** – Create customized workout programs based on user goals
- 🧍 **User Profiles** – Secure authentication and personalized fitness tracking
- 🧠 **Smart Recommendations** – AI adapts workouts dynamically as you progress
- 📊 **Progress Visualization** – View progress charts and weekly stats
- 🔒 **Authentication System** – Clerk integration for user login and signup
- 🧩 **Convex Backend** – Real-time serverless backend with automatic data sync
- 💻 **Responsive Design** – Fully optimized for desktop, tablet, and mobile
- ⚙️ **Next.js App Router** – Modern architecture with clean routing and layout system

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, TypeScript
- **Backend:** Convex (Serverless Functions)
- **Database:** Convex Data Layer
- **Styling:** TailwindCSS + Shadcn UI
- **Auth:** Clerk Authentication
- **AI:** Custom AI-powered workout generator
- **Linting & Formatting:** ESLint + Biome

## 📂 Project Structure

```bash
NextLevel-main/
 ┣ convex/                        # Convex backend functions & schema
 ┃ ┣ auth.config.ts               # Authentication configuration
 ┃ ┣ http.ts                      # Convex HTTP endpoints
 ┃ ┣ plans.ts                     # Workout plan logic
 ┃ ┣ users.ts                     # User management logic
 ┃ ┣ schema.ts                    # Database schema for Convex
 ┃ ┗ _generated/                  # Auto-generated Convex API and types
 ┣ public/                        # Static assets (images, icons, hero banners)
 ┃ ┣ ai-avatar.png
 ┃ ┣ hero-ai.png
 ┃ ┗ hero-ai2.png
 ┣ src/
 ┃ ┣ app/                         # Next.js App Router pages
 ┃ ┃ ┣ (auth)/                    # Authentication routes
 ┃ ┃ ┃ ┣ sign-in/[[...sign-in]]/page.tsx
 ┃ ┃ ┃ ┗ sign-up/[[...sign-up]]/page.tsx
 ┃ ┃ ┣ generate-program/          # AI workout generator page
 ┃ ┃ ┣ profile/                   # User profile page
 ┃ ┃ ┣ layout.tsx                 # Root layout
 ┃ ┃ ┣ page.tsx                   # Landing page
 ┃ ┃ ┗ globals.css                # Global styles
 ┃ ┣ components/                  # Reusable UI components
 ┃ ┃ ┣ Navbar.tsx
 ┃ ┃ ┣ Footer.tsx
 ┃ ┃ ┣ CornerElements.tsx
 ┃ ┃ ┗ NoFitnessPlan.tsx
 ┃ ┗ middleware.ts                # Middleware for route protection
 ┣ .gitignore
 ┣ components.json                # Shadcn UI registry
 ┣ eslint.config.mjs              # ESLint configuration
 ┣ next.config.ts                 # Next.js configuration
 ┣ package.json
 ┣ postcss.config.mjs
 ┣ tsconfig.json
 ┗ README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/Affan-Codes/NextLevel.git
cd NextLevel-main
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create .env file in the root directory

#### Add the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=your_issuer_domain

NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key

CONVEX_DEPLOYMENT=deployment_url
NEXT_PUBLIC_CONVEX_URL=your_convex_url

GEMINI_API_KEY=your_gemini_key
```

### 4️⃣ Run Convex Backend

```bash
npx convex dev
```

### 5️⃣ Start the development server

```bash
npm run dev
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

- Fork the project
- Create a feature branch (git checkout -b feature-name)
- Commit your changes (git commit -m "Added new feature")
- Push the branch (git push origin feature-name)
- Open a Pull Request

# 👨‍💻 Author

Made by **_Affan Khan_**
