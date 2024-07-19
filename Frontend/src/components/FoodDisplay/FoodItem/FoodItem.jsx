import React, { useContext } from "react";
import "./FoodItem.css"
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

export default function FoodItem({foodItems}) {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="food-item">
     <div className="food-item-img-container">
      <img src={foodItems.image} className="food-item-image"  />
      {
        !cartItems[foodItems._id] ? <img className="add" onClick={() => addToCart(foodItems._id)} src={assets.add_icon_white} /> 
        : <div className="food-item-counter">
            <img onClick={()=> removeFromCart(foodItems._id)} src={assets.remove_icon_red} />
            <p>{cartItems[foodItems._id]}</p>
            <img onClick={()=> addToCart(foodItems._id)} src={assets.add_icon_green} />
          </div>
      }
     </div>
     <div className="food-item-info">
      <div className="food-item-name-rating">
        <p>{foodItems.name}</p>
        <img src={assets.rating_starts}  />
      </div>
      <p className="food-item-desc">{foodItems.description}</p>
      <p className="food-item-price">${foodItems.price}</p>
     </div>
    </div>
  )
}