import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
export default Cart;
