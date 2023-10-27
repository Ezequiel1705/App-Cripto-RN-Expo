import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeScreen from '../../Screens/HomeScreen.js';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CardScreen from '../../Screens/CardScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/LoginScreen.js';
import SignupScreen from '../../Screens/SignupScreen.js';



const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{
        headerStyle: {
          backgroundColor: '#141414'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerBackVisible: false,
        
      }}>
          <Stack.Screen
            name='Blockchain Banco'
            component={HomeScreen}
            options={({navigation})=> ({
              headerRight: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('SignIn') }>
                    <Ionicons name="exit" size={24} color="white" />
                  </TouchableOpacity>
                )
              },
            })}
            
            />
          <Stack.Screen name='Mi Cuenta' component={CardScreen} options={({navigation}) => ({
            headerLeft: () => {
              return(
                <TouchableOpacity onPress={() => navigation.navigate("Blockchain Banco")}>
                  <AntDesign name="back" size={24} color="white" />
                </TouchableOpacity>
              )
            }
          })}/>
          <Stack.Screen 
            name='SignIn'
            component={LoginScreen}
            options={{
                title: 'Authentication',
                headerShown: false
            }}
          />

          <Stack.Screen 
              name='SignUp'
              component={SignupScreen}
              options={{
                  title: 'Register',
                  headerShown: false
              }}
          />

          {/* <Stack.Screen
            name='Signup-Screen'
            component={SignupScreen}
            options={{
              title: 'Autentication'
            }}
          /> */}
      </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})