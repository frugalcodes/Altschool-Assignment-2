import React from 'react';
import User from './components/UserDetail';
import Contact from './components/contact';
import Users from './components/Users';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';

import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {

 

  return (
    <Router>
    <div className='App'>

    <Nav />
    <Routes>
    <Route path='/' exact element={<Home />} />
    <Route path="/about"  element={<About/>}/>
    
    <Route path="/contact"  element={<Contact/>}/>

    
    <Route path="/users" exact element={<Users/>}/>

    <Route path="/users/:cell" element={<User/>}/>
    


    </Routes>
    
    </div>
    </Router>
  )
}

export default App