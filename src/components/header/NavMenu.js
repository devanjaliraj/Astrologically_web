import Axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategory = () => {
    Axios.get(`http://13.235.180.192:8000/admin/getallCategory`)
      .then((response) => {
        console.log("5555555", response.data.data);
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
          </li>

          <li>
            <Link to="/kundaliform">Kundli Matching</Link>
          </li>

          <li>
            <Link to="/freekundli"> Free Kundli</Link>
          </li>

          <li>
            <Link to="/allastrologerlist">Talk Astrologer</Link>
          </li>

          <li>
            <Link to="/allastrochatlist">Chat Astrologer</Link>
          </li>

          <li>
            <Link>Horoscopes</Link>
            <ul className="submenu">
              {categoryList?.map((cat) => (
                <li className="" key={cat._id}>
                  <Link to={process.env.PUBLIC_URL + "/heroscopestwo"}>
                    {cat?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="">
            <Link to={process.env.PUBLIC_URL + "/astromallList"}>
              {/* {strings["Monthly Horoscope"]} */}
              Astromall
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
