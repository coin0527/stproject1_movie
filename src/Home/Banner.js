import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid red;
  background-color: lightgray;
`;
const Gradients = styled.div``;
export const Banner = ({ data }) => {
  return (
    <Wrap>
      <Gradients />
      <h3></h3>
      <p></p>
    </Wrap>
  );
};
