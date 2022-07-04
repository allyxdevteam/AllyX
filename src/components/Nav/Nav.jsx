import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";

import { useSelector } from "react-redux";
import BottomNav from "./Components/BottomNav";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
    
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">AllyX</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/home">
              Home
            </Link>

            {user.is_admin && (
              // If a user is an admin, show a link to the admin dashboard
              <Link className="navLink" to="/admin">
                Admin Dashboard
              </Link>
            )}

            <Link className="navLink" to="/profile">
              Profile
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
    </>
  );
}

export default Nav;
