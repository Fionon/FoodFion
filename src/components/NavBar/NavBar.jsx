import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import foodHero from "../../images/foodHero.jpg"

export default function NavBar() {

    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to ="/" className="link">HOME</Link></li>
                <li className="topListItem"><Link to ="/" className="link">ABOUT</Link></li>
                <li className="topListItem"><Link to ="/" className="link">CONTACT</Link></li>
                <li className="topListItem"><Link to ="/write" className="link">WRITE</Link></li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img className="topImg"
                      src={foodHero}
                      alt="food profile"
                    />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className="link">REGISTER</Link>
                        </li> 
                    </ul>

                )
            }
        
          
            <i className="topSearchIcon fa-light fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
