import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import appStore from "../../Utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_Data),
  })
);
test("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const accordianHeaading = screen.getByText("Biryani(5)");
  fireEvent.click(accordianHeaading);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  const addBtn = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();
});

//this test case is an example of an Integration Test case involving many components like Restaurant Menu and Cart
//its failing rn because am not using a real mock data coz I was bored of writing test cases.
