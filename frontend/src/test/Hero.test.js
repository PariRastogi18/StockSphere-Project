import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

test("render hero image", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>,
  );

  const heroImg = screen.getByAltText("Hero img");
  expect(heroImg).toBeInTheDocument();
});
test("render hero image", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>,
  );

  const signupBtn = screen.getByRole("link", { name: /signup for free/i });
  expect(signupBtn).toBeInTheDocument();
  expect(signupBtn).toHaveAttribute("href", "/signup");
});
