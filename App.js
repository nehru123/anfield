import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/assets/component/screen/HomeScreen/HomeScreen';
import Profile from './src/assets/component/screen/Profile/Profile';
import MainPage from './src/assets/component/screen/MainPage/MainPage';
import CategoriesPage from './src/assets/component/screen/CategoriesPage/CategoriesPage';

const MainNavigator = createStackNavigator({
  

  Home: {
    screen: HomeScreen , 
    navigationOptions: {
      header: null,
    },
  },
  MyProfile: {screen: Profile,
    navigationOptions: {
      header: null,
    },},
    MyMainPage: {screen: MainPage,
      navigationOptions: {
        header: null,
      },},
      MyCategoriesPage: {screen: CategoriesPage,
        
        
       },
     
 
 
});

const App = createAppContainer(MainNavigator);

export default App;



