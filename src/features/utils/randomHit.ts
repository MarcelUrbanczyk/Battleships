import { setShipSunk } from "./setShipSunk";
import { Ship } from "../shipInterface";

export const randomHit = (owner: string, ownerShips: Ship[]) => {
  let id;
  let attackedBlock;

  while (!attackedBlock) {
    if (owner === "Player 1") {
      id = Math.floor(Math.random() * 100) + 1;
    } else if (owner === "Player 2") {
      id = Math.floor(Math.random() * 100) + 101;
    }

    const blockToAttack = document.getElementById(`${id}`);

    if (blockToAttack && blockToAttack.classList.contains("hit")) {
    } else if (blockToAttack && !blockToAttack.classList.contains("hit")) {
      attackedBlock = blockToAttack;
    }
  }

  attackedBlock.classList.add("hit");
  return setShipSunk(attackedBlock.classList, owner, ownerShips);
};
