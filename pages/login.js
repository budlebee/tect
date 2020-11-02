import React, { useState, useCallback } from 'react';
import fire from '../firebaseConfig';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email],
  );
  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password],
  );

  return (
    <div className="container">
      <input onChange={onChangeEmail} name="email" type="email" />
      <input onChange={onChangePassword} name="password" type="password" />
      <button
        onClick={async () => {
          await fire.auth().signInWithEmailAndPassword(email, password);
          window.location.href = '/';
        }}
      >
        Log in
      </button>
      {}
      <button
        onClick={async () => {
          await fire.auth().signOut();
          window.location.href = '/';
        }}
      >
        log out
      </button>
    </div>
  );
}
