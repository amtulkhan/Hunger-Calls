import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=611808&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]);
    setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info);
  };
  if (restaurantMenu === null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>{restaurantMenu.name}</h1>
      <h3>{restaurantMenu.cuisines.join(", ")}</h3>
      <h3>{restaurantMenu.costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
