import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import foodHero from "../../images/foodHero.jpg"

export default function NavBar() {

  return (
    <div className="navbar">
        <ul className="navbarList">
            <li className="navbarLeft"><Link to ="/" className="link">fionon</Link></li>
            <li className="navbarRight">
                <Link to="/login" className="link">green room</Link>
            </li>
        </ul>
    </div>
  )
}
