import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// react navigation version 3
// step 1 import createStackNavigator & createAppContainer
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
// step 4
import Login from './views/Login.js'; 
import Home from './views/home.js';
import Another from './views/another.js';

// using a root component 
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

// step 2 create a variable AppStackNavigator
const AppStackNavigator = createStackNavigator(
  {
    Login: Login
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Login: Login,
    Home: Home,
    Another: Another,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
);


// step 3 what's new in ReactNavigation v3 that we have to setup the appContainer manually
const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
