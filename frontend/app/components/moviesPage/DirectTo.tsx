import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DirectTo() {

    const navigate = useNavigate();

    const navigateToFilm1 = () => {
    navigate('/TheMarvels');
    }

    const navigateToFilm2 = () => {
        navigate('/TrollsBandTogether');
    }

    const navigateToFilm3 = () => {
        navigate('/Animal');
    }

    const navigateToFilm4 = () => {
        navigate('/Napoleon');
    }

    const navigateToFilm5 = () => {
        navigate('/Srimulat');
    }


    return (
        <div>
            <p>Buat memepermudah liat pagenya satu" aja ini (diklik di tulisannya)</p>
            <p onClick={navigateToFilm1} style={{cursor:"pointer"}}>The Marvels</p>
            <p onClick={navigateToFilm2} style={{cursor:"pointer"}}>Trolls Band Together</p>
            <p onClick={navigateToFilm3} style={{cursor:"pointer"}}>Animal</p>
            <p onClick={navigateToFilm4} style={{cursor:"pointer"}}>Napoleon</p>
            <p onClick={navigateToFilm5} style={{cursor:"pointer"}}>Srimulat: Hidup Memang Komedi</p>
        </div>
    );
}

export default DirectTo;