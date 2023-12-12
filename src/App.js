import React from 'react';

import LandingPage from './pages/LandingPage';
import {Route,Routes} from "react-router-dom"
import MyComponent from './components/MyComponent';
import BlogDetailPage from './components/BlogDetailPage';


function App() {
  
  return (
    <div className="">
         
         <Routes>
         <Route path="/" element={<MyComponent/>}></Route>
         <Route path="/blog-detail" element={<BlogDetailPage/>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
