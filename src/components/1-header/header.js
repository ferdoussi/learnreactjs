import React from "react";
import './header.css';
import { Link, NavLink } from "react-router-dom";
function Header(){
  return(
    <div>
      <header>
    <div className="container">
        <Link to="/" className="logo">VotreLogo</Link>
        <nav>
            <ul>
              
                <li><NavLink to="/html" className="html" >Html</NavLink></li>
                <li><NavLink to="/css" className="html">Css</NavLink></li>
                <li><NavLink to="/js" className="html">Js</NavLink></li>
                
            </ul>
        </nav>
    </div>
</header>

    </div>
  )

}
export default Header;