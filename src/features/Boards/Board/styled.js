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
  margin: 40px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`;
