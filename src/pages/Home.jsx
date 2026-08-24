import { useState } from "react";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Departments from "../components/Departments.jsx";
import Doctors from "../components/Doctors.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  // shared between Departments (sets it) and Doctors (reads it) — lifted
  // state, same pattern as before, just now scoped to the Home page only.
  const [activeDept, setActiveDept] = useState(null);

  return (
    <>
      <Hero />
      <Stats />
      <Departments activeDept={activeDept} onSelect={setActiveDept} />
      <Doctors activeDept={activeDept} />
      <Testimonials />
    </>
  );
}
