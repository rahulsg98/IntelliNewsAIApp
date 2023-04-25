import React from "react";
import './About.css';
import Rahul from '../images/Rahul.png';
import Sumit from '../images/Sumit.jpg';

function About() {
  return (
    <div className="about-page">
      <div className="about-section">
        <h1>About Us</h1>
        <p>We are a team of skilled web developers dedicated to creating high-quality, responsive websites that meet our clients' unique needs. With our expertise in coding and design, we strive to deliver innovative solutions that help businesses succeed online.</p>
      </div>

      <h2 style={{ textAlign: "center" }}>Developers</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={Rahul} alt="rahul" style={{ width: "100%", height: "50vh" }} />
            <div className="container">
              <h2>Rahul Singh Gurjar</h2>
              <p className="title">Founder</p>
              <p>I have an experience in developing projects using the MERN (MongoDB, Express, React, Node.js) stack and React Native, and is skilled in creating full-stack web applications and mobile applications with these technologies.</p>
              <p>rahulsinghgurjar10000@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Sumit} alt="sumit" style={{ width: "100%", height: "50vh" }} />
            <div className="container">
              <h2>Sumit Mishra</h2>
              <p className="title">CEO</p>
              <p>With a deep understanding of the MERN stack, I bring a creative approach to building web applications, crafting intuitive user experiences and leveraging cutting-edge technologies to deliver dynamic and engaging projects.</p>
              <p>ms8815163@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
