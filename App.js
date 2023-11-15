import { useState } from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import Slider from '@react-native-community/slider'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


export default function App() {
  const [size, setSize] = useState(10)

  function generatePassword() {
    let password = ""
    for(let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    console.log(password)

  }

  return (
    <View style={styles.container}>
    
      <Image 
        source={require("./assets/lock.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={60}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#111"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity 
        onPress={generatePassword}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    Background: 'f3f3ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60,
    width: 150,
    height: 150
  }, 
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor:"#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
})