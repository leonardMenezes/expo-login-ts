import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import { autService } from "../services/authService";

export interface AuthData{
    token: string
    email: string
    name: string
}
interface AuthContextData {
    authData?: AuthData
    signIn: (email: string, password: string)=> Promise<AuthData>
    signOut: () => Promise<void>
    loading: boolean
    any?: any
}
export interface post{
    titulo: string
    mensagem: string
  }

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuth] = useState<AuthData>();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        loadFromStorage()
    }, [])

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData')
        auth && setAuth(JSON.parse(auth) as AuthData)
        setLoading(false)
    }

    async function signIn(email: string, password: string): Promise<AuthData>{
        try {
            const auth = await autService.signIn(email, password)
            setAuth(auth)
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth))

            return auth
            
        } catch (error) {
            Alert.alert(error.message, 'tente novamente!')
        }
    }
    async function signOut(): Promise<void>{
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')

        return
    }

    return(
        <AuthContext.Provider value={{authData, loading, signIn,  signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}
