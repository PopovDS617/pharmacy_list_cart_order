import React from "react";
import Header from "./components/Layout/Header";
import Drugs from "./components/Drugs/Drugs";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Drugs />
      </main>
    </React.Fragment>
  );
}

export default App;
