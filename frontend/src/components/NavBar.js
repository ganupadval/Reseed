import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import shop from "../pages/Shop";

import "../index.css";


function NavBar() {
  let { user, logoutUser } = useContext(AuthContext);

  // let history = useHistory();
  return (
    <>
      <nav style={{background:"aliceblue"}}
        role="navigation"
        class="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top"
      >
        <div class="container">
          <div class="navbar-header">
            <button
              data-target="#navbar-collapse-02"
              data-toggle="collapse"
              class="navbar-toggle"
              type="button"
            >
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle navigation</span>
            </button>
            <a href="index.html" class="navbar-brand brand">
              {" "}
              RE_SEED{" "}
            </a>
          </div>
          <div id="navbar-collapse-02" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
             
              <li class="propClone">
                <Link to="/shop">Shop</Link>
              </li>

              <li class="propClone">
                <Link to="/sellnow">Sell Now</Link>
              </li>
                {user ? (<li class="propClone"><a>Hello  {user.username }</a>  </li>) : (<li><Link to="/register">Register</Link></li>)}
             
                {user ? (<li class="propClone" onClick={logoutUser}><a>Logout</a>  </li>) : (<li><Link to="/login">Login</Link></li>)}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
