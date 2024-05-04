import RestaurantCards from "./RestaurantCard";
import restaurants from "../Utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button onClick={() => console.log("click")}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCards key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
