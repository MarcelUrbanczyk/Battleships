import { styled } from "styled-components";

export const Block = styled.div`
  background-color: teal;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  height: 40px;
  transition: 0.3s;
  width: 40px;
  &:hover {
    background-color: #006666;
    transform: scale(1.1);
  }
  @media (max-width: 1250px) {
    height: 35px;
    width: 35px;
  }
  @media (max-width: 1150px) {
    height: 50px;
    width: 50px;
  }
  @media (max-width: 550px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

export const Container = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 40px 40px;
  width: 400px;
  &:hover {
    cursor: crosshair;
  }
  @media (max-width: 1250px) {
    width: 350px;
  }
  @media (max-width: 1150px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const Header = styled.h2`
  color: white;
  font-size: 36px;
  font-weight: 400;
  margin: 10px;
  text-align: center;
  white-space: wrap;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
