import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screen/AuthScreen/Signin';
import Home from '../screen/HomeScreen/Home';
import JobPosted from '../screen/PostedJob/JobPosted';
import BottomTabs from '../components/BottomTabs';



const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Signin' component={Signin} />
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                {/* <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='JobPosted' component={JobPosted} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation