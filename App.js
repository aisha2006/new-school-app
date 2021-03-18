import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from "./screens/HomeScreen";
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render(){
    return(
     
        <AppContainer/>
    
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen,
    }},
  {
    initialRouteName : 'Home'
  });


const AppContainer = createAppContainer(AppDrawerNavigator);

