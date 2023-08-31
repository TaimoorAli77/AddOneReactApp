/* eslint-disable no-unused-vars */
import { React } from 'react';
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Login from './Login';

function App() {
  const [count, setCount] = useState(0);
  const settCount = (count)=>{
    setCount(count+1);
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home count={count} settCount={settCount}/>} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
