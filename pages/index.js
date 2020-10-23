import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';


export default function App() {
  return (
    <>
    <div className="container">
      <Link href="/techtree/physics">
        <a>
          <div className="card">Physics</div>
        </a>
      </Link>

      <Link href="/techtree/math">
        <a>
          <div className="card">Mathematics</div>
        </a>
      </Link>

      <Link href="/techtree/electricalengineering">
        <a>
          <div className="card">
            Electrical
            <br />
            Engineering
          </div>
        </a>
      </Link>

      <Link href="/techtree/economy">
        <a>
          <div className="card">economy</div>
        </a>
      </Link>
    </div>
    </>
  );
}
