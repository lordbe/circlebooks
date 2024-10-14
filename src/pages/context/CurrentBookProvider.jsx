import React from 'react'
import { useFetchBook } from '../../services/book/Book_ser';
import { BookContext } from './BookContext';

export default function CurrentBookProvider({ children, key2 }) {
    const { xbook,isLoadingB}= useFetchBook(key2);   
    console.log("twelve");
  
    return (
      <BookContext.Provider value={{xbook, isLoadingB}}>
        {children}
      </BookContext.Provider> 
    );
}
