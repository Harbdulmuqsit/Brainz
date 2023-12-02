import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/Gifted-Brainz.png';
import Arrow from '../../img/arrow.png';
import Dashboard from '../../img/dashboard.png';
import Quiz from '../../img/running.png';
import Leaderboard from '../../img/quiz.png';
import spin from '../../img/spin.png';
import skill from '../../img/skill.png';
import Payment from '../../img/payment.png';
import Referrals from '../../img/refhistory.png';
import Earnings from '../../img/earnhistory.png';
import Settings from '../../img/settingslogo.png';
import GetHelp from '../../img/helplogo.png';
import SetCommunity from '../../img/communitylogo.png';
import { FaRegTimesCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt4  } from 'react-icons/hi';


const SideMenu = ({ SideNav, click,  handleClick, handleSideNavHide,handleShowSideNav,Styles, logoCase}) => {

    return (
       <>

      <nav   ref={SideNav} className={Styles.sidenav}>
          
            <div className={Styles.logoCase}>     
                <img src={Logo} alt='Logo' onClick={handleShowSideNav} />
                <img src={Arrow} alt='Arrow' onClick={handleSideNavHide}/>
            </div>

            <Link to='/dashboard'>
                <div  className={Styles.Dboard}>
                    <img  src={Dashboard} alt='dashboard-img'/>
                    <p>Dashboard</p>
                </div>
            </Link>

            <Link to='/quiz'>
                <div className={Styles.QuizDboard}>
                    <img src={Quiz} alt='Quiz' />
                    <p>Quiz Competiton</p>
                </div>
            </Link>

            <Link to='/Leaderboard'>
                <div className={Styles.LeaderDboard}>
                    <img src={Leaderboard} alt='Leaderboard' />
                    <p>Quiz Leaderboard</p>
                </div>
            </Link>

            <Link to="/SpinToWin">
                <div className={Styles.SpinDboard}>
                    <img src={spin} alt="spin" />
                    <p>Spin To Win</p>
                </div>
            </Link>

            <Link to="/SkillAcquisition">
                <div className={Styles.SkillDboard}>
                    <img src={skill} alt="skill" />
                    <p>Skill Acquisition</p>
                </div>
            </Link>

            <Link to="/Payments">
                <div className={Styles.PaymentsDboard}>
                    <img src={Payment} alt="Payment" />
                    <p>Payments</p>
                </div>
            </Link>

            
            <Link to="/Referrals">
                <div className={Styles.ReferralsDboard}>
                    <img src={Referrals} alt="Referrals" />
                    <p>Referrals</p>
                </div>
            </Link>


            <Link to="/Earnings">
                <div className={Styles.EarningsDboard}>
                    <img src={Earnings} alt="Earnings" />
                    <p>Earnings</p>
                </div>
            </Link>

            <div className={Styles.DboardBackground}>
              
                <Link to="/Settings">
                    <div className={Styles.SettingsDboard}>
                        <img src={Settings} alt="Settings" />
                        <p>Settings</p>
                    </div>
                </Link>


                
                <Link to="/GetHelp">
                    <div className={Styles.GetHelpDboard}>
                        <img src={GetHelp} alt="Get Help" />
                        <p>Get Help</p>
                    </div>
                </Link>

                
                <Link to="/SetCommunity">
                    <div className={Styles.CommunityDboard}>
                        <img src={SetCommunity} alt="Set Community" />
                        <p>Set Community</p>
                    </div>
                </Link>
            </div>
        </nav>


{/* Phone View */}

<div className={Styles.phoneView}>
      <h3 onClick={handleClick}>
          {click ?  (<FaRegTimesCircle />) : (<HiOutlineMenuAlt4 />)}
      </h3>
    
          <div className={click ? Styles.active  : Styles.navbar}>
              <ul>
                  <li>
                      <Link to='/dashboard'>
                          <div  className={Styles.DboardPhone}>
                              <img  src={Dashboard} alt='dashboard-img'/>
                              <p>Dashboard</p>
                          </div>
                      </Link>    
                  </li>         

                  <li>
                     <Link to="/quiz">
                          <div  className={Styles.DboardPhone}>                                        
                              <img src={Quiz} alt="running" />
                              <p>Quiz Competiton</p>
                          </div>    
                      </Link>    
                  </li>   

                    <li>
                     <Link to="/Leaderboard">
                          <div  className={Styles.DboardPhone}>                                        
                              <img src={Leaderboard} alt="Leaderboard" />
                              <p>Quiz Leaderboard</p>
                          </div>    
                      </Link>    
                  </li>   

                  <li>
                    <Link to="/SpinToWin">
                     <div  className={Styles.DboardPhone}>                                        
                          <img src={spin} alt="spin" />
                          <p>Spin To Win</p>
                     </div>
                    </Link>
                  </li>

                  <li>
                      <Link to="/SkillAcquisition">
                          <div className={Styles.DboardPhone}>
                              <img src={skill} alt="skill" />
                              <p>Skill Acquisition</p>
                          </div>
                      </Link>
                  </li>

                  <li>
                      <Link to="/Payments">
                          <div className={Styles.DboardPhone}>
                              <img src={Payment} alt="Payment" />
                              <p>Payments</p>
                          </div>
                      </Link>
                  </li>


                  <li>                    
                    <Link to="/Referrals">
                    <div className={Styles.DboardPhone}>
                        <img src={Referrals} alt="Referrals" />
                        <p>Referrals</p>
                    </div>
                    </Link>
                  </li>

                  <li>
                    <Link to="/Earnings">
                    <div className={Styles.DboardPhone}>
                        <img src={Earnings} alt="Earnings" />
                        <p>Earnings</p>
                    </div>
                    </Link>
                 </li>
                    
                 
                 <li>
                    <Link to="/Settings">
                    <div className={Styles.DboardPhone}>
                        <img src={Settings} alt="Settings" />
                        <p>Settings</p>
                    </div>
                    </Link>
                 </li>

                 <li>   
                    <Link to="/GetHelp">
                    <div className={Styles.DboardPhone}>
                        <img src={GetHelp} alt="Get Help" />
                        <p>Get Help</p>
                    </div>
                    </Link>
                 </li>

                 <li>   
                    <Link to="/SetCommunity">
                    <div className={Styles.DboardPhone}>
                        <img src={SetCommunity} alt="Set Community" />
                        <p>Set Community</p>
                    </div>
                    </Link>
                 </li>
              </ul>
          </div>
</div>
</>
          
    )
}

export default SideMenu
