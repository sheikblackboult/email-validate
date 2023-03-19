import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;