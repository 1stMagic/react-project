test("updateTimes loads available times for selected date", () => {
  const initialTimes = ["17:00", "18:00"];
  const updatedTimes = ["20:00", "21:00"];

  window.fetchAPI = vi
    .fn()
    .mockReturnValueOnce(initialTimes)
    .mockReturnValueOnce(updatedTimes);

  render(
    <Main
      bookings={0}
      submitForm={vi.fn()}
      time=""
      callReducer={vi.fn()}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");

  dateInput.onchange = undefined;

  // Datum auswählen
  fireEvent.change(dateInput, {
    target: { value: "2026-09-15" }
  });

  expect(window.fetchAPI).toHaveBeenLastCalledWith(
    new Date("2026-09-15")
  );

  expect(screen.getByText("20:00")).toBeInTheDocument();
  expect(screen.getByText("21:00")).toBeInTheDocument();
});