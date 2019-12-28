import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;

function App() {
  return (
    <div className="App">
      <Greet name='Suman' />
      <Greet name='Sujan' >I am 20 years old. </Greet>
    </div>
  );
}

export default App;
