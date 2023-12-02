import React from "react";
import "./Dashboard.css";
import Dashboardheader from "./Dashboardheader";
const Referral = () => {
  return (
    <>
      <Dashboardheader />
      <div className="referral">
        <h1>Referrals History</h1>
        <p>Manage your friends transactions with ease</p>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Total Answered</th>
                <th>Reward</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <ol className="list">
                    <li>Samuel David</li>
                    <li>Adebayo Adeniyi</li>
                    <li>Chioma Chibuzor</li>
                    <li>Bello Dammy</li>
                    <li>Amari Chima</li>
                    <li>Diallo Aadan</li>
                  </ol>
                </td>

                <td>
                  <ol>
                    <li>15</li>
                    <li>15</li>
                    <li>15</li>
                    <li>15</li>
                    <li>15</li>
                    <li>15</li>
                  </ol>
                </td>

                <td>
                  <ol>
                    <li>#2000</li>
                    <li>#2000</li>
                    <li>#2000</li>
                    <li>#2000</li>
                    <li>#2000</li>
                    <li>#2000</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Referral;
