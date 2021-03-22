import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartupPage from './src/screens/StartupPage';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage'
import ProfilePage from './src/screens/ProfilePage';
import TasksPage from './src/screens/TasksPage';
import TaskDetail from "./src/screens/TaskDetail";
import AccountPage from "./src/screens/AccountPage";
import ActivityPage from "./src/screens/ActivityPage";
import WithdrawalPage from "./src/screens/WithdrawalPage";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Startup" component={StartupPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Tasks" component={TasksPage} />
        <Stack.Screen name="Detail" component={TaskDetail} />
        <Stack.Screen name="Account" component={AccountPage} />
        <Stack.Screen name="Activity" component={ActivityPage} />
        <Stack.Screen name="Withdraw" component={WithdrawalPage} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}
