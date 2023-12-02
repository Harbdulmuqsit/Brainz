import React from "react";
import "../components/Dashboard.css";
import Dashboardheader from "./Dashboardheader";

const Wheel = () => {
  const startRotation = () => {
    const spin = document.querySelector(".circle");
    spin.classList.add("start-rotate");
    setTimeout(() => {
      spin.classList.add("stop-rotate");
    }, Math.floor(Math.random() * 7000) + 1);
  };

  return (
    <>
      <Dashboardheader />
      <div className="arrow"></div>
      <ul className="circle">
        <li>
          <div className="text" contentEditable="true" spellCheck="true">
            50pts
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            250pts
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            Empty
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            100pts
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            Empty
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            25pts
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            Empty
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            5pts
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            Empty
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            0pts
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            Empty
          </div>
        </li>

        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            Empty
          </div>
        </li>
      </ul>
      <button className="spin-button" onClick={startRotation}>
        SPIN
      </button>
    </>
  );
};

export default Wheel;
