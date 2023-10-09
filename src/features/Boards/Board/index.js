import React, { useState } from "react";
import { Container, Block, Owner, Wrapper, RandomButton } from "./styled";
import { placeShipsRandomly } from "./placeShipsRandomly";

export default ({ owner }) => {
  const size = 10;
  const [board, setBoard] = useState(Array.from({ length: size * size }));
  return (
    <Wrapper>
      <Owner>{owner}</Owner>
      <Container>
        {board.map((color, index) => (
          <Block
            key={index}
            id={index + 1}
            style={{ backgroundColor: color ? color : "teal" }}
          ></Block>
        ))}
      </Container>
      <RandomButton
        onClick={() => {
          setBoard(placeShipsRandomly);
        }}
      />
    </Wrapper>
  );
};
