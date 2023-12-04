import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { useState } from "react";
import "../style/styles.css";
// import { useRef } from "react";
// import { useEffect } from "react";

const Wrap = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  top: 30px;
  left: 100px;
  @media screen and (max-width: 500px) {
    left: 30px;
  }
`;
const User = styled.div`
  font-size: 30px;
  position: absolute;
  top: 35px;
  right: 150px;
  margin-right: 30px;
  @media screen and (max-width: 500px) {
    top: 30px;
    right: 50px;
  }
`;
const Con = styled.div`
  display: flex;
`;
const Line = styled.div`
  width: 100%;
  border: 1px solid white;
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const headerRef = useRef();

  // const scrollHandler = () => {
  //   const pageY = window.scrollY;

  //   if (pageY > 500) {
  //     headerRef.current.style.position = "fixed";
  //     headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
  //     headerRef.current.style.backdropFilter = "blur(2px)";
  //   } else {
  //     headerRef.current.style.position = "absolute";
  //     headerRef.current.style.backgroundColor = "transparent";
  //     headerRef.current.style.backdropFilter = "blur(0px)";
  //   }
  // };

  // useEffect(() => {
  //   return window.addEventListener("scroll", scrollHandler);
  // });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrap>
      <Logo>
        <Link to={routes.home}>JMovie</Link>
      </Logo>

      <Con>
        <div className="container">
          <FontAwesomeIcon
            icon={faBars}
            className="menu-button"
            onClick={toggleMenu}
            style={{
              cursor: "pointer",
              fontSize: "30px",
            }}
          />
          <div className={`slide-menu ${isMenuOpen ? "open" : ""}`}>
            <h3> 메뉴 </h3>
            <Line />
            <Link to={"/popular"}>
              <p> Populars </p>
            </Link>
            <Link to={"/upcoming"}>
              <p> Upcoming </p>
            </Link>
            <Link to={"/rated"}>
              <p> Rated </p>
            </Link>
            <Line />
            <Link to={"/pagenotfound"}>
              <p> Gener </p>
            </Link>
          </div>
        </div>
        <User>
          <Link to={"/search"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                marginRight: "30px",
              }}
            />
          </Link>
          <Link to={"/login"}>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                cursor: "pointer",
                fontSize: "24px",
              }}
            />
          </Link>
        </User>
      </Con>
    </Wrap>
  );
};
