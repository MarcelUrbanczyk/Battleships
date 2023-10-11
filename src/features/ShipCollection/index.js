import { Container, FlipButton, ShipWrapper, Header, Ship } from "./styled";
import { ships } from "../ships";

export default ({ setDraggedShip, flip, setFlip }) => {
  return (
    <>
      <Header>Ships</Header>
      <Container>
        <ShipWrapper>
          {ships.map((ship) => (
            <Ship
              key={ship.name}
              id={ship.name}
              draggable
              flipped={flip}
              style={{
                backgroundColor: ship.color,
                width: `${ship.size * 10}px`,
              }}
              onDragStart={(event) => {
                setDraggedShip(event.target);
              }}
            />
          ))}
        </ShipWrapper>
        <FlipButton
          onClick={() => {
            setFlip(!flip);
          }}
        />
      </Container>
    </>
  );
};
