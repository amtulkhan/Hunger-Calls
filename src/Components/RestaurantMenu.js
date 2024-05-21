import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfoHook = useRestaurantMenu(resId);

  const resInfo = resInfoHook?.cards[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage } = resInfo;
  const menuItems =
    resInfoHook?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card?.itemCards;
  const itemCards = menuItems || [];

  if (resInfoHook === null) {
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
