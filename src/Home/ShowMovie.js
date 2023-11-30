import styled from "styled-components";
import { IMG_URL } from "../components/Setcons";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 10px 5%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;
const CoverBG = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;
const BgTitle = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;
export const ShowMovie = ({ movieData }) => {
  return (
    <Wrap>
      {movieData.map((data) => (
        <div key={data.id}>
          <Link to={`/detail/${data.id}`}>
            <CoverBG $bgUrl={data.poster_path}></CoverBG>
            <BgTitle>{data.title}</BgTitle>
          </Link>
        </div>
      ))}
    </Wrap>
  );
};
