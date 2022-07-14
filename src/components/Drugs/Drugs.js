import React from "react";

import DrugsSummary from "./DrugsSummary";
import AvailableDrugs from "./AvailableDrugs";

const Drugs = () => {
  return (
    <React.Fragment>
      <DrugsSummary />
      <AvailableDrugs />
    </React.Fragment>
  );
};

export default Drugs;
