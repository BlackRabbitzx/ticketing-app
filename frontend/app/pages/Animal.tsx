import React, { useState } from 'react';
import posterfilm3 from './posterfilm3.jpg';
import './Animal.css';

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
      <h1 className='title'>Animal</h1>
      <div className='detail'>
        <img src={posterfilm3} alt="" />
          <div className='detailinfo'>
            <h4>Genre</h4>
            <p>Laga, Kejahatan</p>
            <h4>Tanggal Rilis</h4>
            <p>1 Desember 2023</p>
            <h4>Durasi</h4>
            <p>3 jam 22 menit</p>
            <h4>Sinopsis</h4>
            <p>Arjun Singh (Ranbir Kapoor) mengalami transformasi yang luar biasa ketika ikatan dengan ayahnya, Balbir Singh (Anil Kapoor) mulai renggang, dan keinginannya untuk balas dendam semakin kuat.</p>
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
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>12:30</span>
              <span>15:30</span>
              <span>19:30</span>
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
