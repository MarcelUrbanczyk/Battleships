import { Container, FlipButton, ShipWrapper, Header, Ship } from "./styled";
import { isEveryShipDropped } from "../utils/isEveryShipDropped";
import { useDispatch, useSelector } from "react-redux";
import { getShipByElement } from "../utils/getShip";
import {
  selectFlip,
  selectShips1,
  selectShips2,
  setDraggedShip,
  toggleFlip,
} from "../gameSlice";

export default (owner) => {
  const dispatch = useDispatch();
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const flip = useSelector(selectFlip);

  if (owner.owner === "Player 1" && !isEveryShipDropped(ships1)) {
    return (
      <>
        <Header>Ships</Header>
        <Container>
          <ShipWrapper>
            {ships1.map((ship) => {
              if (!ship.isDropped) {
                return (
                  <Ship
                    key={ship.name}
                    id={ship.name}
                    className={ship.name}
                    draggable
                    flipped={flip}
                    style={{
                      backgroundColor: ship.color,
                      width: `${ship.size * 10}px`,
                    }}
                    onDragStart={(event) => {
                      const ship = getShipByElement(ships1, event.target);
                      dispatch(setDraggedShip(ship));
                    }}
                  />
                );
              }
              return null;
            })}
          </ShipWrapper>
          <FlipButton
            onClick={() => {
              dispatch(toggleFlip());
            }}
          />
        </Container>
      </>
    );
  } else if (owner.owner === "Player 2" && !isEveryShipDropped(ships2)) {
    return (
      <>
        <Header>Ships</Header>
        <Container>
          <ShipWrapper>
            {ships2.map((ship) => {
              if (!ship.isDropped) {
                return (
                  <Ship
                    key={ship.name}
                    id={ship.name}
                    className={ship.name}
                    draggable
                    flipped={flip}
                    style={{
                      backgroundColor: ship.color,
                      width: `${ship.size * 10}px`,
                    }}
                    onDragStart={(event) => {
                      const ship = getShipByElement(ships2, event.target);
                      dispatch(setDraggedShip(ship));
                    }}
                  />
                );
              }
              return null;
            })}
          </ShipWrapper>
          <FlipButton
            onClick={() => {
              dispatch(toggleFlip());
            }}
          />
        </Container>
      </>
    );
  }
};
