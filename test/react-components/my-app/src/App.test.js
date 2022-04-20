import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import { expect } from "chai";

describe("counter", () => {
  it("should initialize the counter as zero", () => {
    // Arrange
    render(<App />);

    // Act
    const currentValue = screen.getByTestId("counter").textContent;

    // Assert
    expect(currentValue).to.equal("0");
  });

  const testCases = [
    { input: { times: 1 }, expected: "1" },
    { input: { times: 2 }, expected: "2" },
    { input: { times: 3 }, expected: "3" },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should increase the counter every time the "increase" is pressed ${input.times} times`, () => {
      // Arrange
      render(<App />);

      // Act
      act(() => {
        const increaseCounterButton = screen.getByText("Increase !!");
        for (let i = 1; i <= input.times; i++) {
          increaseCounterButton.click();
        }
      });

      // Assert
      const currentValue = screen.getByTestId("counter").textContent;
      expect(currentValue).to.be.equal(expected);
    });
  });

  it("should reset the counter to zero when reset is pressed", () => {
    // Arrange
    render(<App />);

    // Act
    act(() => {
      const resetButton = screen.getByText("Reset");
      resetButton.click();
    });

    // Assert
    const currentValue = screen.getByTestId("counter").textContent;
    expect(currentValue).to.be.equal("0");
  });

  it("should set the value to 5 when fixed value is presset", () => {
    // Arrange
    render(<App />);

    // Act
    act(() => {
      const resetButton = screen.getByText("Five!");
      resetButton.click();
    });

    // Assert
    const currentValue = screen.getByTestId("counter").textContent;
    expect(currentValue).to.be.equal("5");
  })
});
