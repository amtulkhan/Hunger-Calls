import { fireEvent, render, screen, act } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import Mock from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock);
    },
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

  const searchInput = screen.getByTestId("Search");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(search);

  const resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(3);
});

test("Should filter top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(12);
});
