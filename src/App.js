import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<BookForm />} />
          <Route path="/update-book/:id" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;