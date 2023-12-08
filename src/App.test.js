import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Meal Item", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Chicken Kothu Parotta/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Fried-Noodles/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Sushi/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Finest fish and veggies/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/A Chinese specialty!/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Chettinad spicy/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Green Bowl/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Healthy...and green.../i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/22.99/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/12.99/i);
    expect(linkElement).toBeInTheDocument();
  });
});
