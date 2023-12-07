import React, { useState } from 'react';
import posterfilm2 from './posterfilm2.jpg';
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
      <h1 className='title'>Trolls Band Together</h1>
      <div className='detail'>
        <Image src={posterfilm2} alt="" />
          <div className='detailinfo'>
            <h4>Genre</h4>
            <p>Komedi, Fantasi</p>
            <h4>Tanggal Rilis</h4>
            <p>17 November 2023</p>
            <h4>Durasi</h4>
            <p>1 jam 31 menit</p>
            <h4>Sinopsis</h4>
            <p>Setelah dua film tentang persahabatan sejati dan rayuan tanpa henti, Poppy dan Branch kini resmi, akhirnya, menjadi pasangan (#broppy)! Saat mereka semakin dekat, Poppy menemukan bahwa Branch memiliki masa lalu rahasia. Dia pernah menjadi bagian dari fenomena boyband favoritnya, BroZone, dengan empat saudara lelakinya: Floyd, John Dory, Spruce dan Clay. BroZone dibubarkan ketika Branch masih bayi, begitu pula keluarganya, dan Branch tidak pernah melihat saudara laki-lakinya sejak itu. Tetapi ketika saudara Branch, Floyd, diculik karena bakat musiknya oleh sepasang penjahat bintang pop jahat—Velvet dan Veneer—Branch dan Poppy memulai perjalanan yang mengerikan dan emosional untuk menyatukan kembali saudara-saudara lainnya dan menyelamatkan Floyd dari nasib yang bahkan lebih buruk daripada ketidakjelasan budaya pop.</p>
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
            <h4>Bintaro XChange XXI</h4>
            <div className='time'>
              <span>12:45</span>
              <span>14:35</span>
              <span>16:25</span>
              <span>18:15</span>
              <span>20:05</span>
            </div>
          </div>
          <div className='jadwal2'>
            <h4>Summarecon Mall Serpong XXI</h4>
            <div className='time'>
              <span>12:30</span>
              <span>14:25</span>
              <span>16:20</span>
              <span>18:15</span>
              <span>20:10</span>
            </div>
          </div>
          <div className='jadwal3'>
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>14:55</span>
              <span>19:15</span>
            </div>
          </div>
        </div>

        <div className='listjadwaltomorrow' style={{display:on2?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>11:00</span>
            </div>
          </div>
        </div>

        <div className='listjadwallast' style={{display:on3?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>MAXXBOX Lippo Village Cinepolis</h4>
            <div className='time'>
              <span>12:35</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMarvels;