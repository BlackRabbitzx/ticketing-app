import React, { useState } from 'react';
import posterfilm5 from './posterfilm5.jpg';
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
      <h1 className='title'>Srimluat: Hidup Memang Komedi</h1>
      <div className='detail'>
        <Image src={posterfilm5} alt="" />
          <div className='detailinfo'>
            <h4>Genre</h4>
            <p>Komedi</p>
            <h4>Tanggal Rilis</h4>
            <p>23 November 2023</p>
            <h4>Durasi</h4>
            <p>1 jam 45 menit</p>
            <h4>Sinopsis</h4>
            <p>Mendapatkan tawaran menjadi bintang nasional, membawa grup Srimulat berhadapan dengan kerasnya ibukota dan kendala bahasa. Saat berproses, masalah bertambah karena kisah asmara Gepeng (Juan Bio One) dan Royani (Indah Permatasari), hingga krisis identitas Tessy (Erick Estrada) yang membuatnya masuk penjara. Apa mereka bisa menaklukkan ibukota dengan tawa, atau mereka yang akan ditertawakan ibukota dan harus menerima kenyataan hidup memang komedi?</p>
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
            <h4>ECOPLAZA Citraraya Cikupa CGV</h4>
            <div className='time'>
              <span>15:35</span>
              <span>20:10</span>
            </div>
          </div>
          <div className='jadwal2'>
            <h4>Lotte Bintaro XXI</h4>
            <div className='time'>
              <span>12:20</span>
              <span>14:20</span>
              <span>16:20</span>
              <span>18:20</span>
              <span>20:20</span>
            </div>
          </div>
        </div>

        <div className='listjadwaltomorrow' style={{display:on2?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>No Schedule...</h4>
          </div>
        </div>

        <div className='listjadwallast' style={{display:on3?"flex":"none"}}>
          <div className='jadwal1'>
            <h4>No Schedule...</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMarvels;