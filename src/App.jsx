import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos } from "./images-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  // const [modal, setModal] = useState({
  //   IsOpenModal: false,
  //   imgUrl: "",
  //   imgAlt: "",
  // });
  // const testUrl =
  //   "https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDAyNzd8MHwxfHNlYXJjaHwzMXx8Y2F0fGVufDB8MHx8fDE3MjMwMzgxMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080";
  // function openModal() {
  //   setModal({ ...modal, IsOpenModal: true, imgUrl: testUrl, imgAlt: "Test" });
  //   console.log(modal);
  // }
  // console.log(modal);
  // +++++++++++++++++++++++++++++++++++++++

  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [imgAlt, setImgAlt] = useState("");

  function openModal(url, alt) {
    setIsOpen(true);
    setImgAlt(alt);
    setImgUrl(url);
  }

  function closeModal() {
    setIsOpen(false);
    setImgAlt("");
    setImgUrl("");
  }
  console.log(imgAlt, imgUrl);

  // +++++++++++++++++++++++++++++++++++++++

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

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {nextPage && <LoadMoreBtn handleLoadMoreClick={handleLoadMoreClick} />}
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {isEmpty && <Toaster />}
      <ImageModal
        isOpen={isOpen}
        imgUrl={imgUrl}
        imgAlt={imgAlt}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
