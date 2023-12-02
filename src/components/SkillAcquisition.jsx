import React from "react";
import Dashboardheader from "./Dashboardheader";
import data from "../components/SkillAcquisitionProps";
const SkillAcquisition = () => {
  return (
    <>
      <Dashboardheader />

      <div className="explore">
        <div className="course">
          <h2>Explore Your pefered Course</h2>
          <p>Choose your favorite Course and be the best in your niche.</p>
        </div>

        <select>
          <option>Categories</option>
        </select>
      </div>
      <div className="tech-mechanics">
        <div className="seeAll">
          <h2>Tech & Mechanics</h2>
          <h2>See All...</h2>
        </div>

        <div className="advanced">
          {data.map((data, index) => (
            <div key={index}>
              <img src={data.image} alt="Data images" />
              <p className="content">{data.content}</p>
              <p className="content1">{data.content1}</p>
              <p className="amount">{data.amount}</p>
              <div className="btn">
                <button>{data.btn}</button>
                <button>{data.btn1}</button>
              </div>
            </div>
          ))}
        </div>

        <div className=""></div>
      </div>
    </>
  );
};

export default SkillAcquisition;
