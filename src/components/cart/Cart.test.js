import { render } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart", () => {
  test("total amount", () => {
    render(<Cart />);
    const buttonElement = screen.getByText(/Total Amount/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
