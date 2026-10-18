import { render, screen } from "@testing-library/react";
import { vi, expect, test } from "vitest";
import Main from "./Main";

// On first render the times from fetchAPI(today) should appear in the page
test("initializeTimes loads available times", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];

  // Mock the global API so the test controls the returned times
  window.fetchAPI = vi.fn().mockReturnValue(mockTimes);

  render(
    <Main
      bookings={0}
      submitForm={vi.fn()}
      time=""
      callReducer={vi.fn()}
    />
  );

  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

  expect(screen.getByText("17:00")).toBeInTheDocument();
  expect(screen.getByText("18:00")).toBeInTheDocument();
  expect(screen.getByText("19:00")).toBeInTheDocument();
});