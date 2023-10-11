import { Container, FlipButton, ShipWrapper, Header, Ship } from "./styled";

export default ({ setDraggedShip, flip, setFlip, ships }) => {
  const isEveryShipDropped = ships.every((ship) => ship.isDropped === true);
  if (!isEveryShipDropped)
    return (
      <>
        <Header>Ships</Header>
        <Container>
          <ShipWrapper>
            {ships.map((ship) => {
              if (!ship.isDropped) {
                return (
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
                );
              }
              return null;
            })}
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
