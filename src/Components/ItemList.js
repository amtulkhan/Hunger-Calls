import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items[0].card.info.name, "item");
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            data-testid="foodItems"
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-22">
                <span>{item.card.info.name}</span>
                <span>
                  -
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-1 bg-black text-white shadow-lg rounded-md"
                  onClick={() => handleAddItems(item)}
                >
                  Add+
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-sm"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
