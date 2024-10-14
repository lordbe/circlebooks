import React from 'react'
import ItemBook_cmp from './ItemBook_cmp';

export default function ListBook_cmp({books}) {  
    return books.map((book) => {
      return <ItemBook_cmp key={book.id} book={book} />;
    });
  
}
