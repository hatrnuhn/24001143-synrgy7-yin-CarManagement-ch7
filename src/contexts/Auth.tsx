import React, { createContext, useState } from "react"

export type AuthContextType = {
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
