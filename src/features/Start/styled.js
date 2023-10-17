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
  width: 100%;
  text-align: center;
  @media (max-width: 1150px) {
    width: 90%;
  }
`;

export const Header = styled.h2`
  color: white;
  font-size: 48px;
  margin: 5px 0 0;
  @media (max-width: 500px) {
    font-size: 36px;
  }
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 24px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Wrapper = styled.span`
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
