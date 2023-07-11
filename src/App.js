import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
          <Route path="/coins" element={<Coins/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
