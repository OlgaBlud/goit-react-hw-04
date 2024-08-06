import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos } from "./images-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const handleSubmit = (searchValue) => {
    // console.log("search", searchValue);
    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setNextPage(false);
    setIsEmpty(false);
    setError(null);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results, total, total_pages } = await getPhotos(query, page);
        console.log(results);
        console.log(total, total_pages);
        if (!total) {
          setIsEmpty(true);
          console.log("no photos");
          const notify = () =>
            toast("No photos for such query!", {
              duration: 3000,
              position: "top-center",
              style: { marginTop: 100 },
              icon: "😢",
            });
          notify();
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setNextPage(page < total_pages);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };
  // console.log(images);
  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />

      {images.length > 0 && <ImageGallery images={images} />}
      {nextPage && <LoadMoreBtn handleLoadMoreClick={handleLoadMoreClick} />}
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {isEmpty && <Toaster />}
    </div>
  );
}

export default App;

// export const Photos = () => {

//   const [isEmpty, setIsEmpty] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//
//     const fetchImages = async () => {

//       try {
//         const { per_page, total_results, photos } = await getPhotos(
//           query,
//           page
//         );
//         if (!photos.length) {
//           return setIsEmpty(true);
//         }
//         setImages((prevImages) => [...prevImages, ...photos]);
//         setIsVisible(page < Math.ceil(total_results / per_page));
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchImages();
//   }, [query, page]);

//   const handleSubmit = (value) => {
//     setQuery(value);
//     setImages([]);
//     setPage(1);
//     setIsVisible(false);
//     setIsEmpty(false);
//     setError(null);
//   };
//   const onLoadMoreBtn = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit} />
//       {images.length > 0 && <PhotosGallery images={images} />}
//       {isVisible && (
//         <Button onClick={onLoadMoreBtn} disabled={loading}>
//           {loading ? "Loading..." : "Load more"}
//         </Button>
//       )}
//       {!images.length && !isEmpty && (
//         <Text textAlign="center">Let`s begin search 🔎</Text>
//       )}
//       {loading && <Loader />}
//       {error && (
//         <Text textAlign="center">❌ Something went wrong - {error}</Text>
//       )}
//       {isEmpty && (
//         <Text textAlign="center">Sorry. There are no images ... 😭</Text>
//       )}
//     </>
//   );
// };
