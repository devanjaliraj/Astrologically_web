import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import Axios from "axios";
import OthePage from "../../components/astrology/OthePage";
import axiosConfig from "../../axiosConfig";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [pages, setPages] = useState([]);

  const getPages = () => {
    axiosConfig
      .get(`/admin/getPages`)
      .then((res) => {
        console.log(res.data.data);
        setPages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCategory = () => {
    Axios.get(`http://65.2.175.154:8000/admin/getallCategory`)
      .then((response) => {
        // console.log("5555555", response.data.data);
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPages();
    getCategory();
  }, []);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <h3 className="stltext">AstroVipra </h3>
            <FooterCopyright
              // footerLogo="/assets/img/logo/logo.png"

              spaceBottomClass="mb-30"
            />
          </div>
          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                 
                </ul>
              </div>
            </div>
          </div> */}

          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>Horoscope</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    {/* <Link>Horoscopes</Link> */}
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                          Daily
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                          Weekly
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                          Monthly
                        </Link>
                      </li>

                      <div className="footer-title">
                        <h3 className="mt-4">Panchang</h3>
                        <ul className="submenu">
                          <li className="">
                            <Link
                              to={process.env.PUBLIC_URL + "/basicPanchang"}
                            >
                              Basic Panchang
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              to={process.env.PUBLIC_URL + "/todayPanchang"}
                            >
                              Today Panchang
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              to={process.env.PUBLIC_URL + "/heroscopestwo"}
                            >
                              Horoscope
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* {categoryList?.map((cat) => (
                        <li className="" key={cat._id}>
                          <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                            {cat?.title}
                          </Link>
                        </li>
                      ))} */}
                    </ul>
                  </li>
                  {/* <li>
                      <Link to="/heroscopesall">Health Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Career Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Finance Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Education Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Chinese Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Lal Kitab Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Numerology Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Tarot Reading Predictions 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Festival 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>Dosh</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    {/* <h3>Dosh</h3> */}
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/ManglikDosh"}>
                          Manglik Dosh
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                          Pitra Dosh
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                          Kalsharvp Dosh
                        </Link>
                      </li>
                      {/* {categoryList?.map((cat) => (
                        <li className="" key={cat._id}>
                          <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                            {cat?.title}
                          </Link>
                        </li>
                      ))} */}
                    </ul>
                  </li>
                  {/* <li>
                      <Link to="/heroscopesall">Health Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Career Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Finance Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Education Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Chinese Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Lal Kitab Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Numerology Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Tarot Reading Predictions 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Festival 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li> */}
                </ul>
              </div>
              {pages[0]?.other === true ? (
                <>
                  <div className="footer-title mt-3">
                    <h3>Others</h3>
                  </div>
                </>
              ) : null}

              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu">
                      {pages.length > 0 ? (
                        <>
                          {pages?.map((ele) => {
                            if (ele?.status === true) {
                              return (
                                <li key={ele?._id} className="">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      `/otherpage/${ele?._id}`
                                    }
                                  >
                                    {ele?.pageName}
                                  </Link>
                                </li>
                              );
                            }
                          })}
                          {/* {pages?.map((ele) => (
                            <li key={ele?._id} className="">
                              <Link to={process.env.PUBLIC_URL + "/otherpage"}>
                                {ele?.pageName}
                              </Link>
                            </li>
                          ))} */}
                        </>
                      ) : null}
                      {/* <li className="">
                        <Link to={process.env.PUBLIC_URL + "/otherpage"}>
                          otherpage 1
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/otherpage"}>
                          otherpage 2
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/otherpage"}>
                          otherpage 3
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/otherpage"}>
                          otherpage 4
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  {/* <li>
                      <Link to="/heroscopesall">Health Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Career Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Finance Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Education Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Chinese Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Lal Kitab Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Numerology Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Tarot Reading Predictions 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Festival 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>Astrologer</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    {/* <h3>Dosh</h3> */}
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/pages/login"}>
                          Astrologer Login
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/astrologersignup"}>
                          Astrologer Register
                        </Link>
                      </li>

                      {/* {categoryList?.map((cat) => (
                        <li className="" key={cat._id}>
                          <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                            {cat?.title}
                          </Link>
                        </li>
                      ))} */}
                    </ul>
                  </li>
                  {/* <li>
                      <Link to="/heroscopesall">Health Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Career Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Finance Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Education Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Chinese Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Lal Kitab Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Numerology Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Tarot Reading Predictions 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Festival 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li> */}
                </ul>
              </div>
              <div className="footer-title mt-3">
                <h3>Book Pooja </h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    {/* <h3>Dosh</h3> */}
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/bookEvent"}>
                          Book Online Puja
                        </Link>
                      </li>
                      {/* <li className="">
                        <Link to={process.env.PUBLIC_URL + "/astrologersignup"}>
                          Astrologer Register
                        </Link>
                      </li> */}

                      {/* {categoryList?.map((cat) => (
                        <li className="" key={cat._id}>
                          <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                            {cat?.title}
                          </Link>
                        </li>
                      ))} */}
                    </ul>
                  </li>
                  {/* <li>
                      <Link to="/heroscopesall">Health Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Career Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Finance Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Education Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Chinese Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Lal Kitab Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Numerology Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Tarot Reading Predictions 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Festival 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="footer-title">
                {/* <h3>USEFUL LINKS</h3> */}
                <h3>Useful Links</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/ourservice"}>
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/kundaliform"}>
                        Match Making
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/aboutdetail"}>
                        About us
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}></Link>
                    </li>
                    <Link to={process.env.PUBLIC_URL + "/TermsOfUse"}>
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacyPolicy"}>
                      privacyPolicy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/Faq"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-8" : "col-lg-2 col-sm-6"
            }`}
          >
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
