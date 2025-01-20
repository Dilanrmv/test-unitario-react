import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

test("renders increment button", () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Incrementar/i);
  expect(buttonElement).toBeInTheDocument();
});

test("shows initial count value of 0", () => {
    render(<Counter />);
    const countText = screen.getByText(/Contador: 0/i);
    expect(countText).toBeInTheDocument();
  });

  test("increments count by 1 when button is clicked", () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i);
    const countText = screen.getByText(/Contador: 0/i);
  
    // Simula hacer clic
    fireEvent.click(buttonElement);
  
    // Comprueba que se ha incrementado 1
    expect(countText).toHaveTextContent('Contador: 1');
  });
  
  test("increments count multiple times", () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i);
  
    // Simula hacer clic 3 veces
    for (let i = 0; i < 3; i++) {
      fireEvent.click(buttonElement);
    }
  
    // Verifica que el contador haya aumentado a 3
    const countText = screen.getByText(/Contador: 3/i);
    expect(countText).toBeInTheDocument();
  });
