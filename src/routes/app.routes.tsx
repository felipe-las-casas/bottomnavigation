import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../pages/Feed";
import { AntDesign } from '@expo/vector-icons';
import New from "../pages/New";
import Profile from "../pages/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name='feed'
                component={Feed}
                options={{
                    tabBarIcon: (({ size, color}) => 
                    <AntDesign name="home" size={24} color="black" />
                    
                    )
                }}
            />
            <Screen
                name='new'
                component={New}
                options={{
                    tabBarIcon: (({ size, color}) => 
                    <AntDesign name="home" size={24} color="black" />
                    
                    )
                }}
            />
            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: (({ size, color}) => 
                    <AntDesign name="home" size={24} color="black" />
                    
                    )
                }}
            />
        </Navigator>
    );
}