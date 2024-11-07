import React from "react";
import './header.css';
import { Link } from "react-router-dom";
function Header(){
  return(
    <div>
      <header>
    <div className="container">
        <Link to="/" className="logo">VotreLogo</Link>
        <nav>
            <ul>
              
                <li><Link to="html">Html</Link></li>
                <li><Link to="css">Css</Link></li>
                <li><Link to="js">Js</Link></li>
                
            </ul>
        </nav>
    </div>
</header>

    </div>
  )

}
export default Header;