import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Styles from './Styles/NDashboard.module.css';
import SideMenu from './SideMenu';
import {useRef, useState} from 'react';
import Leaderboard from '../Leaderboard/Leaderboard';
import DashboardContent from '../NewDashboard/DashboardContent';
// import Quiz from '../Quiz/Quiz';
import Quiz from '../QuizCompetition';
import SpinToWin from '../Spin To Win/SpinToWin';
import SkillAcquisition from '../Skill Acquisition/SkillAcquisition';
import Payments from '../Payments/Payments';
import Referrals from '../Referrals History/Referrals';
import Earnings from '../Earnings/Earnings';
import Settings from '../Settings/Settings';
import GetHelp from '../GetHelp/GetHelp';
import SetCommunity from '../SetCommunity/SetCommunity';



const Dashboard = () => {
    
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const SideNav = useRef();
    const dashboardFull = useRef();

    const handleSideNavHide =()=> {
        SideNav.current.classList.add(Styles.sidenavHide);
        dashboardFull.current.classList.add(Styles.dashboardFull)
    }

    
	const handleShowSideNav = () => {
		SideNav.current.classList.remove(Styles.sidenavHide);
		dashboardFull.current.classList.remove(Styles.dashboardFull);

    };

    return (   
    
      <div>
            <div>
                <SideMenu
                    SideNav = {SideNav}
                    handleSideNavHide={handleSideNavHide}
                    Styles={Styles}
                    handleShowSideNav={handleShowSideNav}
                    handleClick = {handleClick}
                    click = {click}
                />
            </div>

            <div ref={dashboardFull} className={Styles.dashboard}>
                <Routes>
                    <Route path='/' element={<DashboardContent /> }/>
                    <Route path='/dashboard' element={<DashboardContent />} /> 
                    <Route path='/quiz' element={<Quiz />}/>  
                    <Route path='/Leaderboard' element={<Leaderboard />}/>  
                    <Route path='/SpinToWin' element={<SpinToWin />}/>  
                    <Route path = '/SkillAcquisition' element={<SkillAcquisition />} />
                    <Route path = '/Payments' element={<Payments />} />    
                    <Route path= '/Referrals' element={<Referrals />} />
                    <Route path= '/Earnings' element={<Earnings />} />
                    <Route path= '/Settings' element={<Settings />} />
                    <Route path= '/GetHelp' element={<GetHelp />} />
                    <Route path= '/SetCommunity' element={<SetCommunity />} />
                </Routes>
            </div>    
      </div>
    
    )
}

export default Dashboard


