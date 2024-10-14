import React, { useContext } from "react";
// import { CheckSmall } from "./CheckSmall";
// import circleposComNormal1 from "./circlepos-com-normal-1.png";
// import icon from "./icon.svg";
// import logo from "./logo.svg";
import "../../styles/styleCircle.css";
import ListBook_cmp from "../../components/ListBook_cmp";
import { BooksContext } from "../context/BookContext";
import { NavLink } from "react-router-dom";

export const CircleBookstore = () => {
  const { books, isLoading } = useContext(BooksContext);
  return (
    <div className="circle-bookstore">
      <div className="type-simple-website">
        <div className="brand">
          <img
            className="circlepos-com-normal"
            alt="Circlepos com normal"
            src={
              "https://c.animaapp.com/b29AHa7X/img/circlepos-com-normal-1@2x.png"
            }
          />
        </div>
        <div className="nav-links">
          <div className="nav-link">            
            <NavLink
              to={{
                pathname: "/",
              }}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }  link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover`
              }
            >
              Home
            </NavLink>
          </div>
          <div className="nav-link">
          <NavLink
              to={{
                pathname: "/books",
              }}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }  link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover`
              }
            >
              Books
            </NavLink>
          </div>
          <div className="nav-link">
            <div className="nav-label">Meet the Team</div>
          </div>
          <button className="button">
            <div className="text-container">
              <button className="CTA">User Login</button>
            </div>
          </button>
          <button className="text-container-wrapper">
            <div className="text-container">
              <button className="text-wrapper">Create Account</button>
            </div>
          </button>
        </div>
      </div>

      <div className="col-12" style={{ margin: 100 }}>
        <ListBook_cmp books={books} />
      </div>

      <div className="property-image">
        <div className="type-simple">
          <div className="div-2"></div>
          <div className="credits">
            <div className="divider" />
            <div className="div-2">
              <div className="footer-links">
                <div className="text-wrapper-2">Privacy Policy</div>
                <div className="text-wrapper-2">Terms of Service</div>
                <div className="text-wrapper-2">Cookie Preferences</div>
              </div>
              <p className="text-wrapper-2">
                © 2024 Books. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
