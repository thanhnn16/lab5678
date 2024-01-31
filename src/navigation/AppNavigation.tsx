import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DetailScreen from '../screens/DetailScreen';
import ReviewScreen from '../screens/ReviewScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Details" component={DetailScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Reviews" component={ReviewScreen} options={{
        headerTitle: 'Reviews',
        headerTitleStyle: {
          color: '#fff',
        },
      }}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
