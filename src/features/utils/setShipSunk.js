export const setShipSunk = (classList, owner, ships) => {
  let newShips = [...ships];
  let sunkPartsCounter = 0;
  newShips.forEach((ship, index) => {
    if (classList.contains(ship.name)) {
      const shipBlocks = document.getElementsByClassName(
        `${ship.name} ${owner}`
      );

      for (let i = 0; i < shipBlocks.length; i++) {
        if (shipBlocks[i].classList.contains("hit")) {
          sunkPartsCounter++;
        }
      }

      if (sunkPartsCounter === shipBlocks.length) {
        newShips[index] = { ...ship, isSunk: true };
        return newShips;
      }
    }
  });
  return newShips;
};
