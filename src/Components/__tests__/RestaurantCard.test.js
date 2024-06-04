import { render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCard";
import MOCK from "../mocks/resCardMoack.json";
import "@testing-library/jest-dom";

test("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCards resData={MOCK} />);
  const name = screen.getByText("MOJO Pizza - 2X Toppings");
  expect(name).toBeInTheDocument();
});
