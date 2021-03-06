import React from "react";

import DrugItem from "./DrugItem/DrugItem";
import Card from "../UI/Card";

import styles from "./AvailableDrugs.module.css";

//надо добавить больше айтемов для создания фильтра по категориям, через селектор
const DUMMY_DRUGS = [
  {
    id: "d1",
    name: "Аспирин, 10 таб.",
    description: "Таблетки от головной боли",
    price: 45.0,
  },
  {
    id: "d2",
    name: "Кетанов, 12 таб.",
    description: "Таблетки от зубной боли",
    price: 40.0,
  },
  {
    id: "d3",
    name: "Лизоприм ЛОР, 20 таб.",
    description: "Таблетки от боли в горле",
    price: 22.0,
  },
  {
    id: "d4",
    name: "Ибупрофен, 10 таб.",
    description: "Таблетки от боли в спине",
    price: 60.0,
  },
  {
    id: "d5",
    name: "Доппельгерц, 30 таб.",
    description: "Таблетки для укрепления сердца и сосудов",
    price: 120.0,
  },
  {
    id: "d6",
    name: "Дилтиазем, 20 таб.",
    description: "Таблетки для понижения давления",
    price: 80.0,
  },
];

const AvailableDrugs = () => {
  const drugsList = DUMMY_DRUGS.map((x) => (
    <DrugItem
      id={x.id}
      key={x.id}
      itemName={x.name}
      itemDescription={x.description}
      itemPrice={x.price}
    />
  ));

  return (
    <section className={styles.drugs}>
      <Card>
        <ul>{drugsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDrugs;
