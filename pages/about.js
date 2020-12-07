import { db } from '../firebaseConfig';
import axios from 'axios';
export default function About(props) {
  return (
    <>
      <div className="mainContainer">budlebeee@gmail.com</div>
      <div></div>
    </>
  );
}
/*
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();
  console.log('data is, ', data);
  return {
    props: {
      data,
    },
  };
}
*/
