import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import UnifiedMail from "./pages/UnifiedMail";
import Board from "./pages/Board";
import Contact from "./pages/Contact";
import BoardDetail from "./pages/BoardDetail";
import Performance from "./pages/Performance";
import "./scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/unifiedmail" element={<UnifiedMail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
