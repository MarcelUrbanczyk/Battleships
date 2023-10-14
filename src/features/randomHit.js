export const randomHit = (owner) => {
  let blocksToAttack = document.getElementsByClassName(`${owner}`);

  if (blocksToAttack.length > 0) {
    const randomIndex = Math.floor(Math.random() * blocksToAttack.length);
    let blockToAttack = blocksToAttack[randomIndex];

    if (blockToAttack.classList.contains("hit")) {
      blockToAttack =
        blocksToAttack[Math.floor(Math.random() * blocksToAttack.length)];
    } else if (!blockToAttack.classList.contains("hit")) {
      blockToAttack.classList.add("hit");
    }
  }
};
