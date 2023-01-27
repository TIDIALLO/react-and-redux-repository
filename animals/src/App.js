import AnimalShow from "./AnimalShow";
import { useState } from "react";
import './App.css'

// const animals = ['bird','cat','cow','dog','gator','horse'];
function getRandomAnimal(){
    const animals = ['bird','cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([]);

    const renderedAnimals = animals.map((animals, index) => {
        return <AnimalShow type={animals} key={index}  />
    });

    const handleClick = () => {
        setAnimals([...animals,  getRandomAnimal()]);
    };

    return (
        <div className="app">
            <button onClick={handleClick}>Add animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}
export default App;