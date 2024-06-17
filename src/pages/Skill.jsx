import React from 'react';
import html from './../image/html.png';
import css from './../image/css.png';
import js from './../image/js.png';
import react from './../image/react.png';


export default function Skill () {
  return(
    <>
      <section className="skills">
        <div className="skills--image">
          <h4 className='skills--image_heading'>Tech Stack</h4>
          <img src={html} alt="html--logo" />
          <img src={css}  alt="css--logo"/>
          <img src={js} alt="js--logo"/>
          <img src={react}  alt="react--logo"/>
        </div>
      </section>
    </>
    
  );
}