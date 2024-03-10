import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import ChangePassword from './changepassword';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Appoint from './appointment';
import MyProfile from './myprofile';

function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/appointment' element={<Appoint/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));