import React, {useState, useCallback, useContext, createContext} from 'react';

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState({ name: 'Lucas'});
  const [signed, setSigned] = useState(user);
  
  useCallback(() => {
    if(user === null){
      setSigned(false);
    }
    setSigned(true);
  })

  return <AuthContext.Provider value={{ signed, user }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}


