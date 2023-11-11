import React, { useState, useEffect } from "react";
import "../Styles/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import BarChart from "./BarChart/BarChart";
import Sidebar from "./Sidebar/Sidebar";
import LinesChart from "./LinesChart/LinesChart";

const Home = () => {
  const [hasNewNotifications, setHasNewNotifications] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDropdown = () => {
    console.log("Dropdown toggled");
    if (hasNewNotifications) {
      setHasNewNotifications(false);
    } else {
      setHasNewNotifications(true);
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log("Effect is running");
    setHasNewNotifications(true);
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src="/assests/Assiduus.png"
            alt="Assiduus.png"
            width={258}
            height={150}
            onClick={handleToggleSidebar}
          />
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="right-nav">
          <div className="searchbar">
            <FontAwesomeIcon height={15} width={15} icon={faSearch} />
            <input style={{ marginLeft: "1vw" }} type="text" />
          </div>
          <div className="bell" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBell} />
            {hasNewNotifications && <div className="green-dot"></div>}
          </div>
        </div>

        <div className="profile-container">
          <div className="profile">
            <img
              src="https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              alt=""
            />
            {hasNewNotifications && (
              <div className="dropdown-menu">
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="chart"></div>
        <div className="chart1">
          <BarChart />
        </div>
        <div className="chart2">
          <div class="card">
            <div class="card-body" id="card-body-1">
              <h5 class="card-title" id="card-title-1">
                Checking account
              </h5>
              <div class="dropdown-container">
                <select id="manageDropdown">
                  <option value="option1">Manage</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>

                <select id="januaryDropdown">
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>
            <LinesChart />
          </div>
        </div>
        <div className="chart3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title3</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="chart4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title4</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
