import React, { useState } from "react";
import "./Sidebar.css";
import Dashboard from "../Dashboard";
import Reports from "../Reports";
import Accounts from "../Accounts";
import Advisor from "../Advisor";
import Contacts from "../Contacts";
import Payroll from "../Payroll";
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <Dashboard />
        <Accounts />
        <Payroll />
        <Reports />
        <Advisor />
        <Contacts />
      </div>
    </div>
  );
};

export default Sidebar;
