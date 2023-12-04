import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-size: 75px;
`;
// const CoverBg = styled.div``;

export const Pagenotfound = () => {
  return <Wrap>Page Not Found 404 Error !!</Wrap>;
};
