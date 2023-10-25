import { ReactNode, createContext, useMemo, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  userData: string | null;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState<string | null>(null);

  //   const signIn = useCallback(() => {}, []);

  //   const signOut = useCallback(() => {}, []);

  //   setUserData('authorized');

  const providerValue = useMemo(() => {
    return {
      userData
    };
  }, [userData]);

  return (
    <AuthContext.Provider value={providerValue} data-testid="authprov">
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
