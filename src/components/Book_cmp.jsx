import React, { useContext } from 'react'
import { BookContext } from '../pages/context/BookContext';

export default function Book_cmp() {
    const {xbook, isLoadingB} = useContext(BookContext);  
    //console.log(xbook);
    //console.log(books);
    const book =xbook;
    return (
      <div className="container text-center">
        {isLoadingB && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!isLoadingB && (
          <div className="row">
            {/* <div className="col col-lg-2">
              <div className="card" style={{ width: "200px" }}>
                <img
                  src={
                    "https://media3.giphy.com/media/gKHGnB1ml0moQdjhEJ/giphy.gif?cid=a4e0bc20e5r8l3z9hmf6mf890ebnfejjq675yr56ij21f3d1&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  }
                  alt=""
                />
                <p></p>
                <h5 className="mb-1 text-body-tertiary">{book.isbn}</h5>
              </div>
            </div>
            <div className="col-md-auto">
              <a
                className="list-group-item list-group-item-action"
                aria-current="true"
                key={book.id}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Title: {book.title}</h5>
                </div>
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <p className="mb-1">Author: {book.author}</p>
                </div>
                <p className="mb-1"></p>
                <div className="d-flex w-100 justify-content-between"></div>
              </a>
            </div>
            <div className="col col-lg-2">
              <ul className="text-secondary text-start">ID: {book.id}</ul>
              <ul className="text-secondary text-start">Isbn: {book.isbn}</ul>
              <ul className="text-secondary text-start">
                Price: ${book.price}
              </ul>
              <ul className="text-secondary text-start">
                Available: {book.availableStock}
              </ul>
            </div> */}


            <div className="card" style={{"width": "400px"}}>
              <img src={
                    "https://media3.giphy.com/media/gKHGnB1ml0moQdjhEJ/giphy.gif?cid=a4e0bc20e5r8l3z9hmf6mf890ebnfejjq675yr56ij21f3d1&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  } className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Title: {book.title}</h5>
                <p className="card-text">
                Author: {book.author}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ID: {book.id}</li>
                <li className="list-group-item">Isbn: {book.isbn}</li>
                <li className="list-group-item">Price: ${book.price}</li>
                <li className="list-group-item">Available: {book.availableStock}</li>
              </ul>
              <div className="card-body">
                {/* <a href="#" className="card-link">
                  Card link
                </a> */}
                
              </div>


            </div>
          </div>
        )}
      </div>
    );
}
