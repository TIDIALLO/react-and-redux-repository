import { useState } from "react";

function ToDo() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(car => {
            return {...car, color:"Blue" }
        });
    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}
            >Blue</button>
            <p>
                ew {car.color} {car.model} from {car.year}.
            </p>
        </>
    )
}

export default ToDo;