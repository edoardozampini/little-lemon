import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    props.dispatch({ type: 'update', date: new Date(newDate) });
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={handleChange}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.map((timeOption) => (
                  <option key={timeOption} value={timeOption}>
                    {timeOption}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <select
                id="book-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              >
                <option value="">Select Guests</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='book-occasion'>Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select an Occasion</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;