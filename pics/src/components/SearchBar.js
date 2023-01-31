function SearchBar({onSubmit}){
    const handleClick = () =>{
        onSubmit('cars'); //                                                                                                                  
    }
    return (
        <div>
            <div>SearchBar</div>
            <input />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default SearchBar;