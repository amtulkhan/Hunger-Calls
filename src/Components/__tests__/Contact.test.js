import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  afterAll(() => {
    console.log("After All");
  });
  afterEach(() => {
    console.log("After Each");
  });
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  //Test can also be written as it
  it("Should load one heading", () => {
    render(<Contact />);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBe(1);
  });
});
