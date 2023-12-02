import React from 'react';
import Styles from '../Settings/Syles/Settings.module.css';
import settingsPics from '../../img/settings.png';
const Settings = () => {

    const Submit = e => {
        e.preventDefault();
    }
    
    return (
        <div className={Styles.Settings}>
            <h2>Settings</h2>
            <p>Manage All Your Settings In Here.</p> 

            <img src={settingsPics} alt="settings Pics"/>

                <form onSubmit={Submit}>
                    <div className={Styles.settingsUsername}>
                        <label htmlFor="username"> Username</label>
                        <input type="text" placeholder='write your username'/>
                    </div>

                    <div className={Styles.settingsEmail}>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name='email' placeholder='write your email address'/>
                    </div>

                    <div className={Styles.settingsBtn}>
                        <button>save</button>
                        <button>Log out</button>
                    </div>
                </form>
        </div>
    )
}
export default Settings
