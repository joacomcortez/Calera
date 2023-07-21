import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './User/Login';
import CreateUser from './User/CreateUser';
import Logout from './User/Logout';
import JoinId from './pages/JoinId';
import CreateGame from './pages/CreateGame';
import Board from './pages/Board';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<CreateUser />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/joingame' element={<JoinId />} />
          <Route path='/creategame' element={<CreateGame />} />
          <Route path='/play/:id' element={<Board />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
