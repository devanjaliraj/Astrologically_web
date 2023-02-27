import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import handbgtwo from "../../assets/img/handbgone .png"
import handbgone from "../../assets/img/handbgtwo .png"
import axiosConfig from "../../axiosConfig"

const HeroSliderTwentyNineSingle = ({ data, sliderClass }) => {

  useEffect(() => {
    console.log('banner value', data)
    console.log(sliderClass)


    // axiosConfig
    //   .get("/admin/getbanner")
    //   .then((response) => {
    //     console.log(response.data.data);
    //     setBanner(response.data.data);


    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log(error.response);
    //   });
  }, [])


  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img  ${sliderClass ? sliderClass : ""
        }`}
      // style={{ backgroundImage: `url(${data?.banner_img})` }}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data?.banner_img})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <div className="slider-content-brown slider-content-2 slider-content-2--white slider-animated-1 mtt">
              <h3
                className="animated no-style"
                dangerouslySetInnerHTML={{ __html: data?.banner_title }}
              />
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn-brown btn-hover">
                {/* <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Appointment
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <img src={handbgone} className="st-1" alt="" />
            <img src={handbgtwo} className="st-2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwentyNineSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderTwentyNineSingle;
