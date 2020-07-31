import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import PhoneNumberScreen from '../screens/register/PhoneNumberScreen';
import SnapchatScreen from '../screens/register/SnapchatScreen';
import CreateProfileScreen from '../screens/register/CreateProfileScreen';
import AddPhotosScreen from '../screens/register/AddPhotosScreen';
import PermissionsScreen from '../screens/register/PermissionsScreen';

import HomeScreen from '../screens/Home';
import DiscoverScreen from '../screens/Discover';
import ExploreScreen from '../screens/Explore';
import FriendsScreen from '../screens/Friends';
import ProfileScreen from '../screens/Profile';


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
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // tabBarVisible: false,
      },
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        // tabBarVisible: false,
      },
    },
    Explore: {
      screen: ExploreScreen,

      navigationOptions: {
        // tabBarVisible: false,
      },
    },
    Friends: {
      screen: FriendsScreen,

      navigationOptions: {
        // tabBarVisible: false,
      },
    },
    Profile: {
      screen: ProfileScreen,

      navigationOptions: {
        // tabBarVisible: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
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
    Snapchat: {
      screen: SnapchatScreen,
      navigationOptions,
    },
    CreateProfile: {
      screen: CreateProfileScreen,
      navigationOptions,
    },
    AddPhotos: {
      screen: AddPhotosScreen,
      navigationOptions,
    },
    Permissions: {
      screen: PermissionsScreen,
      navigationOptions,
    },
    Main: {
      screen: TabNavigator,
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



export default createAppContainer(navigator);
