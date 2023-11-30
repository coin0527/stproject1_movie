import styled from "styled-components";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { MovieDetail } from "../api";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../components/Setcons";
import { Loading } from "../components/Loading";
import { Footer } from "../components/Footer";

const Wrap = styled.div`
  padding: 25px 5%;
`;

const Con = styled.div`
  display: flex;
  margin-top: 50px;
`;
const Coverbg = styled.div`
  width: 1300px;
  height: 700px;
  margin-right: 200px;
  background: url(${IMG_URL}/w1280/${(props) => props.$BgUrl}) no-repeat center /
    cover;
`;
const Container = styled.div`
  display: grid;
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 50px;
`;
const Semicon = styled.div``;
const Rated = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
const Geners = styled.ul`
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;
const RunTime = styled.div`
  letter-spacing: -1px;
`;
const Line = styled.div`
  width: 100%;
  border: 1px solid white;
  opacity: 0.4;
  margin: 30px 0 30px 0;
`;
const Desc = styled.div``;
export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await MovieDetail(id);
        setDetailData(data);
        setLoad(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    })();
  }, []);
  return (
    <div>
      {load ? (
        <Loading />
      ) : (
        <Wrap>
          <Header />
          <Con>
            <Coverbg $BgUrl={detailData.poster_path} />
            <Container>
              <Title> {detailData.title} </Title>
              <Semicon>
                <Rated> 평점 {Math.round(detailData.vote_average)} </Rated>
                <Geners>
                  {detailData.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </Geners>
                <RunTime> {detailData.runtime}min </RunTime>
              </Semicon>
              <Line />
              <Desc> {detailData.overview} </Desc>
            </Container>
          </Con>
          <Footer />
        </Wrap>
      )}
    </div>
  );
};
