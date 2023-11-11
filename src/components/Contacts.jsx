import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
const Contacts = () => {
  const togglepage = () => {
    window.location.reload();
  };

  return (
    <div style={{ color: "white" }}>
      <h5 id="contacts" onClick={togglepage}>
        <div style={{ marginLeft: "-9px", marginRight: "20px" }}>
          <FontAwesomeIcon icon={faAddressBook} />
        </div>
        Contacts
      </h5>
    </div>
  );
};

export default Contacts;
