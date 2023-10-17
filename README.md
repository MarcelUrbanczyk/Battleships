# Battleships
## Description

Battleships - my first game created in JavaScript, has three game modes: simulation, singleplayer, multiplayer. Originally, the game was supposed to be developed in JavaScript and then ported to TypeScript because I didn't know TypeScript at the time and had limited time to create the application. In the end, it turned out to be a mistake because by the end, the application became too complex for me to migrate to TypeScript, and after many attempts, I realized it was not doable. In the near future, I plan to learn TypeScript and migrate all my previous projects to this language, and then recreate Battleships from scratch, starting in TypeScript.

## Technologies

![TechnologiesIcons](https://skillicons.dev/icons?i=html,css,js,react,redux,git,styledcomponents)

## Showcase
[Github pages](marcelurbanczyk.github.io/Battleships/)
### Gamemodes
#### Simulation
[![simulation.gif](https://i.postimg.cc/J4NRjDv7/simulation.gif)](https://postimg.cc/mtrxsDTK)

#### Singleplayer
[![singleplayer.gif](https://i.postimg.cc/mkV8GSh2/singleplayer.gif)](https://postimg.cc/MfMy7Vyh)

#### Multiplayer
[![multiplayer.gif](https://i.postimg.cc/kXBx4Cpy/multiplayer.gif)](https://postimg.cc/rK2dnBcd)

## How does it work
### Simulation

In the simulation mode, there are no human players by design; instead, two AI 'bots' engage in battle. The ship placements on the game board are randomized using the placeShipsRandomly function, and the game begins. A counter is defined, initially set to 0. Every 1.5 seconds, the counter is incremented, and if it is divisible by 2, the first player's ships are attacked by function `randomHit`. Otherwise, the second player's ships are targeted. This approach ensures that each player takes their turn, preventing consecutive attacks on one player. If all of a player's ships are sunk, the winner is recorded in the application state, and the game ends along with the interval.
```
const [counter, setCounter] = useState(0);

useEffect(() => {
    if (gameMode === "simulation" && owner === "Player 1" && !isGameOver) {
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);

        dispatch(toggleIsPlayer1Turn());

        if (counter % 2 === 0) {
          const newShips = randomHit("Player 1", ships1);
          dispatch(
            setShips({
              shipsNumber: 1,
              content: [...newShips],
            })
          );
        } else {
          const newShips = randomHit("Player 2", ships2);
          dispatch(
            setShips({
              shipsNumber: 2,
              content: [...newShips],
            })
          );
        }

        if (isEveryShipSunk(ships1)) {
          dispatch(setWinner("Player 2"));
          dispatch(toggleIsGameStarted());
          dispatch(toggleIsGameOver());
        } else if (isEveryShipSunk(ships2)) {
          dispatch(setWinner("Player 1"));
          dispatch(toggleIsGameStarted());
          dispatch(toggleIsGameOver());
        }
      }, 1500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [ships1, ships2, isGameOver, counter]);
```
### Singleplayer

In singleplayer mode, the player battles against a bot and arranges their own ships on their game board. The opponent's ships are randomly placed. The player can set their ships on the board by dragging them to specific blocks, triggering the placeShip function, or they can choose to have their ships placed randomly by clicking on the dice roll button and then function `placeShipsRandomly` gets triggered. The player can also place a ship by clicking on its model and then on a specific block on the board. I enabled this feature to accommodate touch screen interfaces. Unlike other modes, the player sees their own ships on the board throughout the game.

Once the game begins, the player can attack the opponent's ships by clicking on their blocks. This action invokes the custom hook useHandleClick, which, depending on whether it's the player's turn and whether the block hasn't been attacked before, adds the 'hit' class to the block. If a ship was present on that block, it changes color to red, and the setShipSunk function is called to check if every block the ship occupies has been hit. If so, the ship's 'isSunk' state is set to true. When all the ships are sunk, the winner is determined.

```
 useEffect(() => {
    if (gameMode === "singleplayer") {
      dispatch(
        setBoard({ boardNumber: 2, content: [...placeShipsRandomly()] })
      );
    }
  }, []);

    useEffect(() => {
    if (gameMode !== "simulation" && owner === "Player 1") {
      const isEveryShipSunk = ships1.every((ship) => ship.isSunk === true);
      if (isEveryShipSunk) {
        dispatch(toggleIsGameOver());
        dispatch(setWinner("Player 2"));
      }
    } else if (gameMode !== "simulation" && owner === "Player 2") {
      const isEveryShipSunk = ships2.every((ship) => ship.isSunk === true);
      if (isEveryShipSunk) {
        dispatch(toggleIsGameOver());
        dispatch(setWinner("Player 1"));
      }
    }
  }, [ships1, ships2, gameMode]);

```

### Multiplayer

In multiplayer mode, each player arranges their ships on the board in the same way as in singleplayer mode, with the difference that after the game starts, ships are not visible unless they have been hit. When a player clicks on a block, the useHandleClick function is triggered, and depending on whether it's that player's turn, it allows them to make an attack, just like in the previous mode.

### Custom hooks

#### useHandleClick
The custom hook useHandleClick allows the use of the handleClick function, which, depending on whether the game has started and whose turn it is, allows a player to attack the opponent's ship by adding the 'hit' class to the block and switching the turn to the other player.
```
const useHandleClick = () => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector(selectIsGameStarted);
  const isPlayer1Turn = useSelector(selectIsPlayer1Turn);
  const isGameOver = useSelector(selectIsGameOver);
  const gameMode = useSelector(selectGameMode);
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);

  const handleClick = (owner, blockClassList, blockId) => {
    if (
      isGameStarted &&
      owner === "Player 2" &&
      isPlayer1Turn &&
      blockClassList &&
      !blockClassList.contains("hit") &&
      !isGameOver &&
      gameMode === "singleplayer"
    ) {
      blockClassList.add("hit");
      dispatch(
        setShips({
          shipsNumber: 2,
          content: [...setShipSunk(blockClassList, owner, ships2)],
        })
      );
      dispatch(toggleIsPlayer1Turn());
      setTimeout(() => {
        const randomHitShips = randomHit("Player 1", ships1);
        if (randomHitShips) {
          dispatch(
            setShips({
              shipsNumber: 1,
              content: [...randomHitShips],
            })
          );
        }
        dispatch(toggleIsPlayer1Turn());
      }, 2000);
    } else if (
      (isGameStarted &&
        !isGameOver &&
        !blockClassList.contains("hit") &&
        blockId > 100 &&
        gameMode === "multiplayer" &&
        isPlayer1Turn) ||
      (isGameStarted &&
        !isGameOver &&
        !blockClassList.contains("hit") &&
        blockId <= 100 &&
        gameMode === "multiplayer" &&
        !isPlayer1Turn)
    ) {
      blockClassList.add("hit");
      let newShips;
      if (owner === "Player 1") {
        newShips = setShipSunk(blockClassList, owner, ships1);
        dispatch(
          setShips({
            shipsNumber: 1,
            content: [...newShips],
          })
        );
      } else if (owner === "Player 2") {
        newShips = setShipSunk(blockClassList, owner, ships2);
        dispatch(
          setShips({
            shipsNumber: 2,
            content: [...newShips],
          })
        );
      }
      dispatch(toggleIsPlayer1Turn());
    }
  };

  return handleClick;
};

export default useHandleClick;
```
#### useHandleDropShip
The custom hook useHandleDrop enables the use of the handleDropShip function, which is responsible for placing ships on the board using the placeShip function. It takes the ship's name and uses it to locate the ship object belonging to the player. Once found, it sets the ship's isDropped value to true. This is crucial because the game can only start when all ships are on the board. The placeShip function returns a new board with the ship placed on it, and then the board state in Redux is updated.

```
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

```

### Functions

#### getBlockColor
The getBlockColor function is responsible for assigning the appropriate color to a block on the board. It takes the ship object, the ship's name, and an ID to identify the block. If the game is in progress, it checks whether there was a ship on the block and whether the block has been hit. Depending on this, it assigns either a gray or red color. If the game hasn't started yet, it displays the color of the ship that is placed there.

```
export const getBlockColor = (ships, id, shipName, gameMode, isGameStarted) => {
  const ship = getShipByName(ships, shipName);
  const block = document.getElementById(id);

  if (!ship && block && block.classList.contains("hit")) {
    return "grey";
  } else if (ship && block && block.classList.contains("hit")) {
    return "red";
  } else if (
    (ship &&
      block &&
      id <= 100 &&
      gameMode !== "multiplayer" &&
      !isGameStarted) ||
    (ship && block && id <= 100 && gameMode === "singleplayer") ||
    (ship && block && gameMode === "simulation") ||
    (ship && block && gameMode === "multiplayer" && !isGameStarted)
  ) {
    return ship.color;
  }
};

```

#### getShip

The getShip function appears in two forms:

getShipByName, which returns the ship object whose name in the object matches the name passed to the function.

getShipByElement, which takes the ship object and an HTML element. It returns the ship present on that HTML element based on the element's class list.

```
export const getShipByName = (ships, shipName) => {
  return ships.find((ship) => ship.name === shipName);
};

export const getShipByElement = (ships, element) => {
  const shipNames = ships.map((ship) => ship.name);
  const elementClassList = element.classList;

  for (const name of shipNames) {
    if (elementClassList.contains(name)) {
      const ship = getShipByName(ships, name);
      return ship;
    }
  }
  return null;
};

```
#### isEveryShipDropped
The isEveryShipDropped function takes the ship object and checks whether every ship has the isDropped value set to true. Depending on this, it returns either true or false.

```
export const isEveryShipDropped = (ships) => {
  return ships.every((ship) => ship.isDropped === true);
};

```

#### isEveryShipSunk
The isEveryShipSunk function takes the ship object and checks whether every ship has the isSunk value set to true. Depending on this, it returns either true or false.
```
export const isEveryShipSunk = (ships) => {
  return ships.every((ship) => ship.isSunk === true);
};

```

#### placeShip
The placeShip function takes the board, which is an array, the index where the player wants to place the ship, the ship object, and a boolean that determines whether the ship should be oriented vertically or horizontally. Based on the starting index, the x and y coordinates are determined. Then, the isPositionValid function is called to check if the ship can be placed in that location. If it can, a new array is returned.
```
export const placeShip = (board, startIndex, ship, isVertical) => {
  const size = Math.sqrt(board.length);

  const x = Math.floor(startIndex / size);
  const y = startIndex % size;

  if (isPositionValid(x, y, isVertical, ship.size, board)) {
    for (let i = 0; i < ship.size; i++) {
      const shipIndex = isVertical ? (x + i) * size + y : x * size + y + i;
      board[shipIndex] = ship.name;
    }
    ship = { ...ship, isDropped: true };
    return board;
  }
  return false;
};
```

#### placeShipsRandomly
The placeShipsRandomly function creates a new empty board and randomly selects coordinates for each ship until they are valid. This is checked using the isPositionValid function. If everything aligns correctly, a new board with all the ships is returned
```
export const placeShipsRandomly = () => {
  const size = 10;
  const newBoard = Array(size * size).fill(null);

  for (const [index, ship] of initialShips.entries()) {
    let isValidPlacement = false;
    let x, y, isVertical;

    while (!isValidPlacement) {
      isVertical = Math.random() < 0.5;
      x = Math.floor(Math.random() * size);
      y = Math.floor(Math.random() * size);

      isValidPlacement = isPositionValid(x, y, isVertical, ship.size, newBoard);
    }

    for (let i = 0; i < ship.size; i++) {
      const shipName = ship.name;
      const shipIndex = isVertical ? (x + i) * size + y : x * size + y + i;
      newBoard[shipIndex] = shipName;
    }
  }
  return newBoard;
};
```
#### isPositionValid
The isPositionValid function checks whether the location for placing a ship is valid. It takes coordinates and checks if they do not go beyond the board's boundaries and whether the location is not already occupied by another ship

```
const isPositionValid = (x, y, isVertical, shipSize, board) => {
  const size = 10;
  if (
    x < 0 ||
    x >= size ||
    y < 0 ||
    y >= size ||
    (isVertical && x + shipSize > size) ||
    (!isVertical && y + shipSize > size)
  ) {
    return false;
  }

  for (let i = 0; i < shipSize; i++) {
    const index = isVertical ? (x + i) * size + y : x * size + y + i;

    if (board[index] !== null) {
      return false;
    }
  }

  return true;
};
```

#### randomHit
The randomHit function takes the board owner and the ship object and uses a while loop to randomly select a block to hit until it picks an unhit block. After a successful selection, the specific block receives the 'hit' class. Block IDs from 1 to 100 belong to the first player, while those from 101 to 200 belong to the second player.

```
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

    if (blockToAttack) {
      if (blockToAttack.classList.contains("hit")) {
      } else {
        attackedBlock = blockToAttack;
      }
    } else {
      break;
    }
  }

  if (attackedBlock) {
    attackedBlock.classList.add("hit");
    return setShipSunk(attackedBlock.classList, owner, ownerShips);
  }
};

```

#### setIsDropped
The setIsDropped function exists in two forms, one toggling the isDropped value to true or false for all ships in the provided object.

```
export const setIsDroppedFalse = (ships) => {
  const newShips = ships.map((ship) => ({
    ...ship,
    isDropped: false,
  }));
  return newShips;
};

export const setIsDroppedTrue = (ships) => {
  const newShips = ships.map((ship) => ({
    ...ship,
    isDropped: true,
  }));
  return newShips;
};

```

#### setShipSunk
The setShipSunk function takes a list of HTML element classes, the board owner, and the ship object. Based on this information, it creates a new ship object and defines a counter. It starts counting how many elements of the ship belonging to the specified owner have the 'hit' class. If the number of blocks with a specific ship and the 'hit' class matches the length of the ship, a new ship object is returned, in which that ship's isSunk value is set to true

```
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

```
