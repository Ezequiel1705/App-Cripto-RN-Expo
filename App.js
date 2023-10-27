import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import MainNavigator from './Navigation/index';

export default function App() {

  return (

    <SafeAreaView style={{flex: 1}}> 
        <MainNavigator />
    </SafeAreaView>
    
  );
}
