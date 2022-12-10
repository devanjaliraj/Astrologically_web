import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import astro3 from "../../assets/img/team/astro3.jpg";

const SliderDemo = ({ data, sliderClass, sliderdemoClass }) => {
  const [userId, setUserId] = useState("");
  const [bestAstrology, setBestAstrology] = useState(data);

  // useEffect(() => {
  //   var user_id = localStorage.getItem("user_id");
  //   setUserId(user_id);
  // });

  useEffect(() => {
    setBestAstrology(data);
  }, [data]);

  // console.log('@@@',data)

  return (
    <div
      className={`${
        sliderdemoClass ? sliderdemoClass : " slider-demo"
      } text-center ${sliderClass ? sliderClass : ""} st-hit`}
    >
      {/* <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p className="st-testmonial">{data.content}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div> */}

      <div className="image-flip">
        <div className="mainflip flip-0">
          <div className="frontside">
            <Link to={"/astrologerdetail/" + data._id}>
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img src={data?.img} alt="" />
                  </p>
                  <h4 className="card-title">{data?.fullname}</h4>
                  <ul className="mb-3">
                    <li>
                      Specility: <span>{data?.all_skills}</span>
                    </li>
                    <li>
                      Language: <span>{data?.language}</span>
                    </li>
                    <li>
                      Experience: <span>{data?.exp_in_years}</span>
                    </li>
                    <li>
                      Call Rate:{" "}
                      <span>
                        {data?.callCharge}/{data?.conrubute_hrs}
                      </span>
                    </li>
                  </ul>
                  <Link className="btn btn-primary btn-sm st-d">
                    {data?.status}
                  </Link>
                  <Link className="btn btn-primary btn-sm">
                    <i class="fa fa-phone"></i> Call Now
                    <small>
                      {/* / 20{" "}
                                      <i class="fa fa-inr" aria-hidden="true">
                                        {data.conrubute_hrs}
                                      </i>{" "}
                                      per Hour */}
                    </small>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderDemo.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default SliderDemo;
