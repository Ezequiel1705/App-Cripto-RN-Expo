import {  StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

export default function SignupScreen({navigation}) {

  const [ name, setName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ confirmPasswordError, setConfirmPasswordError ] = useState("");

    const onHandleSignup = async () => {
        console.log("Se Preciono button")

        if (password) {
          try {
              console.log("Registrando usuario...");
              const userData = {
              name: name,
              email: email,
              password: password
              };
      
              const response = await axios.post('https://api-nodejs-mongodb-cripto-production.up.railway.app/api/auth/register', userData);
              // Manejar la respuesta del registro, por ejemplo, mostrar un mensaje de éxito.
              console.log(response.data);
              if (userData) {
                Alert.alert('Registro exitoso, ya esta listo para que hacer login')
                navigation.navigate("SignIn")
              }
          }catch (error) {
              // Manejar errores, como mostrar un mensaje de error al usuario.
              console.error(error);
          }
        } else {
          setConfirmPasswordError("Las contraseñas no coinciden.");
        }
    }

  return (
    <View style={styles.container}>

      <Text>SignupScreen</Text>
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter name"
        autoCapitalize="none"
        keyboardType="default"
        textContentType="name"
        autoFocus={true}
        value={name}
        onChangeText={(text) => setName(text)}
        />
        <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Sign Up</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Do you already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{color: '#FF0000', fontWeight: '600', fontSize: 14}}> Log In</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F0F0F",
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "red",
        alignSelf: "center",
        paddingBottom: 24,
      },
      input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
      },
      backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
      },
      whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
      },
      form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,

      },
      button: {
        backgroundColor: '#FF0000',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
})