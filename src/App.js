// import LoginPage from "./components/LoginPage";
// import SignUp from "./components/SignUp";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Firstpage from "./components/Firstpage";
// import { useState } from "react";
// import Dashboard from "./components/Dashboard";
// import Quiz from "./components/Quiz";
// import Profile from "./components/Profile";
// import Sidemenu from "./components/Sidemenu";
// import QuizCompetition from "./components/QuizCompetition";
// import Wheel from "./components/Wheel";
// import SkillAcquisition from "./components/SkillAcquisition";
// import Payment from "./components/Payment";
// import Referral from "./components/Referral";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   return (
//     <Router>
//       <div className="App">
//         {loggedIn ? (
//           <Routes>
//             <Route path="/" element={<Firstpage />} />
//             <Route path="/login" element={<LoginPage login={setLoggedIn} />} />
//             <Route path="/signup" element={<SignUp />} />
//           </Routes>
//         ) : (
//           <div className="DASHBOARD">
//             <div id="content">


//             <Routes>
//                 <Route path="/*" element= {<Sidemenu />} />  
//             </Routes>
//               <Routes>
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/leader-board" element={<Quiz />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/quiz" element={<QuizCompetition />} />
//                 <Route path="/wheel" element={<Wheel />} />
//                 <Route path="/skill" element={<SkillAcquisition />} />
//                 <Route path="/payment" element={<Payment />} />
//                 <Route path="/referral" element={<Referral />} />

//                 <Route
//                   path="/login"
//                   element={<LoginPage login={setLoggedIn} />}
//                 />
//                 <Route path="/signup" element={<SignUp />} />
//               </Routes>
//             </div>
//           </div>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Firstpage from "./components/Firstpage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Dashboard from './components/NewDashboard/Dashboard';
// import Dashboard from "./components/Dashboard" 

function App(){
  // const [logIn] = useState(true);

  return(
    <div>
        <Router>

      {/* {logIn ?  */}
        {/* ( */}
          <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/Firstpage" element={<Firstpage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path='/dashboard' element={<Dashboard />} />

          </Routes>
<<<<<<< HEAD
          ) :
            null        
=======
          {/* ) :
            null         */}
>>>>>>> b02e671 (First commit)
          {/* } */}
        </Router>
      </div>
    )
}

export default App