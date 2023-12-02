import React from 'react';
import Styles from '../SetCommunity/Styles/SetCommunity.module.css';
const SetCommunity = () => {
    return (
        <div className={Styles.setCommunity}>
            <h1>Join Our Community</h1>
            <p>Join Our Social Media And Community For More Update</p>

            <div className={Styles.setCommunityBtn}>
                <button>Telegram</button>
                <button>Twitter</button>
                <button>Facebook</button>
                <button>Discord</button>
            </div>
        </div>
    )
}

export default SetCommunity
