import React, { Component } from 'react';
import { 
    View,
    AppRegistry,
    Text,
    StyleSheet
  } from 'react-native';
  import { createStackNavigator } from 'react-navigation';

  import First from "./src/components/First";
  import Login from "./src/components/Login";
  import Signup from "./src/components/Signup";
  import Home from "./src/components/Home";
  import New from "./src/components/New";
  import Tab from "./src/components/Tab";


  const RootStack = createStackNavigator(
    {
      First: First,
      Login: Login,
      Signup: Signup,
      Home: Home,
      New: New,
      Tab: Tab,
      // Noti: Noti,
      // Seti: Seti,
      // Chat: Chat,
      // Info: Info,
      // Contect: Contect,
      // Logout: Logout,
      
    },
    {
      initialRouteName: 'First',
    }
  );
 
export default class App extends React.Component{
  render () {
      return <RootStack />
  }
}
