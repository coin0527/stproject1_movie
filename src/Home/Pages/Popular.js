import styled from "styled-components";
import { Banner } from "../Banner";
import { useEffect, useState } from "react";
import { ShowMovie } from "../ShowMovie";
import { Link } from "react-router-dom";
import { popular } from "../../api";
import { Loading } from "../../components/Loading";

const Wrap = styled.div``;
const Mainform = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 50px 5%;
  font-size: 50px;
  font-weight: 600;
`;
const Top = styled.div`
  position: fixed;
  bottom: 50px;
  right: 100px;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

export const Popular = () => {
  const [popularData, setPopularData] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { results: pops } = await popular();
        setPopularData(pops);
        setLoad(false);
      } catch (error) {
        console.log("Error : " + error);
      }
    })();
  }, []);
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div>
          <Wrap>
            {popularData && <Banner data={popularData[0]} />}
            <Mainform> 인기있는 영화 </Mainform>
            <ShowMovie movieData={popularData} />
          </Wrap>
        </div>
      )}
    </>
  );
};
