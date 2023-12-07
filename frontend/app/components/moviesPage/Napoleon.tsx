import React, { useState } from 'react';
import posterfilm4 from './posterfilm4.jpg';
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
      <h1 className='title'>Napoleon</h1>
      <div className='detail'>
        <Image src={posterfilm4} alt="" />
          <div className='detailinfo'>
            <h4>Genre</h4>
            <p>Perang, Laga</p>
            <h4>Tanggal Rilis</h4>
            <p>29 November 2023</p>
            <h4>Durasi</h4>
            <p>2 jam 38 menit</p>
            <h4>Sinopsis</h4>
            <p>Berlatar tahun 1793, di masa era Revolusi Prancis terjadi. Napoleon akan berkisah tentang Jenderal Napoleon Bonaparte (Joaquin Phoenix) sosok ambisius, cerdas dan ahli strategi yang berani melawan koalisi negara-negara Eropa untuk memperluas kekuasaannya. Perjalanan kejayaan sang kaisar sampai hubungan cintanya bersama Josephine (Vanessa Kirby).</p>
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
            <h4>Living World XXI</h4>
            <div className='time'>
              <span>12:00</span>
              <span>14:55</span>
              <span>17:50</span>
              <span>20:45</span>
            </div>
          </div>
          <div className='jadwal2'>
            <h4>BSD XXI</h4>
            <div className='time'>
              <span>17:20</span>
              <span>20:15</span>
            </div>
          </div>
          <div className='jadwal3'>
            <h4>Bintaro XChange XXI</h4>
            <div className='time'>
              <span>12:00</span>
              <span>14:55</span>
              <span>17:50</span>
              <span>20:45</span>
            </div>
          </div>
        </div>

        <div className='listjadwaltomorrow' style={{display:on2?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>13:40</span>
              <span>19:45</span>
            </div>
          </div>
          <div className='jadwal1'>
            <h4>Foodmosphere CGV</h4>
            <div className='time'>
              <span>13:15</span>
            </div>
          </div>
        </div>

        <div className='listjadwallast' style={{display:on3?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>13:40</span>
              <span>19:45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMarvels;