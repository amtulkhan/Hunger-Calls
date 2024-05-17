import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
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

    setFilteredList(
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
              const filterList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              console.log("click");
              const filterList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setResList(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              <RestaurantCards resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
