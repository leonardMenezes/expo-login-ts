import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";

export function HomeScreen() {
  const [data, setData] = useState<any>()
  
    return (
      <View style={styles.container}>
        <Text style={ styles.text}>LOGADO</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    text:{
      color: '#40E0D0',
      fontWeight: "bold",
      fontSize: 25
    }
  })