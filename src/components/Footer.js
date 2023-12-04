import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
`;

const ScrollTop = styled.button`
  all: unset;
  border: 1px solid white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 60px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  background-color: #eee;
  color: black;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.7;
`;

export const Footer = () => {
  const [isVisible, setIsvisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const gototop = 500;

    setIsvisible(scrollY > gototop);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      &copy;JMovie
      {isVisible && (
        <ScrollTop onClick={scrollToTop}>
          <h3>UP</h3>
        </ScrollTop>
      )}
    </Container>
  );
};
