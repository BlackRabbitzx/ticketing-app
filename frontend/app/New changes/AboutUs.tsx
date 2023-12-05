// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Import your CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to TrickTix, where the magic of live events comes to life! At TrickTix, we believe in creating unforgettable experiences that last a lifetime. Whether you're a music enthusiast, a sports fanatic, or a theater buff, TrickTix is your go-to destination for securing tickets to the hottest events around. Our mission is to connect passionate fans with their favorite artists, teams, and performers, ensuring that every moment is a celebration. With a user-friendly platform, seamless booking process, and a commitment to customer satisfaction, TrickTix is your trusted companion on the journey to exceptional live entertainment. Join us on this adventure, and let the magic of TrickTix turn your moments into memories!</p>
      </section>

      <section className="mission-vision">
        <div>
          <h2>Our Mission</h2>
          <p>
            At TrickTix, our mission is to connect people with the events they love. We strive to provide a seamless and enjoyable ticket ordering experience, making it easy for you to create lasting memories at concerts, sports events, and more.
          </p>
        </div>

        <div>
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has access to the events that bring joy and excitement. Through innovation and a passion for live experiences, we aim to be the go-to platform for discovering and securing tickets to the hottest events worldwide.
          </p>
        </div>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <p>
          Behind every successful event is a dedicated team, and TrickTix is no exception. Our diverse team of professionals is committed to delivering excellence and ensuring that your event journey is exceptional from start to finish.
        </p>

        <div className="team-members">
          <div className="team-member">
            <img src="team-member-1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-member">
            <img src="team-member-2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Customer Experience</p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We love hearing from our users! If you have any questions, feedback, or just want to say hello, feel free to reach out to our friendly support team.
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
