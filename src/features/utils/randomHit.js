import { setShipSunk } from "./setShipSunk";

export const randomHit = (owner, ownerShips) => {
  let id;
  let attackedBlock;

  while (!attackedBlock) {
    if (owner === "Player 1") {
      id = Math.floor(Math.random() * 100) + 1;
    } else if (owner === "Player 2") {
      id = Math.floor(Math.random() * 100) + 101;
    }

    const blockToAttack = document.getElementById(`${id}`);

    if (blockToAttack.classList.contains("hit")) {
    } else if (!blockToAttack.classList.contains("hit")) {
      attackedBlock = blockToAttack;
    }
  }

  attackedBlock.classList.add("hit");
  return setShipSunk(attackedBlock.classList, owner, ownerShips);
};
