import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import UnifiedMail from './pages/UnifiedMail';
import Board from './pages/Board';
import Contact from './pages/Contact';
import BoardDetail from './pages/BoardDetail';
import './scss/style.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
        <Route path="/unifiedmail" element={<UnifiedMail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
