import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View ,AppRegistry, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigation/RootNavigator'
import { name as appName } from './app.json';

if (Platform.OS === 'android') {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
