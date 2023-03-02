import React from "react";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";
// import FirstSectiontwo from "../../wrappers/content-home/FirstSectiontwo";
// import FirstSectiontree from "../../wrappers/content-home/FirstSectiontree";
// import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";

// import SecondSection from "../../wrappers/content-home/SecondSection";
// import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import LayoutOne from "../../layouts/LayoutOne";
// import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";
// import TabProductSix from "../../wrappers/product/TabProductSix";
// import FirstSection from "../../wrappers/content-home/FirstSection";
// import AnimateSection from "../../wrappers/content-home/AnimateSection";
// import ThirdSection from "../../wrappers/content-home/ThirdSection";
// import FourthSection from "../../wrappers/content-home/FourthSection";
// import MapSection from "../../wrappers/content-home/MapSection";
// import FifthSection from "../../wrappers/content-home/FifthSection";
// import PredictionallHome from "../../components/astrology/predictionallhome"
import OurWorkFlow from "../../components/astrology/ourworkflow"
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import AboutUs from "../../components/astrology/aboutus";
import FeatureIconSix from "../../wrappers/feature-icon/FeatureIconSix";
import SectionPooja from "../../components/astrology/sectionpooja";
// import AstroTeam from "../../components/astrology/astroteam";
import SliderList from "../../components/astrology/sliderlist";
import SliderYouTubeList from "../../components/astrology/sliderYouTubeVideo";
// import ServiceList from "../../components/astrology/ServiceList";
import OurService from "../../components/astrology/OurService";


const HomeFurnitureTwo = () => {
  return (
    <LayoutOne headerTop="visible">

      {/* hero slider */}
      <HeroSliderTwentyNine />

      {/* First Section */}

      <OurWorkFlow />
      {/* Second section */}

      {/* feature text */}
      <FeatureIconSix spaceBottomClass="pb-30" spaceTopClass="pt-30" />

      <OurService />


      <AboutUs />
      {/* abutus */}

      {/* <PredictionallHome /> */}
      {/* third section */}



      {/* <FirstSectiontwo /> */}
      {/* Second Store */}

      {/* <FirstSectiontree /> */}
      {/* <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}
      <SliderList />
      {/* <SliderYouTubeList /> */}

      <SectionPooja />
      {/* third section */}

      {/* Product slider */}
      {/* <SecondSection /> */}
      {/* Browse by category */}
      {/* <ByCategory /> */}
      {/* newsletter */}
      {/* <NewsletterTwo spaceBottomClass="pb-100" /> */}

      {/* fun fact */}
      <FunFactOne
        spaceTopClass="pt-30"
        spaceBottomClass="pb-30"

      />

      {/* testimonial */}
      <TestimonialOne
        spaceTopClass="pt-95"
        spaceBottomClass="pb-95"
        bgColorClass="bg-gray-3"
      />

      {/* blog featured */}

      <BlogFeatured spaceBottomClass="pb-55" />

    </LayoutOne>
  );
};

export default HomeFurnitureTwo;
