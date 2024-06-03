import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center items-center mx-auto my-4 p-4 w-6/12">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Your Cart</h1>
        <button
          className="bg-black text-white rounded-md p-2"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
      </div>
      {items.length === 0 ? (
        <div className="p-4 items-center m-10">
          <h1 className="text-2xl">Oops, your cart is empty</h1>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};
export default Cart;
