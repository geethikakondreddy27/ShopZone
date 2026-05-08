import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext =
  createContext();

function AuthProvider({
  children,
}) {

  const [user, setUser] =
    useState(() => {

      const savedUser =
        localStorage.getItem(
          "user"
        );

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    });

  // LOGIN
  const login = (
    name,
    email
  ) => {

    const newUser = {

      name,
      email,

    };

    setUser(newUser);
  };

  // LOGOUT
  const logout = () => {

    setUser(null);

    localStorage.removeItem(
      "user"
    );
  };

  // SAVE USER
  useEffect(() => {

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

  }, [user]);

  return (

    <AuthContext.Provider
      value={{

        user,

        isLoggedIn:
          !!user,

        login,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;