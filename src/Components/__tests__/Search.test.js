import { fireEvent, render, screen, act } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import Mock from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(Mock),
  });
});
test("Should render body component with search button", async () => {
  //act is used when fetch is involved

  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const search = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId(search);

  fireEvent.change(searchInput, { target: { value: "burger" } });
});
