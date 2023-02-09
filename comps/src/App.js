import Button from "./Button";
import { GrAed, GrCart } from 'react-icons/gr'
function App() {
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div>
            <div> <Button primary rounded onClick={handleClick}> <GrAed />Hi there! </Button> </div>
            <div> <Button secondary rounded outline>Buy Now!!</Button> </div>
            <div> <Button success><GrCart />Add!!!!!!</Button> </div>
            <div> <Button warning outline>Hi there!</Button> </div>
            <div> <Button danger rounded>Hi there!</Button> </div>
        </div>
    )
}

export default App;
