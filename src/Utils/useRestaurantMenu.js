import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setRestaurantMenu(json.data);
  };
  return restaurantMenu;
};

export default useRestaurantMenu;
