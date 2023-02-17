import useCounter from "../hooks/use-counter";
import Button from "../components/Button";

function CounterPage({initialCount}){
    const {count, increment} = useCounter(initialCount);
    return(
        <div>
            <h1>Count in {count}</h1>
            <Button onClick={increment}>
                Increment
            </Button>
        </div>
    )
    
}

export default CounterPage;