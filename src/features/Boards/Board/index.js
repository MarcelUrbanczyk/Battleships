import React, { useState, useEffect } from "react";
import { Container, Block, Owner, Wrapper } from "./styled";
import { placeShipsRandomly } from "./placeShipsRandomly";

export default ({ owner }) => {
  const size = 10;
  const [board, setBoard] = useState(Array(size * size));

  useEffect(() => {
    setBoard(placeShipsRandomly);
  }, []);

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
    </Wrapper>
  );
};
