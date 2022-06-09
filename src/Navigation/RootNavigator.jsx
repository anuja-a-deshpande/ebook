import * as React from 'react';
import Home from '../Screens/Home'
import Details from '../Screens/Details';
import MyTabs from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function  RootNavigator  () {
    return (
   <Stack.Navigator screenOptions={{
      headerShown: true,
    }}
    >
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Details" component={Details} /> */}
      <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
    )
}
