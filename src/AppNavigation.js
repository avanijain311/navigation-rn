import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Splash';
import Login from './Login';

const stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
        <stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})