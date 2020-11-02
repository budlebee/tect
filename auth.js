import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import fire from './firebaseConfig';

const AuthContext = createContext({ user: null });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return fire.auth().onIdTokenChanged(async (user) => {
      console.log(`auth changed`);
      console.log(user ? user.uid : 'no user');
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'noUserToken', '', {});
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      // TODO: 토큰 이름 암호화 해야함.
      nookies.set(undefined, 'loginToken', token, { maxAge: 60 * 60 * 24 });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
