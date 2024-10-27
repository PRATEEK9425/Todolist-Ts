import React from 'react';

import './App.css';

import Routing from './RoutingApp/Routing';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
  <Routing/>
    </div>
  );
}

export default App;
