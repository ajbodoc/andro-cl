import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './pages';
import About from './pages/about';
import Login from './pages/login';
import UsersList from './pages/usersList';
import Provincias from './pages/provincias';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usersList" element={<UsersList />} />
        <Route path="/provincias" element={<Provincias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;