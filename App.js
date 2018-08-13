import React, { Component } from 'react';
import { 
    View,
    AppRegistry,
    Text,
    StyleSheet
  } from 'react-native';
  import { createStackNavigator } from 'react-navigation';

  import First from "./src/components/layout/First";
  import Login from "./src/components/layout/Login";
  import Signup from "./src/components/layout/Signup";
  import Master from "./src/components/layout/Main/Master";
  import Home from "./src/components/layout/Home";


  const RootStack = createStackNavigator(
    {
      First: First,
      Login: Login,
      Signup: Signup,
      Main: Master,
      // Home: Home,
      // New: New,
      // His: His,
      // Noti: Noti,
      // Seti: Seti,
      // Chat: Chat,
      // Info: Info,
      // Contect: Contect,
      // Logout: Logout,
      
    },
    {
      initialRouteName: 'Login',
    }
  );
 
export default class App extends React.Component{
  render () {
      return <RootStack />
  }
}
