import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Payments.css';

function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  //   const navigate = useNavigate();

  const handlePaymentSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
    setIsSubmitDisabled(false);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (selectedPayment) {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmTransaction = () => {
    setShowPopup(false);
    //   navigate('/PayComplete');
  };
  

  return (
    <div className="payment-page-container">
      <h2>Payment Details</h2>
      <div className="movie-details">
          <div className='row'>
              <img src="" alt="Movie Cover" />
              <div className='details'>
                  <p>Movie: Avengers: Endgame</p>
                  <p>Location: Theater ABC</p>
              </div>
              <p className='description'>
                  description
              </p>
          </div>
      </div>


      <div className='row'>
          <div className="ticket-details">
              <div className="bordered-row">
                  <p>Jumlah Tiket: <span id="ticketAmount">1</span></p>
                  <p>Jam Menonton: 19:30</p>
                  <p>Nomor Kursi: A1</p>
                  <p>Harga: $10</p>
              </div>
          </div>
          <div className="payment-methods">
              <h2>Payment Methods</h2>
              <div className='row'>
                  <form action="">
                  <div className="row">
                      <label className="row">
                          <input type="radio" name="paymentMethod" id="BCA" onChange={() => handlePaymentSelect('BCA')} checked={selectedPayment === 'BCA'}/>
                          <p>BCA</p>
                      </label>
                      <label className="row">
                          <input type="radio" name="paymentMethod" id="Gopay" onChange={() => handlePaymentSelect('Gopay')} checked={selectedPayment === 'Gopay'}/>
                          <p>Gopay</p>
                      </label>
                  </div>
                  <button className="submit-button" onClick={handleSubmit} disabled={isSubmitDisabled}>Submit</button>
              </form>
            </div>
          </div>
      </div>

      {showPopup && (
          <div className="popup">
              <div className="popup-content">
                  <span className="close" onClick={handleClosePopup}>
                  &times;
                  </span>
                  <h2>Payment Confirmation</h2>
                  <p>Selected Payment Method: {selectedPayment}</p>
                  <img src="qr-code.png" alt="QR Code" />
                  <p>Minta melakukan transaksi</p>
                  <button onClick={handleConfirmTransaction}>Transaction Completed</button>
              </div>
          </div>
      )}
  </div>
);}

export default PaymentPage;