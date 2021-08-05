import React from "react";
import Swiper from "swiper";
import "./gallery-slider.css";

export default function GallerySlider() {
  const swiper = new Swiper(".swiper-container", {
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true,
    paginationClickable: true,
    watchSlidesProgress: true,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <>
      <div classNameName="introcontainer">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="cards">
                <div className="card ong">
                  <img src="https://assets.codepen.io/5286152/pexels-wendy-wei-1886641_1.jpg" />
                  <div className="text"></div>
                  <div className="title-box">
                    <h1>CREATIVE COLLECTIVE.</h1>
                    <p>
                      The future of the creative industry starts here, by
                      Creatives, for Creatives.
                    </p>
                    <div className="seperator"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cards">
                <div className="card two">
                  <img
                    src="https://assets.codepen.io/5286152/BW-DJ.jpeg"
                    alt=""
                  />
                  <div className="text"></div>
                  <div className="title-box">
                    <h1>FOR ARTISTS.</h1>
                    <p>
                      Learn, grow, and develop your skills -- Access tools that
                      accelerate your career and build your audience.
                    </p>
                    <div className="seperator"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cards">
                <div className="card three">
                  <img
                    src="https://assets.codepen.io/5286152/stephany-lorena-TZ1A9R_WzGs-unsplash.jpg"
                    alt=""
                  />
                  <div className="text"></div>

                  <div className="title-box">
                    <h1>FOR CREATIVES.</h1>
                    <p>
                      Share, distribute, and promote your artwork. We showcase
                      and highlight creativity, helping you find and connect
                      with clients and your fans.
                    </p>
                    <div className="seperator"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="cards">
                <div className="card four">
                  <img
                    src="https://assets.codepen.io/5286152/clark-van-der-beken-1KBCgRD8BDc-unsplash.jpg"
                    alt=""
                  />
                  <div className="text"></div>

                  <div className="title-box">
                    <h1>FOR DESIGNERS.</h1>
                    <p>
                      {" "}
                      We design your digital presence and collaborate to develop
                      your ideas into engaging, interactive, art and visual
                      experiences that keep you in control and in the spotlight.
                    </p>
                    <div className="seperator"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-arrows">
            <div className="swiper-button-prev">
              <span></span>
            </div>
            <div className="swiper-button-next">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
