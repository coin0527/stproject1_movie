import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

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
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const User = styled.div`
  font-size: 30px;
`;
const Con = styled.div`
  display: flex;
`;

const Sidemenu = styled.ul`
  display: flex;
  li {
    font-size: 24px;
    font-weight: 500;
    margin-left: 80px;
    text-align: center;
  }
  li:hover {
    transition-duration: 0.8s;
    color: salmon;
  }
`;
const Con2 = styled.div`
  display: flex;
`;

export const Header = () => {
  return (
    <Wrap>
      <Con2>
        <Logo>
          <Link to={routes.home}>JMovie</Link>
        </Logo>

        <Sidemenu>
          <Link to={"/popular"}>
            <li> Popular </li>
          </Link>

          <Link to={"/rated"}>
            <li> Lated </li>
          </Link>

          <Link to={""}>
            <li> Upcoming </li>
          </Link>
        </Sidemenu>
      </Con2>

      <Con>
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
                lineHeight: "50px",
              }}
            />
          </Link>
        </User>
      </Con>
    </Wrap>
  );
};
