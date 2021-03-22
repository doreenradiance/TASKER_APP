import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartupPage from './src/screens/StartupPage';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage'
import ProfilePage from './src/screens/ProfilePage';
import TasksPage from './src/screens/TasksPage';
import TaskDetail from "./src/screens/TaskDetail";
import AccountPage from "./src/screens/AccountPage";
import ActivityPage from "./src/screens/ActivityPage";
import WithdrawalPage from "./src/screens/WithdrawalPage";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screens name="Login" component={LoginPage}/>
        <Stack.Screens name="Signup" component={SignupPage}/>
        <Stack.Screens name="Profile" component={ProfilePage}/>
        <Stack.Screens name="Tasks" component={TasksPage}/>
        <Stack.Screens name="Detail" component={TaskDetail}/>
        <Stack.Screens name="Account" component={AccountPage}/>
        <Stack.Screens name="Activity" component={ActivityPage}/>
        <Stack.Screens name="Withdraw" component={WithdrawalPage}/>
    
      </Stack.Navigator>

    </NavigationContainer>


    // <StartupPage />
    // <LoginPage />
    // <SignupPage />
    // <ProfilePage />
    // <TasksPage />
    // <TaskDetail />
    // <AccountPage />
    // <ActivityPage />
    // <WithdrawalPage />
  )
}
