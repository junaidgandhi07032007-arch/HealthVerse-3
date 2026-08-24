
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Activity,
}from "lucide-react";

export const departments = [
  { icon: Heart, name: "Cardiology", desc: "Heart care & surgery" },
  { icon: Brain, name: "Neurology", desc: "Brain & nervous system" },
  { icon: Bone, name: "Orthopedics", desc: "Bones & joints" },
  { icon: Baby, name: "Pediatrics", desc: "Child healthcare" },
  { icon: Stethoscope, name: "General Medicine", desc: "Everyday health issues" },
  { icon: Activity, name: "Emergency Care", desc: "24x7 critical care" },
];

export const doctors = [
  {
    name: "Dr. Ananya Sharma",
    spec: "Cardiologist",
    exp: "15+ yrs experience",
    dept: "Cardiology",
  },
  {
    name: "Dr. Rohan Mehta",
    spec: "Neurologist",
    exp: "12+ yrs experience",
    dept: "Neurology",
  },
  {
    name: "Dr. Priya Nair",
    spec: "Pediatrician",
    exp: "10+ yrs experience",
    dept: "Pediatrics",
  },
  {
    name: "Dr. Karan Verma",
    spec: "Orthopedic Surgeon",
    exp: "18+ yrs experience",
    dept: "Orthopedics",
  },
  {
    name: "Dr. Simran Kaur",
    spec: "General Physician",
    exp: "9+ yrs experience",
    dept: "General Medicine",
  },
  {
    name: "Dr. Arjun Rao",
    spec: "Emergency Medicine",
    exp: "11+ yrs experience",
    dept: "Emergency Care",
  },
];

export const testimonials = [
  {
    name: "Simran Kaur",
    text: "The doctors and staff at HealthVerse made a stressful time so much easier. Truly grateful.",
  },
  {
    name: "Arjun Patel",
    text: "Booking an appointment online took less than two minutes. Smooth experience end to end.",
  },
  {
    name: "Meera Iyer",
    text: "Clean facility, caring nurses, and quick emergency response. Highly recommend HealthVerse.",
  },
];

export const stats = [
  { label: "Years of Service", value: "25+" },
  { label: "Expert Doctors", value: "400+" },
  { label: "Beds Available", value: "1200+" },
  { label: "Cities Present", value: "18" },
];
