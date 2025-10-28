import React from "react";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  const author = book.author_name ? book.author_name.join(", ") : "Unknown Author";
  const year = book.first_publish_year || "N/A";
  const link = `https://openlibrary.org${book.key}`;

  return (
    <div className="flex flex-col items-center p-6 overflow-hidden text-center transition bg-white shadow rounded-xl hover:shadow-lg">
      <img
        src={coverUrl}
        alt={book.title}
        loading="lazy"
        className="object-cover mb-6 rounded-md w-36 h-52"
      />
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{book.title}</h3>
      <p className="mb-2 text-sm text-gray-600">{author}</p>
      <p className="mb-4 text-sm text-gray-500">📅 {year}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 hover:underline"
      >
        View on Open Library →
      </a>
    </div>
  );
};

export default BookCard;
