

import { useState, useEffect } from 'react';
import './App.css';

export function initializeTimes() {
  const times = window.fetchAPI(new Date());
  return times
}

export function updateTimes(selectedDate) {
  const times = window.fetchAPI(new Date(selectedDate));
  return times
}


function BookingPage({ bookings, submitForm, time, callReducer, bookingConfirmed }) {
  const [date, setDate] = useState("")
  const [fieldErrors, setFieldErrors] = useState([])
  const [numberOfGuests, setNumberOfGuests] = useState()
  const [occasion, setOccasion] = useState("")
  const [availableTimes, setAvailableTimes] = useState([]);

  console.log("fieldErrors", fieldErrors)

  function validateAll() {
    const errors = []
    if (!date) errors.push("date")
    if (!time) errors.push("time")
    if (!numberOfGuests || Number(numberOfGuests) < 1) errors.push("numberOfGuests")
    if (!occasion) errors.push("occasion")
    return errors
  }

  function setInitialTimes() {
    const times = initializeTimes()
    setAvailableTimes(times);
  }

  function setUpdateTimes(selectedDate) {
    const times = updateTimes(selectedDate)
    setAvailableTimes(times);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateAll()
    setFieldErrors(errors)
    if (errors.length === 0) {
      submitForm({
          date: date,
          time: time,
          numberOfGuests: numberOfGuests,
          occasion: occasion
      })
    }
  };


  useEffect(() => {
    setInitialTimes()
  }, []);

  function handleDateChange(value) {
    const selectedDate = value;
    setDate(selectedDate);
    setUpdateTimes(selectedDate)
  }


  function checkDate(value) {
    if (!value) {
      setFieldErrors(prev => prev.includes("date") ? prev : [...prev, "date"])
    } else {
      setFieldErrors(prev => prev.filter(error => error !== "date"));
    }
    handleDateChange(value)
  }

  function checkTime(value) {
    callReducer(value)
    if (!value) {
      setFieldErrors(prev => prev.includes("time") ? prev : [...prev, "time"])
    } else {
      setFieldErrors(prev => prev.filter(error => error !== "time"));
    }
  }

  function checkNumberOfGuest(value) {
    setNumberOfGuests(value)
    if (!value || Number(value) < 1) {
      setFieldErrors(prev => prev.includes("numberOfGuests") ? prev : [...prev, "numberOfGuests"])
    } else {
      setFieldErrors(prev => prev.filter(error => error !== "numberOfGuests"));
    }
  }

  function checkOccasion(value) {
    setOccasion(value)
    if (!value) {
      setFieldErrors(prev => prev.includes("occasion") ? prev : [...prev, "occasion"])
    } else {

      setFieldErrors(prev => prev.filter(error => error !== "occasion"));
    }
  }

  return (
    <>
      <main>
        <div>
          <section>
            <h1>Book Now</h1>
            <p aria-live="polite">Current bookings: {bookings}</p>
            {
              bookingConfirmed &&
              <h2>Thanks for you reservation!</h2>
            }
            <form className="border default-padding" id="reservation-form" aria-label="Table reservation form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(event) => checkDate(event.target.value)} required />
                {fieldErrors.includes("date") &&
                  <span className="error">Please select a date!</span>
                }
              </div>

              <div className="input-wrapper">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(event) => checkTime(event.target.value)}>
                  {
                    availableTimes.map((time, index) => {
                      return <option value={time} key={index}>{time}</option>
                    })
                  }
                </select>
                {fieldErrors.includes("time") &&
                  <span className="error">Please select a time!</span>
                }
              </div>

              <div className="input-wrapper">
                <label htmlFor="guests">Number of guests</label>
                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  required
                  value={numberOfGuests}
                  onChange={(event) => checkNumberOfGuest(event.target.value)}
                />
                {fieldErrors.includes("numberOfGuests") &&
                  <span className="error">Enter at least 1 guest!</span>
                }
              </div>

              <div className="input-wrapper">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(event) => checkOccasion(event.target.value)} required>
                  <option value="">Please select&hellip;</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
                {fieldErrors.includes("occasion") &&
                  <span className="error">Please select an occasion!</span>
                }
              </div>
              <input role="button" type="submit" value="Make Your reservation" aria-label="Make Your reservation" required />
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default BookingPage;
