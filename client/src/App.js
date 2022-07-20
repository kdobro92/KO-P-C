import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Performance from "./pages/Performance";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import UnifiedMail from "./pages/UnifiedMail";
import "./scss/style.scss";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
        <Route path="/unifiedmail" element={<UnifiedMail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
