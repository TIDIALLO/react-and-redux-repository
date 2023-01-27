// import AnimalShow from "./AnimalShow";

// import { useState } from "react";

function App() {

    //Array destructuring
    function myArray(){
        return [1,2,3,4,5];
    }
    const [firstElement, secondElement] = myArray();
    console.log(firstElement, secondElement);
    //instead of
    const myArr = myArray();
    const firstElemen = myArr[0];
    const secondElemen = myArr[1];
    console.log(firstElemen, secondElemen);
    // const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     setCount(count + 1);
    // };

    // return (
    //     <div>
    //         <button onClick={handleClick}>Add animal</button>
    //         <div>Number of animals: {count}</div>
    //     </div>
    // );
}
export default App;