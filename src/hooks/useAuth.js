import React, {useState, useContext, createContext} from 'react';

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState({
    name: '',
  });

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}


