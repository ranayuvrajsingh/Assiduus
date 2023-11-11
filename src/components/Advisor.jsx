import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Advisor = () => {
  const togglepage = () => {
    window.location.reload();
  };

  return (
    <div style={{ color: "white" }}>
      <h5 id="advisor" onClick={togglepage}>
        <div style={{ marginLeft: "-20px", marginRight: "24px" }}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        Advisor
      </h5>
    </div>
  );
};

export default Advisor;
