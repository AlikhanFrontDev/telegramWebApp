import { useState,useEffect } from "react";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
const { getData } = require("./db/db")
const foods = getData()

const teleg = window.Telegram.WebApp

function App() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    teleg.ready()
  })

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }])
    }
  }

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id)
    if(exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    }else{
      setCartItems(
        cartItems.map((x) => 
          x.id === food.id ? {...exist, quantity: exist.quantity -1 } : x
        )
      );
    }
  }

  const onCheckout = () => {
    teleg.MainButton.text = "Pay";
    teleg.MainButton.show();
  }


  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="container">
        {foods.map(food => {
          return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
        })}
      </div>
    </>
  );
}

export default App;
