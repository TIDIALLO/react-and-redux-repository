import { useState } from "react";

function SearchBar({onSubmit}){

    const [term, setTerm] = useState('');
    const handleChange = (event) =>{
        // console.log(event.target.value);
        setTerm(event.target.value);
    }

    const handleFormSubmit = (event) =>{
        onSubmit('cars');
        
        event.preventDefault();
    } 
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}
export default SearchBar;