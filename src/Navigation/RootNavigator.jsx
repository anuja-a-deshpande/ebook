import * as React from 'react';
// import Home from '../Screens/Home'
import Details from '../Screens/Details';
// import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
// import React from "react";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function  RootNavigator  () {
    return (
   <Stack.Navigator screenOptions={{
      headerShown: true,
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
    )
}

// export default function  RootNavigator  () {
//     return (
//    <View>
//        <Text>RootNavigator</Text>
//    </View>
//     )
// }

// export default function RootNavigator() {
//   return (
//       <v
//     // <Stack.Navigator screenOptions={{
//     //   headerShown: false,
//     // }}
//     // >
//     //   <Stack.Screen name="Home" component={Home} />
//     //   <Stack.Screen name="Details" component={Details} />
//     // </Stack.Navigator>
//   );
// }