import RestaurantCards from "./RestaurantCard";
import restaurants from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurants);
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
