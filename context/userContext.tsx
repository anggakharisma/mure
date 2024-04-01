import { createContext, Dispatch, SetStateAction, useState } from "react"

type User = {
  email: string;
  token: string;
};

type UserContextType = {
  user: User | null,
  setUser: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextType | null>(null);


const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )

}

export default UserProvider
