import React from 'react'
import Book_cmp from '../../components/Book_cmp';
import "../../styles/styleCircle.css";
import { NavLink, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CurrentBookProvider from '../context/CurrentBookProvider';

export default function Book_pag() {
  const [searchParams, setSearchParams] = useSearchParams();
  const xid = searchParams.get("id");
  return (
    <>
      <hr/>
      <CurrentBookProvider key2={xid}>
        <Book_cmp />
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `nav-link ${
              isActive ? "active" : ""
            } link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-success`
          }
        >
          <FontAwesomeIcon icon={faLongArrowLeft} size="1x" />
          Back
        </NavLink>       
      </CurrentBookProvider>
    </>
  );
}
