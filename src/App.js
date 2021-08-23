import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GlobalStyle from "./theme/globalStyles";
import { DragItems, Navigation, Preloader } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <DragItems />
        </div>
      </DndProvider>
      <Preloader />
    </>
  );
}

export default App;
