import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,

} from "reactstrap";
import astro3 from "../../assets/img/team/astro3.jpg";

export default function AstroProfileVideo() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>



            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>




        </Slider>
    );
}