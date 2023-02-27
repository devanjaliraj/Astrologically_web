import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import axios from "axios"
// import sliderData from "../../data/hero-sliders/hero-slider-twenty-nine.json";

import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";

const HeroSliderTwentyNine = () => {
  const [banner, setBanner] = useState([])
  useEffect(() => {
    axios
      .get("http://13.234.48.35:8000/admin/getbanner")
      .then((response) => {
        console.log(response.data.data);
        setBanner(response.data.data);


      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  }, [])
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {banner &&
            banner?.map((single, key) => {
              return (
                <HeroSliderTwentyNineSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderTwentyNine;
