import React from "react";
import styled from "styled-components";
import { ShowMovie } from "./ShowMovie";

const SlideMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideMenuContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const SlideMenuPage = ({ isOpen, onClose, movieData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <SlideMenuContainer>
      <SlideMenuContent>
        <ShowMovie movieData={movieData} />
        <button onClick={onClose}>Close</button>
      </SlideMenuContent>
    </SlideMenuContainer>
  );
};

export default SlideMenuPage;
