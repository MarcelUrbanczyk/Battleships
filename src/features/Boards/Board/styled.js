import { styled } from "styled-components";

export const Block = styled.div`
  width: 38px;
  height: 38px;
  background-color: teal;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #006666;
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin: 20px 40px 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Owner = styled.p`
  color: white;
  font-size: 36px;
  margin: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
