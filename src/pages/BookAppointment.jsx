import AppointmentForm from "../components/AppointmentForm.jsx";

export default function BookAppointment() {
  return (
    <div className="page-header-wrap">
      <div className="page-header">
        <h1>Book an Appointment</h1>
        <p>Choose a department and pick a date that works for you.</p>
      </div>
      <AppointmentForm />
    </div>
  );
}
