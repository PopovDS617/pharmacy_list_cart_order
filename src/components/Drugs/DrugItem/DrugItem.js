import React, { useContext } from "react";
import DrugItemForm from "./DrugItemForm";
import CartContext from "../../../store/cart-context";

import styles from "./DrugItem.module.css";

const DrugItem = (props) => {
  const cartCtx = useContext(CartContext);

  const priceFormatted = `${props.itemPrice} руб.`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.itemName,
      amount: amount,
      price: props.itemPrice,
    });
  };

  return (
    <li className={styles.drug}>
      <h3>{props.itemName}</h3>
      <div className={styles.description}>{props.itemDescription}</div>
      <div className={styles.price}>{priceFormatted}</div>
      <div>
        <DrugItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default DrugItem;
