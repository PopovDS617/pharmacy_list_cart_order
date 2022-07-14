import React from "react";

import Input from "../../UI/Input";

import styles from "./DrugItemForm.module.css";

const DrugItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Количество"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
    </form>
  );
};

export default DrugItemForm;
