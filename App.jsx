import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import * as React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { name as appName } from './app.json';
import RootNavigator from './src/Navigation/RootNavigator';
// import DrawerNav from './src/Navigation/DrawerNavigator';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
if (Platform.OS === 'android') {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
