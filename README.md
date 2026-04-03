
# Atomity Frontend Engineering Challenge

An interactive, animated cloud insights dashboard inspired by Atomity’s product demo. This project recreates a **drill-down analytics experience** (Cluster → Namespace → Pods) with smooth animations, dynamic data, and a clean SaaS-style UI.

---

## 🚀 Live Demo

[View Live Demo](https://atomity-frontend-challenge-snowy.vercel.app/)

---

## 📌 Overview

This project implements a **scroll-triggered, animated feature section** that visualizes cloud resource usage across different levels:

- **Cluster level** → Overview of infrastructure
- **Namespace level** → Grouped breakdown
- **Pod level** → Detailed resource usage

Users can **click to drill down** through each level, mimicking a real cloud monitoring dashboard.

---

## 🎯 Feature Choice

I chose the cluster-to-namespace drill-down feature because it demonstrates hierarchical data visualization and interactive exploration, which are common patterns in cloud monitoring platforms. It allowed me to showcase both UI transitions and state-driven data transformations.

---

## 📚 Libraries & Decisions

- **Framer Motion** → for smooth, declarative animations and scroll-triggered transitions
- **TanStack Query** → for efficient data fetching, caching, and state management
- **Tailwind CSS** → for rapid styling with responsive utilities and consistency
- **Next.js** → for structured architecture and modern React patterns

---

## ✨ Features

- Interactive **bar chart visualization**
- **Drill-down navigation** (Cluster → Namespace → Pods)
- **Dynamic data fetching** from API
- **Caching with React Query (TanStack Query)**
- Smooth **scroll + entrance animations (Framer Motion)**
- **Dark / Light mode toggle** with persistence
- Clean **token-based design system**
- Fully **responsive layout**
- Accessible and semantic HTML structure

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS (v4)**
- **Framer Motion** (animations)
- **TanStack Query (React Query)** (data fetching + caching)

---

## 🧠 Key Implementation Details

### 1. Component Architecture

```
src/
  components/
    FeatureSection.tsx
    Chart.tsx
    DataTable.tsx
    ThemeToggle.tsx
  hooks/
    useApiData.ts
  tokens/
    tokens.ts
```

- Modular and reusable components
- Clear separation of concerns

---

### 2. Data Fetching & Caching

- Data fetched from a public API
- Managed with **TanStack Query**
- Prevents unnecessary re-fetching
- Handles:
  - Loading state
  - Error state
  - Cached responses

---

### 3. Drill-down Logic

State-driven navigation:

- `cluster → namespace → pod`
- Dynamic data transformation per level
- Click-based transitions between views

---

### 4. Animation Approach

- **Framer Motion** used for:
  - Scroll-triggered section entrance
  - Staggered animations
  - Smooth transitions
- Designed to feel **natural and performant** (no jank)

---

### 5. Design System (Tokens)

- CSS variables used for consistency:

```
--color-bg-primary
--color-text-primary
--color-accent-success
--color-border-primary
```

- Referenced via `tokens.ts`
- Enables easy theming and scalability

---

### 6. Dark Mode Implementation

Dark mode is controlled via a **class-based approach**:

- `.dark` class applied to `<html>`
- Theme stored in `localStorage`

#### Challenge Faced

The app initially got stuck in dark mode due to:

- Mismatch between React state and DOM
- Persistent `.dark` class not resetting properly

#### Solution

- Forced reset of DOM class on mount
- Synced state with `localStorage`
- Used DOM (`classList.contains`) as source of truth

---

## 📱 Responsiveness

Optimized for:

- Desktop (1280px+)
- Tablet (768px)
- Mobile (375px)

---

## ♿ Accessibility

- Semantic HTML (`section`, `h2`, etc.)
- Keyboard-friendly interactions
- Respects `prefers-reduced-motion`

---

## ⚖️ Trade-offs

- Used simulated data transformations for hierarchy instead of real backend
- Focused on a single feature section instead of full application
- Prioritized animation quality over feature quantity

---

## 🚀 Future Improvements

- Add real cloud metrics API instead of simulated transformations
- Introduce tooltips and hover states for deeper data insights
- Improve accessibility with ARIA roles and screen reader support
- Add filtering and time-range controls for better usability
---

## 📦 Setup Instructions

```bash
npm install
npm run dev
```

---

## 📌 Submission Includes

- ✅ GitHub repository
- ✅ Live demo (Vercel)
- ✅ Detailed README

---

## 💡 Notes

This project focuses on **frontend engineering fundamentals**, including:

- Component design
- State management
- Animation craftsmanship
- Real-world UI patterns

Built to reflect how modern SaaS dashboards are structured and experienced.

## 💡 Author

Abraham Ogbu