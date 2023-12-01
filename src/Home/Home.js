import styled from "styled-components";
import { Banner } from "./Banner";
import { useEffect, useState } from "react";
import { nowPlaying, popular, toplated, upcoming } from "../api";
import { Loading } from "../components/Loading";
import { ShowMovie } from "./ShowMovie";

const Wrap = styled.div``;
const Mainform = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 50px 5%;
  font-size: 50px;
  font-weight: 600;
`;

export const Home = () => {
  const [nowPlayingData, setNowplayingData] = useState();
  // const [popularData, setPopularData] = useState();
  // const [toplatedData, setToplatedData] = useState();
  // const [upcomingData, setUpcomingData] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowplayingData(nowResults);

        // const { results: populars } = await popular();
        // setPopularData(populars);

        // const { results: latings } = await toplated();
        // setToplatedData(latings);

        // const { results: upcomings } = await upcoming();
        // setUpcomingData(upcomings);
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
