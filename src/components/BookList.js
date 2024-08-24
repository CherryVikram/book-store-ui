import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';
import { Link } from 'react-router-dom';
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getBooks().then(response => {
      setBooks(response.data);
    });
  }, []);

  const deleteBook = (id) => {
    BookService.deleteBook(id).then(() => {
      setBooks(books.filter(book => book.id !== id));
    });
  };

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <Link to="/add-book">Add Book</Link>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
            <div>
              <Link to={`/update-book/${book.id}`}>Edit</Link>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;