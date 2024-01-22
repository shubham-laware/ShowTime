
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ShowInfo from "./pages/ShowInfo";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<ShowInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
