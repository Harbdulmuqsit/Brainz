import React from "react";
import "./Dashboard.css";
import Dashboardheader from "./Dashboardheader";
// import Sidemenu from "./Sidemenu";
const Dashboard = () => {
  return (
    <>
      <Dashboardheader />
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <p>Dashboard</p>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
              </li>
              <li>
                <p className="active">Home</p>
              </li>
            </ul>
          </div>
        </div>

        <ul className="box-info">
          <li>
            <p>Total Earnings</p>
            <p className="numbers">#203,978</p>
          </li>
          <li>
            <p>Total Points</p>
            <p className="numbers">
              2000 <sub>SQP</sub>
            </p>
          </li>
        </ul>

        <div className="large-box">
          <p>Referral Earnings</p>
          <p className="numbers">#12,000</p>
        </div>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Earning History</h3>
              <i className="bx bx-search"></i>
              <i className="bx bx-filter"></i>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Total Answered</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>What is UI/UX Design</p>
                  </td>
                  <td>15</td>
                  <td>
                    <span className="status completed">20pts</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Principles of Design</p>
                  </td>
                  <td>15</td>
                  <td>
                    <span className="status pending">10pts</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Interaction Design</p>
                  </td>
                  <td>15</td>
                  <td>
                    <span className="status process">20pts</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>User Research</p>
                  </td>
                  <td>15</td>
                  <td>
                    <span className="status pending">50pts</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Prototype</p>
                  </td>
                  <td>15</td>
                  <td>
                    <span className="status completed">40pts</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>Data Analysis</p>
                  </td>
                  <td>15</td>
                  <td>
                    <span className="status completed">50pts</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
