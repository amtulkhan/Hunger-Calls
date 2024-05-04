import { CDN_URL } from "../Utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCards;
