import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartPrice, setcartPrice] = useState(0);
  const [cartItems, setCartItems] = useState(new Array(0));
  function updateCart(item) {

    console.log(cartItems);
    setCartItems(cartItems.concat([item.name+", "]));

    setcartPrice(cartPrice + item.price)

  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

          <BakeryItem item={item} setCartItems={updateCart}/> // replace with BakeryItem component

      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}

        <p><b>items in cart:</b></p>{cartItems}
        <p><b>total price:</b></p>{cartPrice}
      </div>
    </div>
  );
}

export default App;
