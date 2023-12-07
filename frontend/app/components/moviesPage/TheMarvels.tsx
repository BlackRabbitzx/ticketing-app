import React, { useState } from 'react';
import posterfilm from './posterfilm.jpeg';
import './MovieDetails.css';
import Image from 'next/image';

function TheMarvels() {
  const [on, setOn] = useState<boolean>(true);
  const [on2, setOn2] = useState<boolean>(false)
  const [on3, setOn3] = useState<boolean>(false)

  const todayOn = () => {
    setOn(true)
    setOn2(false)
    setOn3(false)
  }

  const tomorrowOn = () => {
    setOn2(true)
    setOn(false)
    setOn3(false)
  }

  const lastOn = () => {
    setOn3(true)
    setOn(false)
    setOn2(false)
  }

  return (
    <div className='bigcont'>
      <h1 className='title'>The Marvels</h1>
      <div className='detail'>
        <Image src={posterfilm} alt="" />
          <div className='detailinfo'>
            <h4>Genre</h4>
            <p>Laga, Petualangan</p>
            <h4>Tanggal Rilis</h4>
            <p>8 November 2023</p>
            <h4>Durasi</h4>
            <p>1 jam 45 menit</p>
            <h4>Sinopsis</h4>
            <p>Carol Danvers alias Captain Marvel berhasil merebut kembali identitasnya dari Kree yang tirani dan membalas dendam terhadap Supreme Intelligence. Namun, adanya dampak-dampak tak terduga membuat Carol harus menanggung destabilisasi semesta. Saat menyelidiki sebuah lubang cacing yang terkait dengan gerakan revolusi Kree, kekuatan Carol secara tiba-tiba terbelit dengan kekuatan yang dimiliki penggemar beratnya dari Jersey City, Kamala Khan alias Ms. Marvel, serta keponakan Carol yang tengah menjauh sekaligus astronot S.A.B.E.R., Kapten Monica Rambeau.</p>
          </div>
      </div>
      <div className='jadwal'>
        <h2>Jadwal</h2>
        <div className='tanggal'>
          <p className='today' onClick={todayOn} style={{borderColor:on?"blue":"red"}}>Hari ini</p>
          <p onClick={tomorrowOn} style={{borderColor:on2?"blue":"red"}}>6 Desember 2023</p>
          <p onClick={lastOn} style={{borderColor:on3?"blue":"red"}}>7 Desember 2023</p>
        </div>
        <div className='listjadwaltoday' style={{display:on?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>Alam Sutera XXI</h4>
            <div className='time'>
              <span>12:30</span>
              <span>14:30</span>
              <span>16:30</span>
              <span>18:30</span>
              <span>20:30</span>
            </div>
          </div>
          <div className='jadwal2'>
            <h4>ECOPLAZA Citraraya Cikupa CGV</h4>
            <div className='time'>
              <span>13:15</span>
              <span>17:50</span>
            </div>
          </div>
          <div className='jadwal3'>
            <h4>AEON Mall BSD City</h4>
            <div className='time'>
              <span>12:30</span>
              <span>14:30</span>
              <span>16:30</span>
              <span>18:30</span>
              <span>20:30</span>
            </div>
          </div>
        </div>

        <div className='listjadwaltomorrow' style={{display:on2?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>15:00</span>
            </div>
          </div>
        </div>

        <div className='listjadwallast' style={{display:on3?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>15:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMarvels;