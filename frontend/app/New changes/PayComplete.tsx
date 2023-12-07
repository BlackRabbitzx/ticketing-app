// PayComplete.tsx

import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './PayComplete.css';

const PayComplete = () => {
//   const navigate = useNavigate();

    const paymentData = {
        movieName: 'Avengers: Endgame',
        location: 'Theater ABC',
        ticketAmount: 1,
        startTime: '19:30',
        seatNumber: 'A1',
        price: '$10',
        paymentType: 'BCA', // Assume this is retrieved from the database
        movieCoverUrl: 'https://example.com/avengers-endgame-cover.jpg', // Add the movie cover URL
    };

    const handleBackToHome = () => {
        // navigate('/');
    };

    return (
        <div className="pay-complete-container">
        <h2>Payment Complete</h2>
        <div className="pay-details">
            <div className="movie-info">
                <img src={paymentData.movieCoverUrl} alt="Movie Cover" className="movie-cover" />
                <div className="movie-text">
                    <p>Movie: {paymentData.movieName}</p>
                    <p>Location: {paymentData.location}</p>
                    <p>Ticket Amount: {paymentData.ticketAmount}</p>
                    <p>Start Time: {paymentData.startTime}</p>
                    <p>Seat Number: {paymentData.seatNumber}</p>
                    <p>Price: {paymentData.price}</p>
                    <p>Payment Type: {paymentData.paymentType}</p>
                </div>
            </div>
        </div>
        <div className="checklist">&#10004;</div>
        <button className="back-button" onClick={handleBackToHome}>
            Back to Home
        </button>
    </div>
  );
};

export default PayComplete;
