import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = resList.filter((res) =>
                res.info.name.includes(search)
              );
              setResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
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
