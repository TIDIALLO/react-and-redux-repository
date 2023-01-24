// configuration react project

// 1-) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//2-) Get a reference to the div element
const el = document.getElementById('root');

//3-) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 5-) show the component at the screen
root.render(<App />);