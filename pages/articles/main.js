import React from 'react';
import Link from 'next/link';
export default function About() {
  return (
    <div className="container">
      <Link href="/articles/1" as={process.env.BACKEND_URL + '/articles/1'}>
        <a>Joel Spolsky: 컴퓨터과학과 대학생들을 위한 조언</a>
      </Link>
    </div>
  );
}
