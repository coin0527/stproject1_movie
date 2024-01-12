import styled from "styled-components";
import { Banner } from "../Banner";
import { useEffect, useState } from "react";
import { ShowMovie } from "../ShowMovie";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { toplated } from "../../api";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrap = styled.div``;
const Mainform = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 50px 5%;
  font-size: 40px;
  font-weight: 600;
  position: relative;
`;
const SlideMenu = styled.div`
  position: absolute;
  top: 110px;
  left: 50px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  border-radius: 5px;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: max-height 0.5s, opacity 0.5s ease-in-out;

  background: linear-gradient(
    180deg,
    rgba(85, 85, 85, 0.8) 0%,
    rgba(85, 85, 85, 0.6) 100%
  );
`;

const SlideMenuItem = styled(Link)`
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

export const Lated = () => {
  const [toplatedData, setToplatedData] = useState();
  const [load, setLoad] = useState(true);
  const [isSlideMenuOpen, setSlideMenuOpen] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const { results: latings } = await toplated();
        setToplatedData(latings);
        setLoad(false);
      } catch (error) {
        console.log("Error : " + error);
      }
    })();
  }, []);

  const toggleSlideMenu = () => {
    setSlideMenuOpen(!isSlideMenuOpen);
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div>
          <Wrap>
            {toplatedData.length > 0 && <Banner data={toplatedData[0]} />}
            <Mainform>
              랭킹
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  marginLeft: "20px",
                  fontSize: "40px",
                  cursor: "pointer",
                }}
                onClick={toggleSlideMenu}
              />
              <SlideMenu isOpen={isSlideMenuOpen}>
                <SlideMenuItem to="/">상영중인 영화</SlideMenuItem>
                <SlideMenuItem to="/rated">인기있는 영화</SlideMenuItem>
                <SlideMenuItem to="/upcoming">상영 예정 영화</SlideMenuItem>
              </SlideMenu>
            </Mainform>
            <ShowMovie movieData={toplatedData} />
          </Wrap>
        </div>
      )}
    </>
  );
};
