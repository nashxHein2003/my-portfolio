import React from 'react';
import admin from './../image/admin.JPG';


export default function Home () {
  return (
    <section className="home" id="home">
      <div className="home--image">
        <img src={admin} alt="home--img" />
      </div>
      <div className="home--text">
        <h1>Cool Front-End <span> React </span>Developer Here</h1>
        <p>I'm a passionate and innovative web developer dedicated to transforming ideas into captivating digital experiences. With a keen eye for detail and a commitment to excellence, I bring your visions to life through clean, elegant, and functional websites.</p>
        <button className="home--btn_hire">Download cv-file</button>
      </div>
    </section>
  );
}