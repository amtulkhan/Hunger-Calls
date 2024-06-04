import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import Mock from "../mocks/resListMock.json";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(Mock),
  });
});
test("Should render body component with search button", () => {
  render(<Body />);
  const search = screen.getByRole("button", { name: "Search" });
  expect(search).toBeInTheDocument;
});
