import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import Movies from './components/movies';
import Theaters from './components/theaters';

export default function Page(){
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/theaters" element={<Theaters />} />
        </Routes>
        <Footer />  
      </Router>
    </div>
  );
};
