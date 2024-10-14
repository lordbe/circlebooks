import React from 'react'
import Book_pag from './book/Book_pag'
import ListBook_pag from './book/ListBook_pag'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import BookProvider from './context/BookProvider';
import { BookstoreExperience } from './BookstoreExperience';

export default function Main_Pag() {
  return (
    <BookProvider>         
      <Routes>
        <Route path="/" element={<BookstoreExperience />} />
        <Route path="/books" element={<ListBook_pag />} />
        <Route path="/book" element={<Book_pag />} />
      </Routes>            
    </BookProvider>
  );
}
