import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../contexts/Auth";

export function Router(){
    const {authData, loading} = useAuth()

    return(
        <NavigationContainer>
            {authData && !loading ? <AppStack />: <AuthStack/>}
        </NavigationContainer>
    )
}