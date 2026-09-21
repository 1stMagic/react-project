/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
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


test('Validate All Fields', async () => {
  window.fetchAPI = jest.fn().mockReturnValue(["17:00", "18:00"])
  render(<BookingPage bookings={0} handleFormSubmit={() => {}} callReducer={() => {}} />);

  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  const occasionSelect = screen.getByLabelText("Occasion");

  expect(dateInput).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();

  fireEvent.change(dateInput, { target: { value: "2026-09-19" } });
  fireEvent.change(dateInput, { target: { value: "" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(guestsInput, { target: { value: "" } });
  fireEvent.change(occasionSelect, { target: { value: "birthday" } });
  fireEvent.change(occasionSelect, { target: { value: "" } });

  expect(dateInput.value).toBe("");
  expect(guestsInput.value).toBe("");
  expect(occasionSelect.value).toBe("");

  const dateField = await screen.findByText("Please select a date!");
  const guestsField = await screen.findByText("Enter at least 1 guest!");
  const occasionField = await screen.findByText("Please select an occasion!");

   expect(dateField).toBeInTheDocument();
   expect(guestsField).toBeInTheDocument();
   expect(occasionField).toBeInTheDocument();

})

test('Submit Form with empty fields shows errors and does not submit', () => {
  window.fetchAPI = jest.fn().mockReturnValue(["17:00", "18:00"])
  const mockSubmitForm = jest.fn();
  render(<BookingPage bookings={0} submitForm={mockSubmitForm} callReducer={() => {}} />);

  fireEvent.click(screen.getByRole("button", { name: "Make Your reservation" }));

  expect(mockSubmitForm).not.toHaveBeenCalled();
  expect(screen.getByText("Please select a date!")).toBeInTheDocument();
  expect(screen.getByText("Please select a time!")).toBeInTheDocument();
  expect(screen.getByText("Enter at least 1 guest!")).toBeInTheDocument();
  expect(screen.getByText("Please select an occasion!")).toBeInTheDocument();
})

test('Submit Form with valid fields calls submitForm', () => {
  window.fetchAPI = jest.fn().mockReturnValue(["17:00", "18:00"])
  const mockSubmitForm = jest.fn();
  render(<BookingPage bookings={0} submitForm={mockSubmitForm} time="17:00" callReducer={() => {}} />);

  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2026-09-19" } });
  fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: "Birthday" } });
  fireEvent.click(screen.getByRole("button", { name: "Make Your reservation" }));

  expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2026-09-19",
    time: "17:00",
    numberOfGuests: "4",
    occasion: "Birthday"
  });
})