import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../contexts/Auth";

const Stack = createNativeStackNavigator();

function Header() {
    const {signOut} = useAuth()

    return (
      <View style={styles.container}>
           <TouchableOpacity
                style={styles.button}
                onPress={()=>signOut()}
            >
                <Text style={styles.text}>signOut</Text>
            </TouchableOpacity>
      </View>
    );
  }

export function AppStack(){
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <Header /> }}/>
         </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: '#fff',
    },
    button:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: '#FA8072',
      marginRight: 30
    },
    text:{
      color: '#FA8072',
      fontWeight: "bold",
    }
  })