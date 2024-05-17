import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
    console.log("amtul");
  }, [restaurantMenu]);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=611808&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json, "json");
    console.log(
      json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setRestaurantMenu(json.data);
  };
  console.log(restaurantMenu);
  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card?.itemCards;

  if (restaurantMenu === null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
