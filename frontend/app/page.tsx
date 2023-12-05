import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import Movies from './components/movies';
import Theaters from './components/theaters';

export default function Page(){
  return (
    <div>
        <Header />
        <AboutUs />
        <Footer />  
    </div>
  );
};
