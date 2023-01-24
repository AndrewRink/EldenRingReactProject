import { useState } from 'react';
import {BrowerRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Home from '../src/Components/Home'

import './App.css';


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
