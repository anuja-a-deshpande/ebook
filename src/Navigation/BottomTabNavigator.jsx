import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home'
import Details from '../Screens/Details';
import LoginPage from '../Screens/LoginPage'
import Categories from '../Screens/Categories'
// import DrawerNav from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const iconNameMap = new Map();

iconNameMap.set('Home', { iconname: 'home-outline' });
iconNameMap.set('Details', { iconname: 'settings-outline' });
iconNameMap.set('Login', { iconname: 'person-outline' });
iconNameMap.set('Categories', { iconname: 'person-outline' });

const getTitle = (name) => (iconNameMap.has(name) ? iconNameMap.get(name).iconname : name);

export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        showLabel: false,
        headerShown: false,
        headerStyle: { backgroundColor: "blue" },
        tabBarIcon: ({ color }) => (
          <Icon
            name={getTitle(route.name)}
            size={38}
            color={color}
          />
        ),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        tabBarInactiveBackgroundColor: 'white',
        tabBarActiveBackgroundColor:'white',
        borderRadius: 5,
      })}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Login" component={LoginPage} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
}