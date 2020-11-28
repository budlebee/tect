import React from 'react';
import Link from 'next/link';

export default function SubjectBlock({ subjectName, iconSize, displayName }) {
  return (
    <>
      <Link
        href={`/techtree/${subjectName}`}
        as={process.env.BACKEND_URL + `/techtree/${subjectName}`}
      >
        <a>
          <div className="block">
            <img
              src={`../statics/icons/${subjectName}.svg`}
              height={iconSize}
              width={iconSize}
            />
            <br />
            {displayName}
          </div>
        </a>
      </Link>
    </>
  );
}
