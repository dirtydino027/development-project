import "./App.css";
import { useState } from "react";
import bakeryData from "./data/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [cartPrice, setcartPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("");
  const [displayData, setDisplayData] = useState(bakeryData);
  const [unsorted, setUnsorted] = useState([]);

  function addToCart(item) {

    const newCartItems = [...cartItems, item.name+", "];
    setCartItems(newCartItems)

    setcartPrice(cartPrice + item.price)
    
  }

  function removeFromCart(item) {

    const newCartItems = [...cartItems]
    if (cartItems.indexOf(item.name+", ") != -1) {
      newCartItems.splice(cartItems.indexOf(item.name+", "),1)
      setCartItems(newCartItems)
      setcartPrice(cartPrice - item.price)
    }
    
  }

  function updateFilter(value, id) {

    let newFilters = [];

    if (document.getElementById(id).checked==true) {
      console.log("checked");

      const filtersAdd = [...filters, value];
      
      newFilters = filtersAdd;
    } else {
      console.log("UNchecked");
      let filtersRemove = [...filters];
      const ind = filtersRemove.indexOf(value);
      filtersRemove.splice(ind, 1);
      newFilters = filtersRemove;
    }

    setFilters(newFilters);
    
    if (newFilters.length == 0) {

      console.log("filling filters");

      setUnsorted(bakeryData);

      if (document.getElementById("priceSort").checked==true) {
        setDisplayData([...bakeryData].sort(function(a,b){return a.price - b.price}));
      } else {
        setDisplayData(bakeryData);
      }

    } else {
      if (document.getElementById("priceSort").checked==true) {
        const filteredData = bakeryData.filter(floof => newFilters.includes(floof.color));
        setDisplayData(filteredData.sort(function(a,b){return a.price - b.price}));
      } else {
        setDisplayData(bakeryData.filter(floof => newFilters.includes(floof.color)));
      }
    }

  }

  function updateSort(id) {
    
    if (document.getElementById(id).checked==true) {
      console.log("sorting");
      setUnsorted(displayData);
      setSort(id);
      setDisplayData([...displayData].sort(function(a,b){return a.price - b.price}));
    } else {
      setDisplayData(unsorted);
    }
    
  }

  function revert() {
    console.log("reverting");
    setDisplayData(bakeryData);
    document.getElementById("brownFilter").checked = false;
    document.getElementById("greenFilter").checked = false;
    document.getElementById("yellowFilter").checked = false;
    document.getElementById("purpleFilter").checked = false;
    document.getElementById("rainbowFilter").checked = false;
    document.getElementById("priceSort").checked = false;
    setFilters([]);
    setSort("");
  }

  return (
    <div className="App">
      <h1>bakeryyyyy</h1> {/* TODO: personalize your bakery (if you want) */}

      <div id="options">
        <div id="colorFiltering">
          <b>filter by color:</b>
          <form>
            <input type="checkbox" onChange={() => updateFilter("brown", "brownFilter")} id="brownFilter" value="brown"></input>
            <label for="brownFilter">brown</label><br></br>
            <input type="checkbox" onChange={() => updateFilter("green", "greenFilter")} id="greenFilter" value="green"></input>
            <label for="greenFilter">green</label><br></br>
            <input type="checkbox" onChange={() => updateFilter("yellow", "yellowFilter")} id="yellowFilter" value="yellow"></input>
            <label for="yellowFilter">yellow</label><br></br>
            <input type="checkbox" onChange={() => updateFilter("purple", "purpleFilter")} id="purpleFilter" value="purple"></input>
            <label for="purpleFilter">purple</label><br></br>
            <input type="checkbox" onChange={() => updateFilter("rainbow", "rainbowFilter")} id="rainbowFilter" value="rainbow"></input>
            <label for="rainbowFilter">rainbow</label><br></br>
          </form>
        </div>
        
        <div id="sorting">
          <b>sort by:</b>
          <form>
            <input type="checkbox" onChange={() => updateSort("priceSort")} id="priceSort" value="price"></input>
            <label for="priceSort">price</label><br></br>
          </form>
        </div>
        <button id="revertButton" onClick={revert} >revert back 2 original state</button>
      </div>
 
      <div id="bakeryList">
        {displayData.map((item, index) => (

          <BakeryItem item={item} key={index} addCartItem={addToCart} removeCartItem={removeFromCart}/>

        ))}
      </div>
      
      <div>
        <h2>Cart</h2>

        <p><b>items in cart:</b></p>{cartItems}

        <p><b>total price:</b></p>${cartPrice}
      </div>
    </div>
  );
}

export default App;
