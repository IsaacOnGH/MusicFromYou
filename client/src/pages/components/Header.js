/* import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/Header.css';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <div>
          <Link className="" to="/">
            <h1 className="musicFromYou">Music From You ♫♫♫</h1>
          </Link>
          <p className="">Music From You is a platform for local artists to showcase their music to music fans who are looking to discover new music. If you're a local artist wanting to put yourself out there, please create an account and share your music here! If you're a music fan who wants new music to listen to, or just want to support your local artist, we got you covered. Create an account and start browsing our great local artist! </p> 
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; */