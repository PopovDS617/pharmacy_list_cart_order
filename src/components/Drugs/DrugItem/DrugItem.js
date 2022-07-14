import React from "react";
import DrugItemForm from "./DrugItemForm";

import styles from "./DrugItem.module.css";

const DrugItem = (props) => {
  const priceFormatted = `${props.itemPrice} руб.`;

  return (
    <li className={styles.drug}>
      <h3>{props.itemName}</h3>
      <div className={styles.description}>{props.itemDescription}</div>
      <div className={styles.price}>{priceFormatted}</div>
      <div>
        <DrugItemForm />
      </div>
    </li>
  );
};

export default DrugItem;
