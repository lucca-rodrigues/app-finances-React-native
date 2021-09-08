import React, {useState, useContext, createContext} from 'react';

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState({});

  return <AuthContext.Provider value={{ signed: !!user, user }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}


