/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { initializeTimes, updateTimes } from "./BookingPage";


test('Renders the BookingForm heading', () => {
  window.fetchAPI = jest.fn().mockReturnValue(["17:00", "18:00"])
  render(<BookingPage bookings={0} handleFormSubmit={() => {}} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Initialize Times Return Value', () => {
  window.fetchAPI = jest.fn().mockReturnValue(["17:00", "18:00"])

  const times = initializeTimes()
  expect(times).toHaveLength(2);
  expect(times[0]).toBe("17:00")
})

test('Update Times Return Value', () => {
  window.fetchAPI = jest.fn().mockReturnValue(["17:00", "18:00"])

  const times = updateTimes(new Date("2026-09-12"))
  expect(times).toHaveLength(2);
  expect(times[times.length - 1]).toBe("18:00")
})

test('Write and Read LocalStorage', () => {
  localStorage.setItem("restaurant", "Little Lemon");

expect(localStorage.getItem("restaurant")).toBe("Little Lemon");
})