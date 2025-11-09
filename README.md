# 🧠 Full Stack AI Content Platform

A **Full Stack AI Creator Platform CMS** built with **Next.js 15**, **React 19**, **Tailwind CSS**, **Convex**, **Clerk Authentication**, **React Quill**, **ImageKit**, and **Shadcn UI**.  
This platform allows creators to write, edit, and publish AI-enhanced content with a seamless and modern interface.

🔗 **Live Project:** [https://ai-creatorr.vercel.app](https://ai-creatorr.vercel.app)

---

## 🚀 Features

- 🧑‍💻 **Next.js 15 + React 19** — App Router, Server Actions & modern React features  
- 🎨 **Tailwind CSS + Shadcn UI** — Beautiful, responsive, and customizable UI components  
- 🔒 **Clerk Authentication** — Secure user login & signup system with JWT integration  
- 🗄️ **Convex Backend** — Real-time data management with serverless backend functions  
- ✍️ **React Quill Editor** — Rich text editor integrated with AI-powered assistance  
- 🖼️ **ImageKit Integration** — Image & video uploads, transformations, and DAM  
- 📈 **Dashboard & Analytics** — Track your posts, stats, and performance  
- 🤖 **AI-Powered Tools** — Generate, review, and optimize content with AI assistance  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js 15** | Frontend framework |
| **React 19** | UI rendering |
| **Tailwind CSS** | Styling |
| **Shadcn UI** | UI components |
| **Convex** | Database & serverless backend |
| **Clerk** | Authentication & user management |
| **React Quill** | Rich text editor |
| **ImageKit** | Media management (upload, transform, delivery) |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following:

```bash
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_JWT_ISSUER_DOMAIN=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=
IMAGEKIT_PRIVATE_KEY=
```
## 🧩 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-content-platform.git
cd ai-content-platform
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Setup Environment
Create a .env.local file in the root directory and add the environment variables listed above.

### 4. Run Convex Development Server
```bash
npx convex dev
```
### 5. Start the App
```bash
npm run dev
```
