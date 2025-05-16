import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Hero } from "./pages/Hero";
import { MainPage } from "./pages/MainPage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Flavor } from "./pages/Flavor";



function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flavor/:flavor" element={<Flavor />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
