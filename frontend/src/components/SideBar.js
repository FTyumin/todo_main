import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import React from "react";
import "../css/sidebar.css";
import ProtectedPage from "../utils/user";
import User from "../utils/user";

const SideBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
        <div>
          {user ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/status">Status</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SideBar;