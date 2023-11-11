import React from "react";
import "../../Styles/global.css";
const AccountWatchlist = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body" id="card-body-1">
          <h5 className="card-title" id="card-title-1">
            Account watchlist
          </h5>
        </div>
        <hr />
        <br />
        <br />
        <br />

        <table
          style={{
            marginTop: "-80px",
            marginBottom: "80vh",
          }}
        >
          <tr>
            <td>
              <h6 style={{ marginLeft: "55px" }}>Account</h6>
            </td>
            <td>
              <h6 style={{ marginLeft: "60px" }}>This Month</h6>
            </td>
            <td>
              <h6 style={{ marginLeft: "75px" }}>YTD</h6>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Sales</h5>
            </td>
            <td>
              <h5>1,1194.58</h5>
            </td>
            <td>
              <h5>11,418.29</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Advertising</h5>
            </td>
            <td>
              <h5>6,879.02</h5>
            </td>
            <td>
              <h5>9,271.36</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Inventory</h5>
            </td>
            <td>
              <h5>4,692.26</h5>
            </td>
            <td>
              <h5>9,768.09</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Entertainment</h5>
            </td>
            <td>
              <h5>0.00</h5>
            </td>
            <td>
              <h5>0.00</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Product</h5>
            </td>
            <td>
              <h5>4,652.10</h5>
            </td>
            <td>
              <h5>2,529.90</h5>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AccountWatchlist;
