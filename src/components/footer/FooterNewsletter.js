import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
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
            {/* facebook */}
            {data.map((ele) => {
              if (ele?.select_sslmedia == "Facebook") {
                return (
                  <span>
                    {" "}
                    <li>
                      <i
                        class="fa fa-facebook foot-icon"
                        aria-hidden="true"
                      ></i>
                      <a
                        href={ele?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Facebook</span>
                      </a>
                    </li>
                  </span>
                );
              }
            })}
            {/* Twittor */}
            {data.map((ele) => {
              if (ele?.select_sslmedia == "Twitter") {
                return (
                  <span>
                    {" "}
                    <li>
                      <i class="fa fa-twitter foot-icon" aria-hidden="true"></i>
                      <a
                        href={ele?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Twitter</span>
                      </a>
                    </li>
                  </span>
                );
              }
            })}
            {/* instagram */}
            {data.map((ele) => {
              if (ele?.select_sslmedia == "Instagram") {
                return (
                  <span>
                    {" "}
                    <li>
                      <i
                        class="fa fa-instagram foot-icon"
                        aria-hidden="true"
                      ></i>
                      <a
                        href={ele?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Instagram</span>
                      </a>
                    </li>
                  </span>
                );
              }
            })}

            {/* youtube */}
            {data.map((ele) => {
              if (ele?.select_sslmedia == "Youtube") {
                return (
                  <span>
                    {" "}
                    <li>
                      <i
                        class="fa fa-youtube-play foot-icon"
                        aria-hidden="true"
                      ></i>
                      <a
                        href={ele?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Youtube</span>
                      </a>
                    </li>
                  </span>
                );
              }
            })}
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
