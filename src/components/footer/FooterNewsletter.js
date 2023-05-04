import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import SubscribeEmail from "./sub-components/SubscribeEmail";
import axiosConfig from "../../axiosConfig";
const FooterNewsletter = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass,
}) => {
  const [data, setdata] = useState([]);

  const getAllData = async () => {
    await axiosConfig.get("/admin/get_socalList").then((response) => {
      console.log(response.data.data);
      let rowData = response.data.data;
      setdata(rowData);
      // this.setState({ rowData });
    });
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div
      className={`footer-widget ${spaceBottomClass ? spaceBottomClass : ""} ${
        sideMenu ? "ml-ntv5" : spaceLeftClass ? spaceLeftClass : ""
      } ${widgetColorClass ? widgetColorClass : ""}`}
    >
      {/* <div className="footer-title">
        <h3>SUBSCRIBE</h3>
      </div> */}
      <div className={`subscribe-style ${colorClass ? colorClass : ""}`}>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <div className="social-box">
          <ul>
            {/* {data?.map((ele)=>{
              if(ele.select_sslmedia==="Facebook" )
            })} */}
            <li>
              <i class="fa fa-facebook foot-icon" aria-hidden="true"></i>
              <a
                href="//www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <i class="fa fa-twitter foot-icon" aria-hidden="true"></i>

              <a
                href="//www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <i class="fa fa-instagram foot-icon" aria-hidden="true"></i>

              <a
                href="//www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <i class="fa fa-youtube-play foot-icon" aria-hidden="true"></i>
              <a
                href="//www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  colorClass: PropTypes.string,
  widgetColorClass: PropTypes.string,
};

export default FooterNewsletter;
