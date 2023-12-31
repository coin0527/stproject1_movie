import styled from "styled-components";
import { Banner } from "./Banner";
import { useEffect, useState } from "react";
import { nowPlaying } from "../api";
import { Loading } from "../components/Loading";
import { ShowMovie } from "./ShowMovie";

const Wrap = styled.div``;
const Mainform = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 35px;
  font-size: 50px;
  font-weight: 600;
`;

export const Home = () => {
  const [nowPlayingData, setNowplayingData] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowplayingData(nowResults);
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
            {nowPlayingData && <Banner data={nowPlayingData[0]} />}
            <Mainform> 상영중인 영화 </Mainform>
            <ShowMovie movieData={nowPlayingData} />
          </Wrap>
        </div>
      )}
    </>
  );
};
