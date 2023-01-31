import SearchBar from "./components/SearchBar";
// import ImageList from "./components/ImageList";
// import ImageShow from "./components/ImageShow";
function App(){
    const handleSubmit = (term) =>{
        console.log("Do search", term);
    };
    return (
        <SearchBar onSubmit={handleSubmit}></SearchBar>
    );
}

export default App;