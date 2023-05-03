import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import handbgtwo from "../../assets/img/handbgone .png";
import handbgone from "../../assets/img/handbgtwo .png";
import axiosConfig from "../../axiosConfig";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const HeroSliderTwentyNineSingle = ({ data, sliderClass }) => {
  let history = useHistory();
  useEffect(() => {
    console.log("banner value", data);
    console.log(sliderClass);
  }, []);
  const handlenew = (ele) => {
    console.log("objectsdafsaffffffffffsdfsdsdff", ele);
    // history.push("/allastrologerlist");
  };

  return (
    <>
      {/* <Link to={`/${data?.root}`}> */}
      <div>
        <div
          id="clickimageback"
          className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img  ${
            sliderClass ? sliderClass : ""
          }`}
          style={{
            backgroundImage: `url(${data?.banner_img})`,
            cursor: "pointer",
          }}
          // style={{
          //   backgroundImage: `url(${
          //     process.env.PUBLIC_URL + data?.banner_img
          //   })`,
          //   cursor: "pointer",
          // }}
        >
          <div onClick={handlenew(data)} className="container">
            <div className="row">
              <div
                onClick={handlenew(data)}
                className="col-xl-6 col-lg-7 col-md-8 col-12"
              >
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
                {/* <Button size="sm" onClick={handlenew(data)} color="primary">
                  Click Me
                </Button>
                <Button size="sm" onClick={handlenew(data)} color="primary">
                  Click Me
                </Button> */}
              </div>
              <div className="col-xl-6 col-lg-7 col-md-8 col-12">
                <img src={handbgone} className="st-1" alt="" />
                <img src={handbgtwo} className="st-2" alt="" />
                {/* <Button size="sm" onClick={handlenew(data)} color="primary">
                  Click Me
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

HeroSliderTwentyNineSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderTwentyNineSingle;
