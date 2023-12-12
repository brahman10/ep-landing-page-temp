import React from 'react';

import LandingPage from './pages/LandingPage';
import {Route,Routes} from "react-router-dom"
import MyComponent from './components/MyComponent';


function App() {
  
  return (
    <div className="">
         
         <Routes>
         <Route path="/" element={<MyComponent/>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
