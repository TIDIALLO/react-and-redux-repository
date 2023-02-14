import Button from "../components/Button";
import { GrAed, GrCart } from 'react-icons/gr'

function ButtonPage() {
    const handleClick = () => {
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

export default ButtonPage;
