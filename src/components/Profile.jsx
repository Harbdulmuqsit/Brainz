import React from "react";
import "./Dashboard.css";
import picture from "../../src/img/image.jpg";
import Dashboardheader from "./Dashboardheader";
const Profile = () => {
  return (
    <>
      <Dashboardheader />
      <div className="display-profile">
        <div className="display-pics-holder"></div>

        <div className="display-profile-pics">
          <img src={picture} alt="Display pics" className="display-pics" />
          <div className="display-content">
            <h2>Profile</h2>
            <p>Upload your photos and personal details</p>
          </div>

          <div className="display-btn">
            {/* <button className="btn1">Cancel</button> */}
            <button className="btn2">Save</button>
          </div>
        </div>

        <div className="Full-names">
          <div className="names">
            <div className="first-name">
              <h2>First Name</h2>
              <input type={"text"} />
            </div>

            <div className="last-name">
              <h2>Last Name</h2>
              <input type={"text"} />
            </div>
          </div>
          <div className="email">
            <h2>Email</h2>
            <input type={"text"} />
          </div>

          <div className="contact-number">
            <h2>Contact Number</h2>
            <input type={"text"} />
          </div>

          <div className="address">
            <h2>Address</h2>
            <input type={"text"} />
          </div>

          <div className="place">
            <div className="city">
              <h2>City</h2>
              <input type={"text"} />
            </div>
            <div className="state">
              <h2>State</h2>
              <input type={"text"} />
            </div>
          </div>

          <div className="country">
            <h2>Country</h2>
            <input type={"text"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
