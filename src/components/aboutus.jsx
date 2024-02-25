import React from "react";
import img1 from "../assets/arcade_team1.jpg";
import img2 from "../assets/arcade_team2.jpg";
import img3 from "../assets/arcade_team3.jpg";
import "../styles/About.css";

function Services() {
  let message = `Add Text Here`;
  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title nostalgi-arcade">NOSTALGI ARCADE</h2>

            <p class="section-title">{message}</p>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="team-item">
              <img src={img1} class="team-img" alt="pic" />
              <h3>YURI ZANINI</h3>
              <div class="team-info">
                <p>CEO</p>
              </div >
              <p>Add text here</p>

              <ul class="team-icon">
                <li>
                  <a href="https://instagram.com" class="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="team-item">
              <img src={img1} class="team-img" alt="pic" />

              <h3>VIDA LIMA</h3>

              <div class="team-info">
                <p>Game Developer</p>
              </div>

              <p>Add text here</p>

              <ul class="team-icon">
                <li>
                  <a href="https://instagram.com" class="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="team-item">
              <img src={img1} class="team-img" alt="pic" />

              <h3>AUGUSTO FREIRE</h3>

              <div class="team-info">
                <p>Developer</p>
              </div>

              <p>Add text here</p>

              <ul class="team-icon">
                <li>
                  <a href="https://instagram.com" class="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="team-item">
              <img src={img1} class="team-img" alt="pic" />
              <h3>DARIO BETANCOURTH</h3>
              <div class="team-info">
                <p>Developer</p>
              </div>
              <p>Add text here</p>

              <ul class="team-icon">
                <li>
                  <a href="https://instagram.com" class="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="team-item">
              <img src={img1} class="team-img" alt="pic" />
              <h3>JACK AGUILERA</h3>
              <div class="team-info">
                <p>Developer</p>
              </div>
              <p>Add text here</p>

              <ul class="team-icon">
                <li>
                  <a href="https://instagram.com" class="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="team-item">
              <img src={img1} class="team-img" alt="pic" />
              <h3>KEVIN HARO</h3>
              <div class="team-info">
                <p>Developer</p>
              </div>
              <p>Add text here</p>

              <ul class="team-icon">
                <li>
                  <a href="https://instagram.com" class="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="team-item">
              <img src={img1} class="team-img" alt="pic" />
              <h3>ADRIAN</h3>
              <div class="team-info">
                <p>Developer</p>
              </div>
              <p>Add text here</p>

              <ul class="team-icon">
                <li>
                  <a href="https://instagram.com" class="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" class="facebook">
                    <i class="fa fa-facebook"></i>
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
