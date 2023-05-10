import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({ pages, setCurrentPage }) {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={`/${page.name}`} onClick={() => setCurrentPage(page)}>
              {capitalizeFirstLetter(page.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
