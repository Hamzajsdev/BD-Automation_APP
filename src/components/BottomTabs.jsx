import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import Home from '../screen/HomeScreen/Home';
import JobPosted from '../screen/PostedJob/JobPosted';
import theme from '../common/Theme';
import Portfolio from '../screen/Portfolio';
import Proposal from '../screen/Proposal';
import Profile from '../screen/Profile';


const BottomTabs = () => {
    const { width, height } = useWindowDimensions()
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconImage;
                    let ticketImg;
                    let containerStyle;

                    if (route.name === 'Home') {
                        iconImage = require('../assets/icon/BottomTabs/home.png');
                    } else if (route.name === 'Posted Jobs') {
                        iconImage = require('../assets/icon/BottomTabs/jobs.png');
                    } else if (route.name === 'Portfolio') {
                        ticketImg = require('../assets/icon/BottomTabs/home.png');
                    } else if (route.name === 'proposal') {
                        iconImage = require('../assets/icon/BottomTabs/proposal.png');
                    } else if (route.name === 'Profile') {
                        iconImage = require('../assets/icon/BottomTabs/profile.png');
                    }
                    const tintColor = focused ? theme.colors.purple : theme.colors.gray;
                    return (
                        <View >
                            <View>
                                <Image source={iconImage} style={{tintColor, marginTop:5 }} />
                            </View>
                            <View style={[containerStyle]}>
                                <Image source={ticketImg}  />
                            </View>
                        </View>
                    )
                },
            
                tabBarStyle: {
                    backgroundColor: '#444444', 
                    bottom: 20, width: width / 1 - 32, left: 16, borderRadius: 15, gap: 10,  
                    borderColor:0, 
                    height:height/13,
                   
                        
                },
                tabBarLabel: ({ focused }) => {
                    const routeName = route.name;
                    const textColor = focused ? theme.colors.purple : 'white';

                    switch (routeName) {
                        case 'Home':
                        case 'Posted Jobs':
                        case 'Portfolio':
                        case 'proposal':
                        case 'Profile':
                            return <Text style={{ color: textColor, fontSize: 11, fontWeight: '400', bottom:2 }}>{routeName}</Text>;
                        default:
                            return null;
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Posted Jobs" component={JobPosted} />
            <Tab.Screen name="Portfolio" component={Portfolio} />
            <Tab.Screen name="proposal" component={Proposal} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
export default BottomTabs