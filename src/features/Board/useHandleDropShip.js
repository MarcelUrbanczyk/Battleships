import { useDispatch, useSelector } from "react-redux";
import { placeShip } from "../utils/placeShips";
import { setBoard, setShips, setDraggedShip, selectFlip } from "../gameSlice";
import { getShipByName } from "../utils/getShip";

const useHandleDropShip = () => {
  const dispatch = useDispatch();
  const flip = useSelector(selectFlip);

  const handleDropShip = (
    ownerShips,
    draggedShipName,
    blockId,
    ownerBoard,
    owner
  ) => {
    const ship = getShipByName(ownerShips, draggedShipName);
    const shipIndex = ownerShips.findIndex(
      (ship) => ship.name === draggedShipName
    );
    const newShips = [...ownerShips];
    newShips[shipIndex] = {
      ...newShips[shipIndex],
      isDropped: true,
    };

    let startIndex;
    if (blockId <= 100) {
      startIndex = blockId - 1;
    } else {
      startIndex = blockId - 101;
    }
    const oldBoard = [...ownerBoard];
    const newBoard = placeShip(oldBoard, startIndex, ship, flip);
    if (owner === "Player 1" && newBoard) {
      dispatch(setBoard({ boardNumber: 1, content: [...newBoard] }));
      dispatch(setShips({ shipsNumber: 1, content: [...newShips] }));
      dispatch(setDraggedShip(null));
    } else if (owner === "Player 2" && newBoard) {
      dispatch(setBoard({ boardNumber: 2, content: [...newBoard] }));
      dispatch(setShips({ shipsNumber: 2, content: [...newShips] }));
      dispatch(setDraggedShip(null));
    }
  };
  return handleDropShip;
};

export default useHandleDropShip;
