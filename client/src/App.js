import React from 'react';
import './App.css';
// import Calender from './Container/Calender'
import MyComp from './Container/MyComp'

function App() {
  return (
    <div className="App">
      <p className="p" style={{fontSize:"40px"}}>Users</p>
      <MyComp/>
    </div>
  );
}

export default App;
