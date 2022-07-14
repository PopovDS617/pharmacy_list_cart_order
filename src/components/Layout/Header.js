import React from "react";

import HeaderCartButton from "../UI/HeaderCartButton";

import styles from "./Header.module.css";

import pharmaImage from "../../assets/pharmacy_header.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Сельская Аптека №1</h1>
        <HeaderCartButton>Корзина</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={pharmaImage} alt="picture of pharmacy shelfs" />
      </div>
    </React.Fragment>
  );
};

export default Header;
