import React from 'react';
import { Link } from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-item">
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>TechTrees</a>
        </Link>
      </span>
      <span className="navbar-item">
        <Link
          href="/articles/main"
          as={process.env.BACKEND_URL + '/articles/main'}
        >
          <a>Articles</a>
        </Link>
      </span>
      <span className="navbar-item">
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <a>About</a>
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
