import React, { useState } from "react";
import { Container, Block, Owner, Wrapper, RandomButton } from "./styled";
import { placeShip, placeShipsRandomly } from "./placeShips";

export default ({ owner }) => {
  const size = 10;
  const [board, setBoard] = useState(
    Array.from({ length: size * size }).fill(null)
  );

  return (
    <Wrapper>
      <Owner>{owner}</Owner>
      <Container>
        {board.map((color, index) => (
          <Block
            onClick={() => {
              let newBoard = placeShip(
                board,
                index,
                { name: "Destroyer", size: 4, color: "red" },
                false
              );
              setBoard([...newBoard]);
            }}
            key={index}
            id={index + 1}
            style={{ backgroundColor: color ? color : "teal" }}
          />
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
