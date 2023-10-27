import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './Stacks/ShopStack';

const MainNavigator = () => {

  return (
    <NavigationContainer>
      <ShopStack />
    </NavigationContainer>
  
  )
}

export default MainNavigator;