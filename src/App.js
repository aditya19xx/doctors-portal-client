import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
