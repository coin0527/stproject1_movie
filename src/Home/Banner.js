import styled from "styled-components";
import { IMG_URL } from "../components/Setcons";

const Wrap = styled.div`
  width: 100%;
  height: 400px;
  padding: 300px 5%;
  background-color: lightgray;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  position: relative;
  h3,
  p {
    position: relative;
  }
  h3 {
    width: 100%;
    max-width: 700px;
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
  }
  p {
    width: 100%;
    max-width: 700px;
    font-size: 19px;
    font-weight: 400;
    opacity: 0.8;
    letter-spacing: 1px;
    line-height: 33px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
const Gradients = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7) 30%,
    rgba(0, 0, 0, 0) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Banner = ({ data }) => {
  const truncatedOverview = data.overview.substring(0, 100);
  const displayedOverview =
    data.overview.length > 300 ? truncatedOverview + "..." : data.overview;
  // 오버뷰 수 제한
  return (
    <Wrap $bgUrl={data.backdrop_path}>
      <Gradients />
      <h3>{data.title}</h3>
      <p>{displayedOverview}</p>
    </Wrap>
  );
};
