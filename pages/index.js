import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';

export default function App() {
  return (
    <>
      <div className="container">
        <Link
          href="/techtree/physics"
          as={process.env.BACKEND_URL + '/techtree/physics'}
        >
          <a>
            <div className="block">
              <img src="../static/icons/physics.svg" height="70" width="70" />
              <br />
              Physics
            </div>
          </a>
        </Link>

        <Link
          href="/techtree/math"
          as={process.env.BACKEND_URL + '/techtree/math'}
        >
          <a>
            <div className="block">
              <img src="../static/icons/math.svg" height="70" width="70" />
              <br />
              Mathematics
            </div>
          </a>
        </Link>

        <Link
          href="/techtree/electricalengineering"
          as={process.env.BACKEND_URL + '/techtree/electricalengineering'}
        >
          <a>
            <div className="block">
              <img
                src="../static/icons/electricity.svg"
                height="50"
                width="50"
              />
              <br />
              Electrical
              <br />
              Engineering
            </div>
          </a>
        </Link>

        <Link
          href="/techtree/economy"
          as={process.env.BACKEND_URL + '/techtree/economy'}
        >
          <a>
            <div className="block">
              <img src="../static/icons/economy.svg" height="70" width="70" />
              <br />
              economy
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
