import styled from "styled-components";
import { IMG_NOT } from "./Setcons";

const Wrap = styled.div`
  background: url(${IMG_NOT}) no-repeat center / cover;
  width: 100%;
  max-width: 100%;
  height: 300px;
  @media screen and (max-width: 500px) {
    height: 150px;
  }
`;

export const NoImage = () => {
  return <Wrap></Wrap>;
};
