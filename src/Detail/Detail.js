import styled from "styled-components";
import { useEffect, useState } from "react";
import { MovieDetail } from "../api";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../components/Setcons";
import { Loading } from "../components/Loading";

const Wrap = styled.div``;

const Con = styled.div`
  display: flex;
  padding: 100px 5%;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const Coverbg = styled.div`
  width: 100%;
  max-width: 50%;
  height: 700px;
  background: url(${IMG_URL}/w1280/${(props) => props.$BgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 500px) {
    max-width: 100%;
    height: 500px;
    margin: 0 0 20px 0;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5%;
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 35px;
  }
`;
const Semicon = styled.div``;
const Rated = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    text-align: center;
  }
`;
const Geners = styled.ul`
  display: flex;
  li {
    list-style: disc;
    margin: 0px 10px 30px 30px;
    @media screen and (max-width: 500px) {
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
    }
  }
`;
const RunTime = styled.div`
  letter-spacing: -1px;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const Line = styled.div`
  width: 80%;
  border: 1px solid white;
  opacity: 0.4;
  margin: 30px 0 30px 0;
  @media screen and (max-width: 500px), (max-width: 1024px) {
    width: 100%;
  }
`;
const Desc = styled.div`
  line-height: 30px;
  opacity: 0.6;
  max-width: 70%;
  width: 100%;
  padding-top: 30px;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    text-align: center;
    max-width: 100%;
  }
`;
export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await MovieDetail(id);
        setDetailData(data);
        setLoad(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {load ? (
        <Loading />
      ) : (
        <Wrap>
          <Con>
            <Coverbg $BgUrl={detailData.poster_path} />
            <Container>
              <Title> {detailData.title} </Title>
              <Semicon>
                <Geners>
                  {detailData.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </Geners>
                <Rated> 평점 {Math.round(detailData.vote_average)} </Rated>
                <RunTime> {detailData.runtime}min </RunTime>
              </Semicon>
              <Line />
              <Desc> {detailData.overview} </Desc>
            </Container>
          </Con>
        </Wrap>
      )}
    </div>
  );
};
