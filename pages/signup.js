import React, { useState, useCallback } from 'react';
import fire from '../firebaseConfig';

export default function SignUp() {
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

  function firebaseUserCreate(email, password) {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    console.log('firebase user create on');
  }
  return (
    <div className="container">
      <form onSubmit={firebaseUserCreate(email, password)}>
        <input onChange={onChangeEmail} name="email" type="email" />
        <input onChange={onChangePassword} name="password" type="password" />
        <button
          onClick={async () => {
            await fire.auth().createUserWithEmailAndPassword(email, password);
            window.location.href = '/';
          }}
        >
          create user
        </button>
      </form>
    </div>
  );
}
