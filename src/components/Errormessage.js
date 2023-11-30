import styled from "styled-components";

const Alam = styled.span`
  color: crimson;
  font-weight: 500;
`;

export const ErrorMessage = (Alams) => {
  return <Alam> {Alams} </Alam>;
};
