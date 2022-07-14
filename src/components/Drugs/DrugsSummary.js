import React from "react";

import styles from "./DrugsSummary.module.css";

const DrugsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Список препаратов, доступных для заказа</h2>
      <p>
        Обращаем Ваше внимание, что в списке отсутствуют препараты, которые
        отпускаются по рецепту лечащего врача
      </p>
      <p>
        Приобрести рецептурные препараты вы можете в нашей аптеке, расположенной
        по адресу: село Красное, улица Синяя, д. 66
      </p>
    </section>
  );
};

export default DrugsSummary;
