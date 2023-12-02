import React from 'react'
import {useState, useRef} from 'react';
import Styles from './Styles/DashboardContent.module.css';
import {tasks} from '../../data/db';
import Bell from '../../img/bell.png';
import srch from '../../img/search.png';
import profileLogo from '../../img/profilelogo.png';


const DashboardContent = () => {
  const [searching, setSearching] = useState(true);
  const user = useRef('Jays');

  const Submit = (e) => {
    e.target.value === '' ? setSearching(true) : setSearching(false);
  }

  
  return (
        <>
          <nav className={Styles.DashboardContent}>
                  <div className={Styles.input}>
                      <h1>Dashboard</h1>
                    <div>
                        <input 
                        type = 'search'
                        name='search'
                        onChange={Submit}
                        />

                        {searching && <img src={srch} alt='search'  />}
                    </div>
                    
                        <img src={Bell} alt='Bell'  />
                        <img src={profileLogo} alt='Profile Logo'  />
                  </div>
              </nav>

          <h2 className={Styles.user}>Welcome, {user.current}</h2>


          <section className={Styles.Earnings}>
              <div>
                <p>Total Earnings</p>
                <h2>#203,978</h2>
              </div>

              <div>
                <p>Total Points</p>
                <h2>2000<sub>SQP</sub></h2>
              </div>

              <div>
                <p>Referrals Earnings</p>
                <h2>#12,000</h2>
              </div>
          </section>


          <h2 className={Styles.user}>Earnings History</h2>

          <section className={Styles.EarningHistory}>
                <div>
                  <h2>Task</h2>
                </div>

                <div>
                  <h2>Total Answered</h2>
                </div>


                <div>
                  <h2>Points</h2>
                </div>
          </section>

          {tasks.map((task) => (
            <section  key={task.task} className={Styles.tasks}>
                <div>
                    <span>{task._id}</span>
                    <span>{task.task}</span>
                </div>

                <div>
                    <span>{task.answered}</span>
                </div>


                <div>
                    <span>{task.points}pts</span>
                </div>
          </section>

          ))}
      </>
  )
}

export default DashboardContent
