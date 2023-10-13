import { Header } from "../common/header";
import { Main } from "../common/main";
import Boards from "../features/Boards";
import ShipCollection from "../features/ShipCollection";
const App = () => {
  return (
    <>
      <Header>Battleships</Header>
      <Main>
        <Boards />
        <ShipCollection />
      </Main>
    </>
  );
};

export default App;
