import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "./Banner";
import { useEffect, useState } from "react";
import { nowPlaying, popular, toplated, upcoming } from "../api";
import { Loading } from "../components/Loading";

const Wrap = styled.div``;
const Mainform = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 50px 5%;
  font-size: 30px;
`;

export const Home = () => {
  const [nowPlayingData, setNowplayingData] = useState();
  const [popularData, setPopularData] = useState();
  const [toplatedData, setToplatedData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowplayingData(nowResults);

        const { results: populars } = await popular();
        setPopularData(populars);

        const { results: latings } = await toplated();
        setToplatedData(latings);

        const { results: upcomings } = await upcoming();
        setUpcomingData(upcomings);
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
            <Header />
            {nowPlayingData && <Banner data={nowPlayingData[0]} />}
            <Mainform> 상영중인 영화 </Mainform>
            <Footer />
          </Wrap>
        </div>
      )}
    </>
  );
};
