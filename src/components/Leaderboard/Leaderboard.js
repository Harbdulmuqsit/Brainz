import React from 'react';
import Styles from '../Leaderboard/Styles/Leaderboard.module.css';
import {tasks} from '../../data/db';

const Leaderboard = () => {
    return (
        <div className={Styles.Leaderboard}>
            <div className={Styles.board}>
                <h1>Leaderboard</h1>
                <p>View The Leaderboard History.</p>
            </div>

            <div className={Styles.LeaderboardContent}>
                <h3>Name</h3>
                <h3>Total Answered</h3>
                <h3>Reward</h3>          
            </div>


            {tasks ?
                tasks.map((task => {
                     return <React.Fragment key={task._id}>
                        <div className={Styles.LeaderboardContent1}>
                           
                            <div>
                                <span>{task._id}</span>
                                <span>{task.task}</span>
                            </div>

                            <div>
                                 <span>{task.answered}</span>
                            </div>
                            
                            <div>
                                 <span>{task.points}</span>
                            </div>
                        </div>
                    </React.Fragment>
                }))
                : null
            }
        </div>
    )
}

export default Leaderboard
