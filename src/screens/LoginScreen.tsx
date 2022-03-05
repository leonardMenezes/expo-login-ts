import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextButton } from "../components/TextButton";
import { useAuth } from "../contexts/Auth";

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth()
 
    return (
      <View style={styles.container}>
        <View style={{width: '100%', paddingHorizontal: 80}}>
        <TextButton 
          placeholder="e-mail" 
          value={email} 
          onChangeText={setEmail} 
          placeholderTextColor="#40E0D0"
        />
        <TextButton
          placeholder="senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#40E0D0"
        />
        </View>
        <View >
          <TouchableOpacity
          style={styles.button}
          onPress={()=>signIn(email, password)}
        >
            <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#40E0D0'
  },
  text:{
    color: '#40E0D0',
    fontWeight: "bold",
  }
})