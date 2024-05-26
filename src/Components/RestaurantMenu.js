import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfoHook = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
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
    <div className="text-center justify-center">
      {name && <h1 className="font-bold my-6 text-2xl">{name}</h1>}
      {cuisines && (
        <p className="font-bold text-lg">
          {cuisines.join(", ")}-{costForTwoMessage}
        </p>
      )}
      {categories.map((item, index) => {
        return (
          <RestaurantCategory
            data={item?.card?.card}
            key={item?.card?.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
