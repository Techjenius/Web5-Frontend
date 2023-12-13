import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
