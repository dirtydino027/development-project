// TODO: create a component that displays a single bakery item
import addItem from "../App.js"
import setCartItems from "../App.js"
import cartItems from "../App.js"
export default function BakeryItem(props) {
  const item = props.item;
  return(
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img src={item.image}></img>
      <button onClick={() => props.setCartItems(item)}>add2cart</button>
    </div>
  );
}
