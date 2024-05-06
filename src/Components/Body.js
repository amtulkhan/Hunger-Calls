import RestaurantCards from "./RestaurantCard";
import restaurants from "../Utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurants);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            console.log("click");
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCards key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
