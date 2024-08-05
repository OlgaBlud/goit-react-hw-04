// import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  //   const [queryStatus, setQueryStatus] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      console.log("enter search query");
      const notify = () => toast("Enter search query!");
      notify();

      return;
    }
    onSubmit(query);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
