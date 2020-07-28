import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import PhoneNumberScreen from '../screens/register/PhoneNumberScreen';
import SplashScreen from '../screens/SplashScreen';

let navigationOptions = {
  animationEnabled: true,
};
// const navigator = createStackNavigator(
//   {
//     Splash: SplashScreen,
//   },
//   {
//     headerMode: false,
//     initialRouteName: 'Splash',
//   },
// );
const navigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions,
    },
    PhoneNumber: {
      screen: PhoneNumberScreen,
      navigationOptions,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

// const MyAppTwo = createStackNavigator(
//   {
//     Requests: {
//       screen: Requests,
//       navigationOptions,
//     },
//   },
//   {
//     initialRouteName: 'Dashboard',
//     headerMode: 'none',
//   },
// );

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: MyApp,
//       navigationOptions: {
//         tabBarVisible: false,
//       },
//     },
//     Dashboard: {
//       screen: MyAppTwo,
//       navigationOptions: {
//         tabBarVisible: false,
//       },
//     },
//     ResetPassword: {
//       screen: ResetPassword,
//       path: 'reset-password/:token',
//       navigationOptions: {
//         tabBarVisible: false,
//       },
//     },
//     EmailVerification: {
//       screen: EmailVerification,
//       path: 'email-verification',
//       navigationOptions: {
//         tabBarVisible: false,
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

export default createAppContainer(navigator);
