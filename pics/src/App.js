import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList";
// import ImageShow from "./components/ImageShow";
function App(){

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) =>{
        const result = await searchImage(term);
        setImages(result);
    };
    return (
       <div>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
            <ImageList images={images} />
       </div>
    );
}

export default App;