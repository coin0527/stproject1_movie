import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "./Banner";

const Wrap = styled.div``;
const Mainform = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 50px 5%;
  font-size: 30px;
`;

export const Home = () => {
  return (
    <Wrap>
      <Header />
      <Banner />
      <Mainform> 상영중인 영화 </Mainform>
      <Footer />
    </Wrap>
  );
};
