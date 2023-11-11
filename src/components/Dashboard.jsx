import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const togglepage = () => {
    window.location.reload();
  };

  return (
    <div style={{ color: "white" }}>
      <h5 id="dashboard" onClick={togglepage}>
        <div style={{ marginRight: "10px" }}>
          <FontAwesomeIcon icon={faHouseChimneyWindow} />
        </div>
        Dashboard
      </h5>
    </div>
  );
};

export default Dashboard;
