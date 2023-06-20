import React,{useState} from "react";
import searchImages from "./api";
import SearchBare from "./components/SearchBare";
import ImageList from "./components/ImageList";

function App() {
    const [images,setImages] = useState([]);
    const termSubmit = async (term) => {
       const result = await searchImages(term);
       setImages(result);
    }
    
    return <div>
        <SearchBare termSubmit={termSubmit} />
        <ImageList images = {images} />
    </div>;
}

export default App;