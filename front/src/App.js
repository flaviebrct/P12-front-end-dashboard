import "./style/App.css";

import Homepage from "./page/Homepage.js";

import Header from "./components/Header.js";
import VerticalNavigation from "./components/VerticalNavigation.js";

function App() {
  return (
    <div className="App">
      <Header />
      <VerticalNavigation />
      <Homepage />
    </div>
  );
}

export default App;
