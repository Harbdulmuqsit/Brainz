import React from "react";
import Styles from './Styles/SpinToWin.module.css';
import {useRef} from 'react';

const SpinToWin = () => {

    // const spin = document.querySelector(Styles.circle);
    const spin = useRef();
    
    
    const startRotation = () => {    

    // spin.current.classList.toggle(Styles.startRotate);
    
    setTimeout(() => {
      
        spin.current.classList.toggle(Styles.startRotate);

    }, Math.floor(Math.random() * 1000) + 1);
  };

  return (
    <div className={Styles.spinBall}>
      <div className={Styles.arrow}></div>
          
          <ul ref={spin} className={Styles.circle}>
            <li>
              <div className={Styles.text}>
                50pts
              </div>
            </li>

            <li>
              <div  className={Styles.text}>
                250pts
              </div>
            </li>

            <li>
              <div className={Styles.text}>
                Empty
              </div>
            </li>

            <li>
              <div  className={Styles.text}>
                100pts
              </div>
            </li>

            <li>
              <div  className={Styles.text}>
                Empty
              </div>
            </li>

            <li>
              <div  className={Styles.text}>
                25pts
              </div>
            </li>

            <li>
              <div className={Styles.text}>
                Empty
              </div>
            </li>

            <li>
              <div className={Styles.text}>
                5pts
              </div>
            </li>

            <li>
              <div className={Styles.text}>
                Empty
              </div>
            </li>

            <li>
              <div className={Styles.text}>
                0pts
              </div>
            </li>

            <li>
              <div className={Styles.text}>
                Empty
              </div>
            </li>

            <li>
              <div className={Styles.text}>
                Empty
              </div>
            </li>
          </ul>

          <button className={Styles.spinButton} onClick={startRotation}>
              Spin
          </button>
    </div>
  );
};

export default SpinToWin;
