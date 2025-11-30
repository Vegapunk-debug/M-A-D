import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import HomeScreen from '../screens/HomeScreen';
import Explore from '../screens/Explore';
import ProfileScreen from '../screens/ProfileScreen';
import AddSkillScreen from '../screens/AddSkillScreen';
import { COLORS } from '../colorPallete/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.iconDefault,
        tabBarStyle: {
           borderTopColor: COLORS.border,
           backgroundColor: COLORS.card,
           elevation: 0, 
           height: 60,
           paddingBottom: 8,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Explore') {
            iconName = focused ? 'compass' : 'compass-outline';
        } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
        } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
        }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Add" component={AddSkillScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;