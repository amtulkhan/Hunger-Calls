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
    <div className="res-card m-4 p-4 w-[200] bg-gray-50 hover:bg-gray-200 rounded-lg">
      <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export const PromotedRestaurantCard = (RestaurantCards) => {
  return (props) => {
    console.log(props, "props");
    return (
      <div>
        <label className="absolute bg-black text-white">Promoted</label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
