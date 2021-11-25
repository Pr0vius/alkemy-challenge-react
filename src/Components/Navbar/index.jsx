import React, { useContext } from "react";
import { Link } from "react-router-dom";
import auth from "../../services/auth";
import { AuthContext } from "../../context";

const Navbar = () => {
  const { authState } = useContext(AuthContext);

  return (
    <div
      className="navbar navbar-dark bg-info position-sticky top-0 vw-100"
      style={{ zIndex: 10000 }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand me-auto">
          SuperHero Teams
        </Link>

        {authState.auth ? (
          <ul className="navbar-nav me-2">
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  auth.logout();
                }}
                to="/login"
              >
                LogOut
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
