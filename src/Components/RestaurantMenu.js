import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setRestaurantMenu(json.data);
  };

  const resInfo = restaurantMenu?.cards[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage } = resInfo;
  const menuItems =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card?.itemCards;
  const itemCards = menuItems || [];

  if (restaurantMenu === null) {
    return <Shimmer />;
  }
  return (
    <div>
      {name && <h1>{name}</h1>}
      {cuisines && <h3>{cuisines.join(", ")}</h3>}
      {costForTwoMessage && <h3>{costForTwoMessage}</h3>}
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
