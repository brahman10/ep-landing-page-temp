import React from 'react';

import LandingPage from './pages/LandingPage';
import SurveyPage from './pages/SurveyPage';
import {Route,Routes} from "react-router-dom"
import IntroPage from './pages/Intropage';

function App() {
  
  return (
    <div 
      className="h-screen overflow-hidden"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
         
         <Routes>
         <Route path="/" element={<IntroPage/>}></Route>
         <Route path="/survey-with-us" element={<SurveyPage/>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
