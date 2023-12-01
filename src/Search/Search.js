import styled from "styled-components";

const Wrap = styled.div`
  padding: 150px 150px 150px 500px;
  display: flex;
`;
const Coverbg = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid white;
  margin-right: 100px;
`;
const Con = styled.div``;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const Geners = styled.ul`
  margin-bottom: 30px;
  display: flex;
  li {
    list-style: disc;
  }
`;
const Desc = styled.div``;

export const Search = () => {
  return (
    <Wrap>
      <Coverbg />
      <Con>
        <Title> 타이틀 </Title>
        <Geners> 장르 </Geners>
        <Desc> 줄거리 </Desc>
      </Con>
    </Wrap>
  );
};
