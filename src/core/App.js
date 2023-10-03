import { Header } from "../common/header";
import { Main } from "../common/main";
import ShipCollection from "../features/ShipCollection";

const App = () => (
  <>
    <Header>Battleships</Header>
    <Main>
      <ShipCollection />
    </Main>
  </>
);

export default App;
