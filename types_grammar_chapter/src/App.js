import React from 'react';
import logo from './logo.svg';
import './App.css';
import { forOfStatement } from '@babel/types';

function App() {
/* String 
let a = "foo";
let b = ["f","o","o"];
let c = a.toUpperCase();
let d = Array.prototype.map.call(a,(v) => v.toUpperCase() + ".").reverse();

console.log(c);
*/
function foo() {
	try {
		return 42;
	}
	finally {
		console.log( "Hello" );
	}

	console.log( "never runs" );
}

console.log( foo() );








  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
