import PropTypes from "prop-types";
import Swiper from "react-id-swiper";
// import "swiper/swiper.scss";
// import "swiper/css/swiper.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import astro3 from "../../assets/img/team/astro3.jpg";
import ReactPlayer from "react-player";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import Youtubevideonew from "./Youtubevideonew";

const SliderYouTubeVideo = ({
  data,
  sliderClass,
  slideryoutubevideoClass,
  sliderdemoClass,
}) => {
  const [userId, setUserId] = useState("");
  const [bestAstrology, setBestAstrology] = useState(data);
  const [youtubelist, setyoutubelist] = useState([]);

  // useEffect(() => {
  //   var user_id = localStorage.getItem("user_id");
  //   setUserId(user_id);
  // });
  const youtubedata = () => {
    axiosConfig
      .get(`/admin/video_list`)
      .then((res) => {
        setyoutubelist(res?.data?.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const settings = {
    loop: true,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav gt-1">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav gt-2">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  useEffect(() => {
    youtubedata();
    setBestAstrology(data);
  }, [data]);

  return (
    <div className="mt-20 mb-50">
      <Container>
        <div className="heading">
          <h2>Watch Astrologers Video</h2>
          <img src={textbottom} alt="" />
        </div>

        <Row>
          <Swiper {...settings}>
            {youtubelist?.map((single, key) => (
              <div key={single?._id} className="v-bx">
                <Youtubevideonew
                  data={single}
                  key={key}
                  sliderClass="swiper-slide rtt"
                  sliderdemoClass={sliderdemoClass}
                />
                {/* <iframe
                  style={{ position: "relative !important" }}
                  key={single?._id}
                  className="vdl-l swiper-slide"
                  sliderdemoClass={sliderdemoClass}
                  src={`https://www.youtube.com/embed/${single?.youtube_link}`}
                ></iframe> */}
              </div>
            ))}
          </Swiper>
        </Row>
      </Container>
      <hr></hr>
    </div>
  );
};

SliderYouTubeVideo.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default SliderYouTubeVideo;
