import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

// Picking a date should call fetchAPI again and replace the times shown
test("updateTimes loads available times for selected date", () => {
  const initialTimes = ["17:00", "18:00"];
  const updatedTimes = ["20:00", "21:00"];

  window.fetchAPI = jest
    .fn()
    .mockReturnValueOnce(initialTimes)
    .mockReturnValueOnce(updatedTimes);

  render(
    <BookingPage
      bookings={0}
      submitForm={jest.fn()}
      time=""
      callReducer={jest.fn()}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");

  fireEvent.change(dateInput, {
    target: { value: "2026-09-15" }
  });

  expect(window.fetchAPI).toHaveBeenLastCalledWith(
    new Date("2026-09-15")
  );

  expect(screen.getByText("20:00")).toBeInTheDocument();
  expect(screen.getByText("21:00")).toBeInTheDocument();
});
