import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/main_nav_bar'
import LoginSearchAppBar from './components/main_nav_bar_home'

function App() {
  return (
    <div className="App">
      {/* <PrimarySearchAppBar/> */}
      <LoginSearchAppBar/>
      
    </div>
  );
}

export default App;
