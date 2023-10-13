import { Container, FlipButton, ShipWrapper, Header, Ship } from "./styled";
import { isEveryShipDropped } from "../isEveryShipDropped";
import { useDispatch, useSelector } from "react-redux";
import { getShipByElement } from "../getShip";
import {
  selectFlip,
  selectShips1,
  setDraggedShip,
  toggleFlip,
} from "../gameSlice";

export default () => {
  const dispatch = useDispatch();
  const ships = useSelector(selectShips1);
  const flip = useSelector(selectFlip);

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
                    className={ship.name}
                    draggable
                    flipped={flip}
                    style={{
                      backgroundColor: ship.color,
                      width: `${ship.size * 10}px`,
                    }}
                    onDragStart={(event) => {
                      const ship = getShipByElement(ships, event.target);
                      console.log(ship);
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
};
