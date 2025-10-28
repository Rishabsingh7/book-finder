import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <section className="grid grid-cols-1 gap-10 px-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </section>
  );
};

export default BookList;
