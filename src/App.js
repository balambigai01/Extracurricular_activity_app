
import './App.css';
import React from 'react';
import Update from './components/Update.js';
 import Admin from './components/Admin.js';
 import User from './components/User.js'
import Registration from './components/Registration.js';
import Login from './components/Signup.js';
import Navbar from './components/Navbar.js'
 import Home from './components/Home.js'
   import Signup from './components/Signup.js'
import Signin from './components/Signin.js';
 import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
function App() {
  return (
    <Router>
      
        <Navbar /> 
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/User' element={<User />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Update' element={<Update />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        </Routes>
     
        
    
    </Router>
    
  );
}
export default App;
