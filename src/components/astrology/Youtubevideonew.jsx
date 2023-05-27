import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const Youtubevideonew = ({ data, sliderClass, sliderdemoClass }) => {
  const [userId, setUserId] = useState("");
  const [bestAstrology, setBestAstrology] = useState(data);

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
      <iframe
        // style={{ position: "relative !important" }}
        // key={bestAstrology?._id}
        className="vdl-l swiper-slide"
        // sliderdemoClass={sliderdemoClass}
        src={`https://www.youtube.com/embed/${bestAstrology?.youtube_link}`}
      ></iframe>
    </div>
  );
};

Youtubevideonew.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default Youtubevideonew;
