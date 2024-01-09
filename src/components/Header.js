import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import "../style/styles.css";
import { useRef } from "react";
import { useEffect } from "react";

const Wrap = styled.header`
  width: 100%;
  height: 100px;
  z-index: 10;
  a {
    color: white;
  }
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    left: 30px;
  }
`;
const User = styled.div`
  font-size: 30px;
  @media screen and (max-width: 500px) {
    top: 30px;
    right: 50px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 5%;
`;

export const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      const pageY = window.scrollY;

      if (pageY > 500) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
        headerRef.current.style.backdropFilter = "blur(2px)";
      } else {
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.backdropFilter = "blur(0px)";
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Wrap ref={headerRef}>
      <Container>
        <Logo>
          <Link to={routes.home}>JMovie</Link>
        </Logo>

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
      </Container>
    </Wrap>
  );
};
