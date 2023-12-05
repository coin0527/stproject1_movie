import styled from "styled-components";
import { Banner } from "../Banner";
import { useEffect, useState } from "react";
import { ShowMovie } from "../ShowMovie";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { toplated } from "../../api";

const Wrap = styled.div``;
const Mainform = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 50px 5%;
  font-size: 50px;
  font-weight: 600;
`;
const Top = styled.div`
  position: fixed;
  bottom: 50px;
  right: 100px;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

export const Lated = () => {
  const [toplatedData, setToplatedData] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { results: latings } = await toplated();
        setToplatedData(latings);
        setLoad(false);
      } catch (error) {
        console.log("Error : " + error);
      }
    })();
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div>
          <Wrap>
            {toplatedData && <Banner data={toplatedData[0]} />}
            <Mainform> 랭킹 </Mainform>
            <ShowMovie movieData={toplatedData} />
          </Wrap>
        </div>
      )}
    </>
  );
};
