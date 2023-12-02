import React from 'react';
import Styles from '../Referrals History/Styles/Referrals.module.css';
import {referrals} from '../../data/db';

const Referrals = () => {
    return (
        <div className={Styles.Referrals}>
            <h1>Referral History</h1>
            <p>Manange Your Friends Transaction With Ease</p>


            <div className={Styles.ReferralList}>
                <h3>Name</h3>
                <h3>Total Answered</h3>
                <h3>Reward</h3>
            </div>

          <div>
                {referrals ? referrals.map((refer => {
                   return <React.Fragment key={refer.id}>
                            <div  className={Styles.ReferralNames}>    
                                <div>
                                    <span>{refer.id}</span>
                                    <span>{refer.Name}</span>
                                </div>

                            <div>
                                <span>{refer.Answered}</span>
                            </div>

                            <div> 
                                <span>{refer.Reward}</span>
                            </div>
                          </div>
                        </React.Fragment>
                    })): null}
          </div>
        </div>
    )
}

export default Referrals
