import * as React from 'react';
import SignUpComponent from '../Screens/SignUpPage'
import MyTabs from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function  RootNavigator  () {
    return (
   <Stack.Navigator screenOptions={{
      headerShown: true,
    }}
    >
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="SignUpScreen" component={SignUpComponent} />
    </Stack.Navigator>
    )
}
