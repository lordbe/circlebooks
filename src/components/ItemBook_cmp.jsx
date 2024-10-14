import React from 'react'
import { NavLink } from 'react-router-dom';
import ButtonBuy_cmp from './ButtonBuy_cmp';

export default function ItemBook_cmp({book}) {
    return (
        <>
          <div
            className="container text-left list-group-item list-group-item-action "
            key={book.id}
          >
            <div className="row align-items-start">
              <div className="col-2">
                <div className="card" style={{ width: "50px" }}>
                  <img
                    src={
                      "https://edit.org/img/blog/t9i-edit-book-covers-online.webp"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex w-100 justify-content-between">
                  {/* <h5 className="mb-1">{book.title}</h5> */}
                  <NavLink
                    to={{
                      pathname: "/book",
                      search: "id=" + book.id,
                    }}
                    className={({ isActive }) =>
                      ` ${
                        isActive ? "active" : ""
                      } link-warning link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover`
                    }
                  >
                    {book.title}
                  </NavLink>
                </div>
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <p className="mb-1">{book.author}</p>
                </div>
              </div>
              <div className="col-2">
                <small className="text-primary">Price: ${book.price}</small>
                <div></div>
                <span
                  className="badge text-bg-primary rounded-pill"
                  title="Available"
                >
                  Available: {book.availableStock}
                </span>
              </div>
              <div className="col-2">
                <p className="mb-1"></p>
                <div className="d-flex w-100 justify-content-between">
                  <small className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"></small>
                  {/* <button type="button" className="btn btn-outline-warning">
                    Buy
                  </button> */}
                  {/* <PurchaseProvider key3={book.id}>                
                  </PurchaseProvider>  onClick={() => OnInfo(book.id)}*/}
    
                  <ButtonBuy_cmp keyButton={book.id} ></ButtonBuy_cmp>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
