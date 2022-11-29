import "./BakeryItem.css";
import addItem from "../App.js"
import setCartItems from "../App.js"
import cartItems from "../App.js"
export default function BakeryItem(props) {
  const item = props.item;
  return(
    <div id="bakeryItemContainer">
      <div class="field" id="itemName">{item.name}</div>
      <div class="field">{item.description}</div>
      <div class="field">color: {item.color}</div>
      <div class="field">type: {item.type}</div>
      <img class="field" src={item.image}></img>
      <div class="field">${item.price}</div>
      <div class="field" id="buttonDiv"> 
        <button class="addRemoveButtons" onClick={() => props.addCartItem(item)}>add2cart</button>
        <button class="addRemoveButtons" onClick={() => props.removeCartItem(item)}>remove!!</button>
      </div>
    </div>
  );
}
