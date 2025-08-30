import React from 'react';

import LandingPage from './pages/LandingPage';
import SurveyPage from './pages/SurveyPage';
import {Route,Routes} from "react-router-dom"


function App() {
  
  return (
    <div className="">
         
         <Routes>
         <Route path="/" element={<LandingPage/>}></Route>
         <Route path="/survey-with-us" element={<SurveyPage/>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
