

import './App.css';
import Header from './Header';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import {BookingConfirmed} from './BookingConfirmed';
import Footer from './Footer';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState, useReducer } from "react";

// Root component: shared layout (header/footer), routes and booking state
function App() {
  const [bookings, setBookings] = useState(0)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const navigate = useNavigate();

  // Send the booking to the API and, on success, bump the count and show confirmation
  function submitForm(formData) {
    const increaseBookings = window.submitAPI(formData)

    if (increaseBookings) {
      setBookings(bookings + 1); // or however you want to update it
      setBookingConfirmed(true)
    }
  }

  // Selected reservation time, kept in a reducer (default 18:30)
  const [time, dispatch] = useReducer(timeReducer, "18:30")

  function timeReducer(time, action) {
    if (action.type === 'setTime') {
      return action.time;
    }
    throw Error("Unknown action " + action.type)
  }

  function callReducer(value) {
    dispatch({ type: "setTime", time: value })
  }

  return (
    <div className="width-limitation-wrapper flex-container flex-column">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              bookings={bookings}
              submitForm={submitForm}
              bookingConfirmed={bookingConfirmed}
              time={time}
              callReducer={callReducer}
            />
          } />
                  <Route
          path="/booking-confirmed"
          element={
            <BookingConfirmed
            />
          } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
