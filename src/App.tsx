import "./App.css";
import { BoxList } from "./components/BoxList/BoxList";
import { LayoutPage } from "./layout/layoutPage/LayoutPage";

function App() {
  return (
    <LayoutPage>
      <BoxList />
    </LayoutPage>
  );
}

export default App;
