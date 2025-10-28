import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchBooks = async (title) => {
    if (!title) return;
    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
      );
      setBooks(response.data.docs || []);
    } catch (err) {
      console.error("Error fetching books:", err);
      setError("Failed to fetch books. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-6 font-sans bg-gradient-to-br from-blue-50 to-green-50">
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-800">
        📚 BOOK FINDER
      </h1>

      <SearchBar onSearch={fetchBooks} />

      {/* Added more margin below search bar */}
      <div className="mt-12">
        {loading && (
          <p className="mt-10 text-center text-gray-600 animate-pulse">
            Loading books...
          </p>
        )}

        {error && (
          <p className="mt-10 font-medium text-center text-red-500">{error}</p>
        )}

        {!loading && searched && !error && books.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            No books found. Try another title!
          </p>
        )}

        {!loading && !error && books.length > 0 && <BookList books={books} />}
      </div>
    </main>
  );
};

export default App;
