import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
const Payroll = () => {
  const togglepage = () => {
    window.location.reload();
  };

  return (
    <div style={{ color: "white" }}>
      <h5 id="payroll" onClick={togglepage}>
        <div style={{ marginLeft: "-25px", marginRight: "19px" }}>
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        Payroll
      </h5>
    </div>
  );
};

export default Payroll;
