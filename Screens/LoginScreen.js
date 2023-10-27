import {  StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';



export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    const onHandleLogin = async () => {
      setIsLoading(true);

        console.log("Se Preciono button login")
        try {
          console.log("Iniciando sesión...");
          
          const userData = {
            email: email,
            password: password
          };
    
          const response = await axios.post('https://api-nodejs-mongodb-cripto-production.up.railway.app/api/auth/login', userData);
          // Manejar la respuesta del inicio de sesión, por ejemplo, guardar el token de autenticación.
          console.log(response.data);
          
          if (response.data) {
            setEmail('');
            setPassword('');
            setIsLoading(false);
            return navigation.navigate('Blockchain Banco')
          }
        // Aquí puedes agregar lógica adicional, como redirigir al usuario a otra pantalla.
        } catch (error) {
          // Manejar errores, como mostrar un mensaje de error al usuario.
        console.error(error);
        Alert.alert('Error', 'Ocurrió un error al iniciar sesión. Por favor, verifica tus credenciales y vuelve a intentarlo.');
      }
        
    }
    
    return (

    <View style={styles.container}>
      {isLoading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <Text>LoginScreen</Text>
      <LinearGradient style={styles.whiteSheet} colors={['#252525', '#AF0404', '#000']}></LinearGradient>
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
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
      <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{color: '#FF0000', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
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
        height: '85%',
        position: "absolute",
        bottom: 0,
        /* backgroundColor: '#fff', */
        /* borderTopLeftRadius: 60,
        borderTopRightRadius: 60, */
        borderRadius: 45       
      },
      form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      button: {
        backgroundColor: '#252525',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
})