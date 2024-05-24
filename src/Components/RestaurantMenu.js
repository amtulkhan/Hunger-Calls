import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfoHook = useRestaurantMenu(resId);

  const resInfo = resInfoHook?.cards[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage } = resInfo;
  const menuItems =
    resInfoHook?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card?.itemCards;
  const itemCards = menuItems || [];

  const categories =
    resInfoHook?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  if (resInfoHook === null) {
    return <Shimmer />;
  }
  return (
    <div className="text-center">
      {name && <h1 className="font-bold my-6 text-2xl">{name}</h1>}
      {cuisines && (
        <p className="font-bold text-lg">
          {cuisines.join(", ")}-{costForTwoMessage}
        </p>
      )}
      {categories.map((item) => {
        return <RestaurantCategory />;
      })}
    </div>
  );
};

export default RestaurantMenu;
