import React from 'react';
import {tasks} from '../../data/db';
import Styles from '../Quiz/Styles/Quiz.module.css';
const Quiz = () => {
    return (
        <div className={Styles.quiz}>
                <div className={Styles.quizDiv}>
                    <div>
                        <h1>Play And Win Big Time.</h1>
                        <p>Test Your Knowledge With Quiz And Earn SQP Points.</p>
                    </div>

                    <h3>See All...</h3>
                        
                </div>


                <div>
                    { tasks ?
                       tasks.map((task => {
                         return <React.Fragment key={task._id}>
                                    <div className={Styles.quizContent}>
                                            <h3>{task.task}</h3>
                                            <button >More Info</button>
                                            <button >Play Now</button>
                                    </div>
                                </React.Fragment>
                       }))
                    : null }

                </div>            
        </div>
    )
}
export default Quiz
