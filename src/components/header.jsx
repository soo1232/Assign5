import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

  let activeStyle = {
    textDecoration: "underline red"
  };

  return (
    /* Define header menus */
    <header>
      <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Soo Jin Oh</a>
        <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink 
                to="/" 
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              <span class="nav-link">Home</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink 
                to="/about" 
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <span class="nav-link">About</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink 
                to="/projects" 
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <span class="nav-link">Projects |</span>
              </NavLink> {" "}
            </li>
            <li class="nav-item">
              <NavLink 
                to="/contact" 
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <span class="nav-link">Contact</span>
              </NavLink>
            </li>
          </ul>
      </nav>
      </div>
    </header>
  );
}