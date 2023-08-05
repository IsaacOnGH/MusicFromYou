import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-bold" to="/">
            <h1 className="m-0">𝕸𝖚𝖘𝖎𝖈 𝕱𝖗𝖔𝖒 𝖄𝖔𝖚</h1>
          </Link>
          <p className="m-0">  𝑴𝒖𝒔𝒊𝒄 𝑭𝒓𝒐𝒎 𝒀𝒐𝒖 𝒊𝒔 𝒂 𝒑𝒍𝒂𝒕𝒇𝒐𝒓𝒎 𝒇𝒐𝒓 𝒍𝒐𝒄𝒂𝒍 𝒂𝒓𝒕𝒊𝒔𝒕𝒔 𝒕𝒐 𝒔𝒉𝒐𝒘𝒄𝒂𝒔𝒆 𝒕𝒉𝒆𝒊𝒓 𝒎𝒖𝒔𝒊𝒄 𝒕𝒐 𝒎𝒖𝒔𝒊𝒄 
          𝒇𝒂𝒏𝒔 𝒘𝒉𝒐 𝒂𝒓𝒆 𝒍𝒐𝒐𝒌𝒊𝒏𝒈 𝒕𝒐 𝒅𝒊𝒔𝒄𝒐𝒗𝒆𝒓 𝒏𝒆𝒘 𝒎𝒖𝒔𝒊𝒄. 𝑰𝒇 𝒚𝒐𝒖'𝒓𝒆 𝒂 𝒍𝒐𝒄𝒂𝒍 𝒂𝒓𝒕𝒊𝒔𝒕 𝒘𝒂𝒏𝒕𝒊𝒏𝒈 𝒕𝒐 𝒑𝒖𝒕 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒐𝒖𝒕 𝒕𝒉𝒆𝒓𝒆,
           𝒑𝒍𝒆𝒂𝒔𝒆 𝒄𝒓𝒆𝒂𝒕𝒆 𝒂𝒏 𝒂𝒄𝒄𝒐𝒖𝒏𝒕 𝒂𝒏𝒅 𝒔𝒉𝒂𝒓𝒆 𝒚𝒐𝒖𝒓 𝒎𝒖𝒔𝒊𝒄 𝒉𝒆𝒓𝒆! 𝑰𝒇 𝒚𝒐𝒖'𝒓𝒆 𝒂 𝒎𝒖𝒔𝒊𝒄 𝒇𝒂𝒏 𝒘𝒉𝒐 𝒘𝒂𝒏𝒕𝒔 𝒏𝒆𝒘 𝒎𝒖𝒔𝒊𝒄 𝒕𝒐 𝒍𝒊𝒔𝒕𝒆𝒏 𝒕𝒐,
            𝒐𝒓 𝒋𝒖𝒔𝒕 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒚𝒐𝒖𝒓 𝒍𝒐𝒄𝒂𝒍 𝒂𝒓𝒕𝒊𝒔𝒕, 𝒘𝒆 𝒈𝒐𝒕 𝒚𝒐𝒖 𝒄𝒐𝒗𝒆𝒓𝒆𝒅. 𝑪𝒓𝒆𝒂𝒕𝒆 𝒂𝒏 𝒂𝒄𝒄𝒐𝒖𝒏𝒕 𝒂𝒏𝒅 𝒔𝒕𝒂𝒓𝒕 𝒃𝒓𝒐𝒘𝒔𝒊𝒏𝒈 𝒐𝒖𝒓 𝒈𝒓𝒆𝒂𝒕 𝒍𝒐𝒄𝒂𝒍 𝒂𝒓𝒕𝒊𝒔𝒕!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-info m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
