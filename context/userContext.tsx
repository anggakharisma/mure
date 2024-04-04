import { getFontDefinitionFromManifest } from "next/dist/server/font-utils";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react"

type User = {
  email: string;
  token: string;
  id: string;
};

export type UserContextType = {
  user: User | null,
  setUser: Dispatch<SetStateAction<User | null>>,
  saveToLocalStorage: any,
  getFromLocalStorage: any
}

export const UserContext = createContext<UserContextType | null>(null);


const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => { getFromLocalStorage() }, []);

  useEffect(() => {
    if (user !== null)
      localStorage.setItem('user', JSON.stringify(user));
  }, [user])


  const saveToLocalStorage = () => {
    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  const getFromLocalStorage = () => {
    // @ts-ignore
    setUser(JSON.parse(localStorage.getItem('user')));
  }

  useEffect(() => {
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser, saveToLocalStorage, getFromLocalStorage }}>
      {children}
    </UserContext.Provider>
  )

}

export default UserProvider
