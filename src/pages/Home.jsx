import React from "react";
import Navbar from "../components/Navbar";
import admin from "./../image/admin.JPG";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-secondary">
      <Navbar />
      <MainSection />
    </div>
  );
}

const MainSection = () => {
  return (
    <>
      <div className="w-full max-h-screen relative">
        <section id="#main" className="w-full h-full flex flex-row">
          <div className="flex-1">
            <img src={admin} alt="" className="feature-image" />
          </div>
          <div className="flex-1">
            <p>
              I'm a passionate and innovative web developer dedicated to
              transforming ideas into captivating digital experiences. With a
              keen eye for detail and a commitment to excellence, I bring your
              visions to life through clean, elegant, and functional websites.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
