import { selectShips1, selectShips2 } from "../gameSlice";
import { useSelector } from "react-redux";
import { Ship, Ships } from "./styled";

export default (owner, ownerShips) => {
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  if (owner.owner === "Player 1" && ownerShips) {
    return (
      <Ships>
        {ships1.map((ship) => (
          <Ship
            key={ship.name}
            style={ship.isSunk ? { textDecoration: "line-through" } : {}}
          >
            {ship.name}
          </Ship>
        ))}
      </Ships>
    );
  } else if (owner.owner === "Player 2") {
    return (
      <Ships>
        {ships2.map((ship) => (
          <Ship
            key={ship.name}
            style={ship.isSunk ? { textDecoration: "line-through" } : {}}
          >
            {ship.name}
          </Ship>
        ))}
      </Ships>
    );
  }
};
