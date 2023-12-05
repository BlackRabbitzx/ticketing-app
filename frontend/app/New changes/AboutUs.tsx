// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Import your CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>
        Selamat datang di TrickTix, tempat di mana kami berkomitmen untuk meredefinisi pengalaman menonton film dengan cara yang revolusioner dan memikat. Sebagai pionir dalam industri pemesanan tiket film online, kami, di TrickTix, memahami bahwa hiburan adalah bagian tak terpisahkan dari kehidupan modern. Oleh karena itu, kami berusaha menciptakan lingkungan di mana setiap langkah dalam perjalanan menikmati film dapat dijalani dengan kemudahan dan kecerdasan teknologi.
        </p>
      </section>

      <section className="mission-vision">
        <div>
          <h2>Our Mission</h2>
          <p>
            Misi kami di TrickTix adalah memberikan layanan yang unggul, memberikan akses yang mudah, dan menawarkan pengalaman yang tak terlupakan kepada setiap pengguna. Kami merancang platform kami dengan fokus pada kemudahan penggunaan, kecepatan transaksi, dan keamanan data. Kami berusaha menciptakan lingkungan di mana setiap orang dapat dengan mudah merencanakan kunjungan ke bioskop, menjadikan TrickTix sebagai teman setia dalam setiap momen hiburan.
          </p>
        </div>

        <div>
          <h2>Our Vision</h2>
          <p>
            Di TrickTix, visi kami adalah menjadi pionir dalam perubahan cara masyarakat menikmati hiburan. Kami bermimpi tentang menciptakan transformasi positif dalam industri pemesanan tiket film online, menghadirkan kemudahan, kecepatan, dan keamanan dalam setiap langkah perjalanan menonton film. Kami berkomitmen untuk menjadi perusahaan yang memberikan inovasi terdepan dalam memberikan pengalaman menonton film yang revolusioner.
          </p>
        </div>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <p>
          Di balik projek yang sukses ada tim yang berdedikasi, dan TrickTix tidak terkecuali. Tim profesional kami yang beragam berkomitmen untuk memberikan keunggulan dan memastikan pengalaman pesan tiket bioskop Anda mudah dari awal hingga akhir.
        </p>

        <div className="team-members">
          <div className="team-member">
            <img src="pic.jpg" alt="Anggota Tim 1" />
            <h3>John Doe</h3>
            <p>Pendiri & CEO</p>
          </div>

          <div className="team-member">
            <img src="pic.jpg" alt="Anggota Tim 2" />
            <h3>Jane Smith</h3>
            <p>Kepala Pengalaman Pelanggan</p>
          </div>
          
          <div className="team-member">
            <img src="pic.jpg" alt="Anggota Tim 3" />
            <h3>Jane Smith</h3>
            <p>Kepala Pengalaman Pelanggan</p>
          </div>

          <div className="team-member">
            <img src="pic.jpg" alt="Anggota Tim 4" />
            <h3>Jane Smith</h3>
            <p>Kepala Pengalaman Pelanggan</p>
          </div>

          <div className="team-member">
            <img src="pic.jpg" alt="Anggota Tim 5" />
            <h3>Jane Smith</h3>
            <p>Kepala Pengalaman Pelanggan</p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Kami senang mendengar dari pengguna kami! Jika Anda memiliki pertanyaan, feedback, atau hanya ingin mengucapkan halo, jangan ragu untuk menghubungi tim dukungan kami yang ramah.
        </p>

        <div className="contact-info">
          <p>Email: support@tricktix.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
