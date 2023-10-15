import { styled } from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #3f4f5c;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  padding: 20px;
`;

export const Header = styled.h2`
  color: white;
`;

export const Paragraph = styled.p`
  color: white;
`;

export const Wrapper = styled.span`
  display: flex;
  gap: 10px;
`;
