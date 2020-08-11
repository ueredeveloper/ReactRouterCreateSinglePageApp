import React, { useState } from 'react'; 
import Home from './Home';
import Stuff from './Stuff'; 
import Contact from './Contact';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"; 

/**
  1 - define router region 
  2 - define navigation link
  3 - define router in content
  */
    
function Main () {
  
  return (
  <HashRouter>
    <div>
      <h1>Simple SPA</h1>
      <ul className="header">
       
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/stuff">Stuff</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
       
      </ul>
     <div className="content">  
     
       <Route exact path="/" component={Home}/>
       <Route path="/stuff" component={Stuff}/> 
       <Route path="/contact" component={Contact}/> 
       
     </div>
     
     </div>
  </HashRouter>  
  );
}

export default Main;