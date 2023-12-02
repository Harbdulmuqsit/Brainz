import React from 'react'
import Styles from '../GetHelp/Styles/Gethelp.module.css'

const GetHelp = () => {

    const Submit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className={Styles.GetHelp}>
            <h1>Get Supports</h1>
            <p>Contact Us With Your Message. Our Team Will Get Back To You Soon.</p>
        
            <form onSubmit={Submit}>
                <div className={Styles.GetHelpUserName}>
                    <label htmlFor="username">Username</label> <br />
                    <input type='text' placeholder='username'/>
                </div>

                <div className={Styles.GetHelpEmail}>
                    <label htmlFor="email">Email </label> <br />
                    <input type='email' placeholder='Write your email'/>
                </div>

                <div className={Styles.GetHelpMessage}>
                    <label htmlFor='Message'>Type your Message here</label>  <br />
                    <textarea rows='4'  cols='50' placeholder='Write your text here........'/>
                </div>

                <div>

                    <button>
                        submit
                    </button>

                </div>
            </form>
        </div>
    )
}

export default GetHelp
