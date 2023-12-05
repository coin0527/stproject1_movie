import styled from "styled-components";
import { IMG_NOT } from "./Setcons";

const Wrap = styled.div`
  background: url(${IMG_NOT}) no-repeat center / cover;
  width: 500px;
  max-width: 300px;
  height: 300px;
`;

export const NoImage = () => {
  return <Wrap></Wrap>;
};
