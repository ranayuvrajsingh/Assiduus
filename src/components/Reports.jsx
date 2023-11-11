import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
const Reports = () => {
  const togglepage = () => {
    window.location.reload();
  };

  return (
    <div style={{ color: "white" }}>
      <h5 id="reports" onClick={togglepage}>
        <div style={{ marginLeft: "-18px", marginRight: "20px" }}>
          <FontAwesomeIcon icon={faFileInvoice} />
        </div>
        Reports
      </h5>
    </div>
  );
};

export default Reports;
