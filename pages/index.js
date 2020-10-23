import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';


export default function App() {
  const prefix = process.env.NODE_ENV === 'production' ? 'https://budlebee.github.io/tect' : '';
  return (
    <>
    <div className="container">
      <Link href="/techtree/physics" as={ process.env.BACKEND_URL + '/techtree/physics'}>
        <a>
          <div className="card">Physics</div>
        </a>
      </Link>

      <Link href="/techtree/math" as={ process.env.BACKEND_URL + '/techtree/math'}>
        <a>
          <div className="card">Mathematics</div>
        </a>
      </Link>

      <Link href="/techtree/electricalengineering" as={ process.env.BACKEND_URL + '/techtree/electricalengineering'}>
        <a>
          <div className="card">
            Electrical
            <br />
            Engineering
          </div>
        </a>
      </Link>

      <Link href="/techtree/economy" as={ process.env.BACKEND_URL + '/techtree/economy'}>
        <a>
          <div className="card">economy</div>
        </a>
      </Link>
    </div>
    </>
  );
}
