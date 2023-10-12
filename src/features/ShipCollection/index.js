import { Container, FlipButton, ShipWrapper, Header, Ship } from "./styled";
import { isEveryShipDropped } from "../isEveryShipDropped";

export default ({ flip, ships, setGameState, gameState }) => {
  if (!isEveryShipDropped(ships))
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
                      setGameState({ ...gameState, draggedShip: event.target });
                    }}
                  />
                );
              }
              return null;
            })}
          </ShipWrapper>
          <FlipButton
            onClick={() => {
              setGameState({ ...gameState, flip: !flip });
            }}
          />
        </Container>
      </>
    );
};
