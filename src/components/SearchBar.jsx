import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-end justify-center gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Search for a book title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm w-80 sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
