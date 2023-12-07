'use client'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Movies from './components/Movies';
import Theaters from './components/Theaters';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Profile from './components/Profile';

export default function Page(){
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Theaters" element={<Theaters />} />
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
        <Footer />  
      </Router>
    </div>
  );
};