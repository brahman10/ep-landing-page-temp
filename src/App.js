import React from 'react';

import LandingPage from './pages/LandingPage';
import {Route,Routes} from "react-router-dom"


function App() {
  
  return (
    <div className="">
         
         <Routes>
         <Route path="/" element={<LandingPage/>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
