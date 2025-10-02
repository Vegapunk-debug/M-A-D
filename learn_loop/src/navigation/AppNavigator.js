import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import MatchesScreen from "../screens/MatchesScreen";
import Settings from "../screens/Settings";



const Tab = createBottomTabNavigator();



export default function AppNavigator() {


  return (

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home";
            if (route.name === "Matches") iconName = "people";
            if (route.name === "Profile") iconName = "person";
            if (route.name === "Settings") iconName = "settings";
            return <Ionicons name={iconName} size={size} color={color} />},
          tabBarActiveTintColor: "#6B46C1",
          tabBarInactiveTintColor: "gray",
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Matches" component={MatchesScreen} />
        <Tab.Screen name="Profile" component={Settings} />
        <Tab.Screen name="Settings" component={Settings} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
