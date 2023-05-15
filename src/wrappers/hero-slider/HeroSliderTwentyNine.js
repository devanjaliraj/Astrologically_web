import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import axios from "axios";

import handbgtwo from "../../assets/img/handbgone .png";
import handbgone from "../../assets/img/handbgtwo .png";
import { useHistory } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap";

import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";

const HeroSliderTwentyNine = ({ props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const history = useHistory();

  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get("http://65.2.175.154:8000/admin/getbanner")
      .then((response) => {
        console.log(response.data.data);
        setBanner(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response);
      });
  }, []);
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
    ),
  };
  const handlechangeview = (ele) => {
    console.log("anujesh", ele);
    history.push(`/${ele?.root}`);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === banner?.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? banner?.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div>
        <style>
          {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
        </style>
        <Carousel
          style={{ cursor: "pointer" }}
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={banner}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {banner?.map((item) => (
            <CarouselItem
              onClick={() => handlechangeview(item)}
              className="custom-tag"
              tag="div"
              key={item?._id}
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
            >
              {" "}
              <CarouselCaption
                className="text-danger newclass"
                captionText={item?.banner_title}
                captionHeader={item?.banner_title}
              />
              <img
                onClick={() => handlechangeview(item)}
                width="100%"
                src={item.banner_img}
              />
              <div onClick={() => handlechangeview(item)} className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-8 col-12">
                    <img src={handbgone} className="st-1" alt="" />
                    <img src={handbgtwo} className="st-2" alt="" />
                    <Button
                      size="sm"
                      onClick={() => handlechangeview(item)}
                      color="primary"
                    >
                      Click Me
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <div
        // onClick={handlechangeview}
        style={{ cursor: "pointer" }}
        className="slider-area"
      >
        {/* <div className="slider-active nav-style-1">
          <Swiper {...params}>
            {banner &&
              banner?.map((single, key) => (
                <div key={single?._id} onClick={() => handlechangeview(single)}>
                  <HeroSliderTwentyNineSingle
                    data={single}
                    key={key}
                    sliderClass="swiper-slide"
                  />
                </div>
              ))}
          </Swiper>
        </div> */}
      </div>
    </>
  );
};

export default HeroSliderTwentyNine;
