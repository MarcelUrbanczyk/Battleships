import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #3f4f5c;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  padding: 20px;
  text-align: center;
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const Header = styled.h2`
  color: white;
  @media (max-width: 500px) {
    margin: 5px;
  }
`;

export const Paragraph = styled.p`
  color: white;
`;

export const Wrapper = styled.span`
  display: flex;
  gap: 10px;
`;
