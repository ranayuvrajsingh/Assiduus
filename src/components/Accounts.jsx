import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
const Accounts = () => {
  const togglepage = () => {
    window.location.reload();
  };

  return (
    <div style={{ color: "white" }}>
      <h5 id="accounts" onClick={togglepage}>
        <div style={{ marginLeft: "-10px", marginRight: "15px" }}>
          <FontAwesomeIcon icon={faWallet} />
        </div>
        Accounts
      </h5>
    </div>
  );
};

export default Accounts;
