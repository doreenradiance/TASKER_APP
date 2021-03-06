import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import StartupPage from './src/screens/StartupPage';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage'
import ProfilePage from './src/screens/ProfilePage';
import TasksPage from './src/screens/TasksPage';
import TaskDetail from "./src/screens/TaskDetail";
import AccountPage from "./src/screens/AccountPage";
import ActivityPage from "./src/screens/ActivityPage";
import WithdrawalPage from "./src/screens/WithdrawalPage";
import CreateTaskPage from './src/screens/CreateTaskPage';
import ProfileEditPage from "./src/screens/ProfileEditPage";
import DepositPage from "./src/screens/DepositPage";
import ApplicantsPage from "./src/screens/ApplicantsPage";
import store from './src/redux/store';
import FlashMessage from "react-native-flash-message";
import { LogBox } from 'react-native';
import MyTasks from './src/screens/MyTasks';

LogBox.ignoreLogs(['Setting a timer']);

const Stack = createStackNavigator()


export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Startup" component={StartupPage}
          />
          <Stack.Screen
          options={{
            title: "LOG IN",
            headerStyle: {
              backgroundColor: "#290f59"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",}}
            name="Login" component={LoginPage}
          />
          <Stack.Screen
           options={{
            title: "SIGN UP",
            headerStyle: {
              backgroundColor: "#290f59"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",}}
            name="Signup" component={SignupPage}
          />
          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Profile" component={ProfilePage}
          />
          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Tasks" component={TasksPage}
          />
          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Detail" component={TaskDetail}
          />
          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Account" component={AccountPage}
          />
          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Activity" component={ActivityPage}
          />
          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Withdraw" component={WithdrawalPage}
          />

          <Stack.Screen
            options={{
              header: () => null
            }}
            name="CreateTask" component={CreateTaskPage}
          />

          <Stack.Screen
            options={{
              header: () => null
            }}
            name="ProfileEdit" component={ProfileEditPage}
          />

          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Deposit" component={DepositPage}
          />

          <Stack.Screen
            options={{
              header: () => null
            }}
            name="Applicants" component={ApplicantsPage}
          />

          <Stack.Screen
            options={{
              header: () => null
            }}
            name="MyTasks" component={MyTasks}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position='top' duration={3000} />
    </Provider>
  )
}
