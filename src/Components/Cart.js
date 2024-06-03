import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  return (
    <div className="text-center items-center mx-auto my-4 p-4 w-6/12">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Your Cart</h1>
        <button
          className="bg-black text-white rounded-md p-2"
          onClick={() => {
            handleClick();
          }}
        >
          Clear Cart
        </button>
      </div>
      <ItemList items={items} />
    </div>
  );
};
export default Cart;
