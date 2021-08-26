import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./gallery-slider.css";

// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);

export default function GallerySlider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        className="introcontainer"
        centeredSlides={true}
        paginationClickable={true}
        watchSlidesProgress={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
      >
        <div className="introcontainer">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slider">
                <div className="cards">
                  <div className="card ong">
                    <img src="https://assets.codepen.io/5286152/pexels-wendy-wei-1886641_1.jpg" />
                    <div className="text"></div>
                    <div className="title-box">
                      <h1 data-swiper-parallax="-300">CREATIVE COLLECTIVE.</h1>
                      <p data-swiper-parallax="-200">
                        The future of the creative industry starts here, by
                        Creatives, for Creatives.
                      </p>
                      <div className="seperator"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slider">
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
                        Learn, grow, and develop your skills -- Access tools
                        that accelerate your career and build your audience.
                      </p>
                      <div className="seperator"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <div className="cards">
                  <div className="card three">
                    <img
                      src="https://assets.codepen.io/5286152/stephany-lorena-TZ1A9R_WzGs-unsplash.jpg"
                      alt=""
                    />
                    <div className="text"></div>

                    <div className="title-box">
                      <h1 data-swiper-parallax="-300">FOR CREATIVES.</h1>
                      <p data-swiper-parallax="-200">
                        Share, distribute, and promote your artwork. We showcase
                        and highlight creativity, helping you find and connect
                        with clients and your fans.
                      </p>
                      <div className="seperator"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slider">
                <div className="cards">
                  <div className="card four">
                    <img
                      src="https://assets.codepen.io/5286152/clark-van-der-beken-1KBCgRD8BDc-unsplash.jpg"
                      alt=""
                    />
                    <div className="text"></div>

                    <div className="title-box">
                      <h1 data-swiper-parallax="-300">FOR DESIGNERS.</h1>
                      <p data-swiper-parallax="-200">
                        {" "}
                        We design your digital presence and collaborate to
                        develop your ideas into engaging, interactive, art and
                        visual experiences that keep you in control and in the
                        spotlight.
                      </p>
                      <div className="seperator"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>

          <div className="swiper-arrows">
            <div className="swiper-button-prev">
              <span>
                <i class="fas fa-angle-double-left"></i>
              </span>
            </div>
            <div className="swiper-button-next">
              <span>
                <i class="fas fa-angle-double-right"></i>
              </span>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
