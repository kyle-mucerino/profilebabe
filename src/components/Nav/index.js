import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Nav({ pages, setCurrentPage }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#002244" }}>
      <Toolbar>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          {pages.map((page) => (
            <li key={page.name} style={{ display: "inline", marginRight: 10 }}>
              <Link
                to={`/${page.name}`}
                onClick={() => setCurrentPage(page)}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}
              >
                {capitalizeFirstLetter(page.name)}
              </Link>
            </li>
          ))}
        </ul>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
