import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos } from "./images-api";

function App() {
  // const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = (searchValue) => {
    console.log("search", searchValue);
    // setQuery(searchValue);
    getPhotos(searchValue, 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
