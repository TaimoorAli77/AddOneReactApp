/* eslint-disable no-unused-vars */
import { React } from 'react';
// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthWrapper from './auth/AuthWrapper';

function App() {

  return (
    <>
      <Router>
        <AuthWrapper />
      </Router>
    </>
  );
}

export default App;
