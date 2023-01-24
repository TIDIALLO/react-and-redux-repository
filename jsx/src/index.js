// configuration react project

// 1-) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//2-) Get a reference to the div element
const el = document.getElementById('root');

//3-) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4-) create a component
function App() {
    // let message = 'Bye there'
    // if(Math.random() > 0.5){
    //     message = "Hi there!";
    // }
    // return <h1> {new Date().toLocaleTimeString()}</h1>
    return <input type= "number" min={5} />
    
}

// 5-) show the component at the screen
root.render(<App />);