import React from 'react'

import Menu from './Menu';
import Worklog from './Worklog';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-menu">
        <Menu />
      </div>
      <div className="app-worklog">
        <Worklog />
      </div>
    </div>
  );
}

export default App
