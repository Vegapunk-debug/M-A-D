// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SkillsProvider } from './src/context/SkillsContext';

import { ThemeProvider } from './src/context/ThemeContext';
import { NotificationProvider } from './src/context/NotificationContext';

export default function App() {
  return (
    <SkillsProvider>
      <ThemeProvider>
        <NotificationProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
              <AppNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </NotificationProvider>
      </ThemeProvider>
    </SkillsProvider>
  )
}
