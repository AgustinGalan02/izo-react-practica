import "./App.css";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { PracticeProvider } from "./PracticeContext"; 

function App() {
  // JSX
  return (
    <PracticeProvider> {}
      <div>
        <Menu />
        <MainContent />
      </div>
    </PracticeProvider>
  );
}

export default App;