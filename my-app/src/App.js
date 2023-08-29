import logo from './logo.svg';
import './App.css';
import React from 'react';
import CounterApp from './components/CounterApp';
import Room from './components/Room';

function App() {
  return (
    <div>
      <CounterApp />
      <Room />
    </div>
  );
}

export default App;