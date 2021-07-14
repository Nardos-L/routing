import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home'
import Hello from './components/Hello'
import Number from './components/Number'
import Color from './components/Color'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <Number path='/hello/:id' />
        <Hello path='/:hello' />
        <Color path='/:hello/:color/:backgroundColor' />
      </Router>
    </div>
  );
}

export default App;
