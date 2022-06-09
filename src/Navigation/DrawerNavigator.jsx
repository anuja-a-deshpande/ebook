import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from '../Screens/Cart';
import Categories from '../Screens/Categories'
import Settings from '../Screens/Settings'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {

    <Drawer.Navigator>
        <Drawer.Screen name="Cart" component={Cart}  />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>

}