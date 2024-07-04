import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";

export type User = {
    userId: number,
    username: string,
    email: string,
}

export type Admin = {
    adminId: number,
    username: string,
    email: string,
}

export type AuthContextType = {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
    admin: Admin | null,
    setAdmin: Dispatch<SetStateAction<Admin | null>>
}

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [admin, setAdmin] = useState<Admin | null>(null)

    return (
        <AuthContext.Provider value={{ user,  setUser, admin, setAdmin }}>
            {children}            
        </AuthContext.Provider>
    )
}

export default AuthProvider