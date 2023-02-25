import { useReducer } from "react";

// const initialState = {count:0};


const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                age: state.age + 1
            };
        case 'decrement':
            return {
                ...state,
                age: state.age - 1
            };
        case 'changed-name':
            {
                return {
                    name: action.payload,
                    age: state.age
                }
            }
        default:
            return state;
    }
}
function Counter() {
    const [state, dispatch] = useReducer(reducer, { name: "name", age: 27 });

    const handleChangeName = (event) => {
        dispatch(
            {
                type: 'changed-name',
                payload: event.target.value
            }
        );
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            {
                type: 'increment'
            }
        )
    }
    return (
        <div>
            <div>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                Age: <span>{state.age}</span>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </div>


            <form onSubmit={handleSubmit}>
                <label className="use Reducer" />
                {/* <span>{state.name}</span> */}
                <input
                    value={state.name}
                    onChange={handleChangeName}
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                {/* <button onSubmit={handleChangeName}>Change Name</button> */}
                <p>Hello, {state.name}. You are {state.age}.</p>
            </form>


        </div>
    );
}
export default Counter;