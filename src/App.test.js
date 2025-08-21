import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider } from "./components/context/CartContext";
import { BrowserRouter as Router } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header"

const mockItems = [
  { id: 1, title: "Lamp 1", price: "24.90", image: "/img/bubbleGum.png" },
  { id: 2, title: "Lamp 2", price: "19.90", image: "/img/bubbleGum.png" },
];

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockItems),
    })
  );
});

test('click "Add to cart" updates counter', async () => {
  render(
    <CartProvider>
      <Router>
        <Header />
        <ShopPage />
      </Router>
    </CartProvider>
  );

  const addButtons = await screen.findAllByRole("button", {
    name: /add to cart/i,
  });

  fireEvent.click(addButtons[1]);

  expect(await screen.findByText("1")).toBeInTheDocument();
});
