import React, { useRef, useState } from "react";
import img1 from "../assets/Yuri.webp";
import img2 from "../assets/Vida.jpg";
import img3 from "../assets/Augusto.png";
import img4 from "../assets/Dario.jpg";
// import img5 from "../assets/Jack.webp";
// import img6 from "../assets/Kevin.webp";
// import img7 from "../assets/Adrian.webp";
import "../styles/About.css";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1711757495634";

function Services() {
  let message = `Nostalgi Arcade is more than just a destination for gaming enthusiasts; it's a portal to cherished memories and timeless fun. Step into our world and experience the magic of classic arcade games reimagined for the digital age. From the pixelated adventures of Space Invaders to the strategic battles of Tic Tac Toe, every game is a nostalgic journey back to simpler times. Our mission is to reignite the joy of gaming and foster a community united by a shared love for retro entertainment. Join us in celebrating the spirit of nostalgia and embark on an unforgettable gaming odyssey at Nostalgi Arcade.`;
  const pongRef = useRef(null);
  const [isSpeedSet, setIsSpeedSet] = useState(false);

  const handleEnterFrame = () => {
    if (!isSpeedSet) {
      pongRef.current?.setSpeed(0.5);
      setIsSpeedSet(true);
    }
  };

  return (
    <section className="section-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="animation-container">
              <Lottie
                onEnterFrame={handleEnterFrame}
                lottieRef={pongRef}
                animationData={animationData}
                style={{ width: "300px", height: "300px" }} // Increased size
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-container">
              <h2 className="section-title nostalgi-arcade text-center">
                NOSTALGI ARCADE
              </h2>{" "}
              {/* Centered title */}
              <p
                className="section-title text-center"
                style={{ fontSize: "1.5rem" }}
              >
                {message}
              </p>{" "}
              {/* Centered text */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src={img1} className="team-img" alt="pic" />
              <h3>YURI ZANINI</h3>
              <div className="team-info">
                <p>CEO</p>
              </div>
              <p>
                In addition to being a student at Ensign College, I am a
                Software Developer intern. In my free time, I enjoy dog training
                and hiking.
              </p>
              <ul className="team-icon">
                <li>
                  <a href="https://instagram.com" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src={img2} className="team-img" alt="pic" />

              <h3>VIDA LIMA</h3>

              <div className="team-info">
                <p>Game Developer</p>
              </div>

              <p>
                I'm a Software Engineering student at Ensign College passionate
                about learning and sharing knowledge with others. In my free
                time, I like to read, exercise, and enjoy public speaking, as a
                way to get out of my comfort zone.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="https://instagram.com" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src={img3} className="team-img" alt="pic" />

              <h3>AUGUSTO FREIRE</h3>

              <div className="team-info">
                <p>Developer</p>
              </div>

              <p>
                As a software engineering student, I loved being part of this
                project. My favorite game I developed is Asteroids. Being part
                of that helped me to understand this endless gaming world
                better.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="https://instagram.com" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src={img4} className="team-img" alt="pic" />
              <h3>DARIO BETANCOURTH</h3>
              <div className="team-info">
                <p>Developer</p>
              </div>
              <p>
                I'm a Software Engineering student at Ensign College, exploring
                the fascinating world of technology with a genuine interest in
                learning and sharing insights with others.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="https://instagram.com" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src={img1} className="team-img" alt="pic" />
              <h3>JACK AGUILERA</h3>
              <div className="team-info">
                <p>Developer</p>
              </div>
              <p>Add text here</p>

              <ul className="team-icon">
                <li>
                  <a href="https://instagram.com" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src={img1} className="team-img" alt="pic" />
              <h3>KEVIN HARO</h3>
              <div className="team-info">
                <p>Developer</p>
              </div>
              <p>Add text here</p>

              <ul className="team-icon">
                <li>
                  <a href="https://instagram.com" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img src={img1} className="team-img" alt="pic" />
              <h3>ADRIAN IBARRA</h3>
              <div className="team-info">
                <p>Developer</p>
              </div>
              <p>Add text here</p>

              <ul className="team-icon">
                <li>
                  <a href="https://instagram.com" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
