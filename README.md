# HealthVerse — Smart Hospital Management (React + Vite)

A basic, working React project for a hospital management website, inspired
by Fortis Healthcare's layout, built with fundamental React concepts.

## What's inside

- `src/App.jsx` — top-level component, holds the shared `activeDept` state
- `src/components/` — one file per section (Navbar, Hero, Stats, Departments,
  Doctors, AppointmentForm, Testimonials, Footer)
- `src/data.js` — static mock data (departments, doctors, testimonials, stats)
- `src/index.css` — plain CSS, no framework, mobile-responsive

## Concepts demonstrated

- `useState` — mobile menu toggle, appointment form fields, department filter
- Lifting state up — `activeDept` lives in `App.jsx` and is shared between
  `Departments` (sets it) and `Doctors` (reads it) via props
- Controlled forms — the appointment form reads/writes state and validates
  before "submitting" (no backend — logs to state only)
- Conditional rendering (`&&`) — mobile menu, form error/success messages,
  empty state when a department filter matches no doctors
- `.map()` — every list (departments, doctors, testimonials, stats) is
  rendered from a plain JS array

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview
```

## Next steps you could try

- Split `data.js` into a real backend/API call (e.g. `fetch` in `useEffect`)
- Add routing (`react-router-dom`) for separate pages per department
- Persist appointment submissions (localStorage, or a backend + database)
- Add authentication for a patient/doctor dashboard
