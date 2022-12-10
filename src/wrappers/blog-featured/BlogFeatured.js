import PropTypes from "prop-types";
import React, { useEffect,useState  } from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
// import SectionTitle from "../../components/section-title/SectionTitle";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";


const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {


  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axiosConfig
  .get(`/user/active_blog_category`)
  .then((response) => {
    console.log(response.data.data);
    if(response.data.status === true){
      setBlogData(response.data.data)
    }
  })
  .catch((error) => {
    console.log(error);
  });
  }, []);


  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* <SectionTitle
          titleText="OUR BLOG"
          positionClass="text-center"
          spaceClass="mb-55"
        /> */}
         <div className="heading mt-70">
              <h2>Blogs </h2>
              <img src={textbottom} alt=""/>
          </div>
         <div className="row">
                {blogData &&
                  blogData.map((single, key) => {
                    return (
                     
                      <BlogFeaturedSingle
                        data={single}
                        key={key}
                        sliderClass="swiper-slide rtt"
                      />
                    );
                  })}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeatured;
