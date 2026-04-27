# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NOVADEMY is a French-language online tutoring platform with three user roles: **student**, **teacher**, and **admin**. The codebase is a full-stack monorepo with separate `frontend/` and `backend/` directories.

## Commands

### Frontend (React + Vite)
```bash
cd frontend
npm run dev       # start dev server (localhost:5173)
npm run build     # production build
npm run lint      # ESLint
npm run preview   # preview production build
```

### Backend (Express + MySQL)
```bash
cd backend
npm run dev       # start with nodemon (localhost:5000)
npm start         # start without hot reload
node seedAdmin.js # seed the default admin account (admin@novademy.com / Admin123)
```

## Architecture

### Backend (`backend/`)
- **`server.js`** — Express entry point; registers all route modules under `/api/*`
- **`db.js`** — MySQL connection (uses `mysql2`); requires `.env` with `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- **`routes/`** — one file per resource: `authRoutes`, `teacherRoutes`, `studentRoutes`, `trialRoutes`, `reviewRoutes`, `announcementRoutes`, `paymentRoutes`, `packRoutes`, `messageRoutes`, `StudentProfileRoutes`
- Auth uses **JWT** (signed with `JWT_SECRET` env var, 1-day expiry) + **bcrypt** for passwords
- Password policy: min 8 chars, 1 uppercase, 1 digit (enforced in `authRoutes.js`)
- Password reset flow: token stored in `password_resets` table, expires in 1 hour

### Frontend (`frontend/src/`)
- **`main.jsx`** — React root; imports global `styles/ui.css` and Tailwind
- **`App.jsx`** — all client-side routes via React Router v7 (`BrowserRouter`)
- **`pages/`** — one component per page, organized by role prefix: `Student*`, `Teacher*`, `Admin*`
- No shared component library — pages use inline JS style objects (defined as `const S = {...}` at the top of each file) alongside Tailwind utility classes
- **`styles/ui.css`** — global base font sizes and `.app-page` class used across pages

### Route map (key paths)
| Path | Component |
|---|---|
| `/` | HomeTemp |
| `/login` | LoginTemp |
| `/register` → `/register/student` or `/register/teacher` | role-specific register pages |
| `/student/dashboard` | StudentDashboard |
| `/teacher/dashboard` | TeacherDashboard |
| `/admin/dashboard` | AdminDashboard |
| `/admin/*` | AdminTeachers, AdminStudents, AdminAnnouncements, AdminPayments, AdminTrials, AdminStats, AdminSettings |
| `/teacher/*` | TeacherProfile, TeacherRequests, TeacherPlanning, TeacherAnnouncements, TeacherRevenue, TeacherStudents, TeacherProposeFormula, TeacherCollectiveClasses |
| `/student/*` | StudentProfile, StudentPlanning, StudentRequests, StudentCourses, StudentMessages, StudentPacks, StudentReview, StudentTeachers, StudentChat |

### Environment variables required
Create `backend/.env`:
```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
PORT=5000
```
