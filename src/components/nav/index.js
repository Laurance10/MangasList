import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="title has-text-white-bis">[ CinnectaAPI ]</h1>
        </div>
        <Link to="/" className="navbar-item">
          Pesquisa
        </Link>
      </div>
    </nav>
  );
}

export default Nav;