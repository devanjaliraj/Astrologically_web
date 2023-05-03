import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";

import astro3 from "../../assets/img/team/astro3.jpg";
import axiosConfig from "./../../axiosConfig";

export default function AstroProfileVideo({ id }) {
  const Param = useParams();
  console.log(Param);

  const [astrodata, setAstrodata] = useState([]);

  const handleastrodata = () => {
    console.log("object");
    // axiosConfig
    //   .get(``)
    //   .then((res) => {
    //     console.log(res);
    //     setAstrodata(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const getallgallary = () => {
    console.log(Param.id);
    axiosConfig
      .get(`/admin/get_astroGallery/6352904e3755959407f948a6`)
      // .get(`/admin/get_astroGallery/${Param.id}`)
      .then((res) => {
        setAstrodata(res?.data?.data);
        console.log("@@@@@", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallgallary();
    handleastrodata();
  }, []);

  var settings = {
    loop: true,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 10,

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
    watchSlidesVisibility: true,
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
  //   componentDidMount(){
  //     axiosConfig
  //     .get(`/admin/video_list`)
  //     .then((res) => {
  //       this.setState{data:res?.data?.data};
  //       console.log(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }
  return (
    <>
      <Swiper {...settings}>
        {astrodata?.map((value) => {
          {
            /* console.log(value?.image[0]); */
          }
          return (
            <Col key={value?._id} md="3" className="videoimg">
              <div key={value?._id} className="product-grid8">
                <div class="product-image8">
                  <img width={500} src={value?.image[0]} alt="" />
                </div>
              </div>
            </Col>
          );
        })}

        {/* <Col md="3" className="videoimg">
          <div className="product-grid8">
            <div class="product-image8">
              <img src={astro3} alt="" />
            </div>
          </div>
        </Col> */}
        {/* <Col md="3" className="videoimg">
        <div className="product-grid8">
          <div class="product-image8">
            
            <img src={astro3} alt="" />
            
          </div>
        </div>
      </Col> */}
        {/* <Col md="3" className="videoimg">
        <div className="product-grid8">
          <div class="product-image8">
          
            <img src={astro3} alt="" />
           
          </div>
        </div>
      </Col> */}
        {/* <Col md="3" className="videoimg">
        <div className="product-grid8">
          <div class="product-image8">
           
            <img src={astro3} alt="" />
           
          </div>
        </div>
      </Col> */}
        {/* <Col md="3" className="videoimg">
        <div className="product-grid8">
          <div class="product-image8">
            
            <img src={astro3} alt="" />
          
          </div>
        </div>
      </Col> */}
      </Swiper>
    </>
  );
}
