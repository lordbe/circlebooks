import React, { useContext } from 'react'
import ListBook_cmp from '../../components/ListBook_cmp';
import { BooksContext } from '../context/BookContext';
import { CircleBookstore } from './CircleBookstore';

export default function ListBook_pag() {
    console.log("ten");
    const {books, isLoading} = useContext(BooksContext);   
    console.log("eleven");
    return (
      <div>        
        {isLoading && <h2>Loading...</h2>}
        <div className="list-group col col-lg-6">
          <CircleBookstore/>
        </div>
      </div>
    );
}
