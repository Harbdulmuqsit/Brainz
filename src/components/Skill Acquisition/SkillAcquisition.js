import React from 'react'
import Styles from '../Skill Acquisition/Styles/SkillAcquisition.module.css';
import {course,  course1}from '../../data/db';


const SkillAcquisition = () => {
    return (

        <div className={Styles.SkillAcquisition}>
          
            <div className={Styles.category}>
                <div>
                    <h2>Explore Your Prefered Course</h2>
                    <p>Choose Your Favorite Course To Acquire, And Be The Best in Your Niche.</p>
                </div>

                <select>
                    <option>Category</option>
                </select>
            </div>


            <div className={Styles.tech}>
                 <h3>Tech & Mechanics</h3>
                 <p>See All....</p>
            </div>


            <div className={Styles.course1}>    
                {course.map((course => (
                    <div key={course.id}>
                        <img src={course.image} alt='images'/>
                        <p>{course.content}</p>
                        <p>{course.content1}</p>
                        <p>{course.amount}</p>
                        
                        <div className={Styles.SkillBtn}>
                        <button>{course.btn}</button>
                        <button>{course.btn1}</button> 
                        </div>
                    </div>
                )))}
            </div>


            <div className={Styles.history}>
                <h3>History & Health</h3>
                <p>See All....</p>
            </div>


            <div className={Styles.course2}>
                {course1.map((course => (
                    <div key={course.id}>
                        <img src={course.image1} alt='images'/>
                        <p>{course.contentt}</p>
                        <p>{course.amountt}</p>
                        <div className={Styles.SkillBtn}>
                            <button>{course.btnn}</button>
                            <button>{course.btnn1}</button>
                        </div>
                    </div>
                )))}
            </div>


        </div>
    )
}

export default SkillAcquisition
