import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginPage from './src/assets/component/screen/LoginPage/LoginPage';
import RegisterPage from './src/assets/component/screen/RegisterPage/RegisterPage';
import MainPage from './src/assets/component/screen/MainPage/MainPage';
import CategoriesPage from './src/assets/component/screen/CategoriesPage/CategoriesPage';
import DetailPage from './src/assets/component/screen/DetailPage/DetailPage';
import CartPage from './src/assets/component/screen/CartPage/Cartpage';
import AddProduct from './src/assets/component/screen/AddProduct/AddProduct';



const MainNavigator = createStackNavigator({
  
  
 
  
  MyRegisterPage: {screen: RegisterPage,
    navigationOptions: {
      header: null,
 
    },
  },
  MyDetailPage: {screen: DetailPage,
    navigationOptions: {
      header: null,
 
    },
  },
  MyCartPage: {screen: CartPage,
    navigationOptions: {
      header: null,
 
    },
  },
 
  MyLoginPage: {screen:LoginPage,
    navigationOptions: {
      header: null,
    },},
    MyMainPage: {screen: MainPage,
      navigationOptions: {
        header: null,
      },},
      MyCategoriesPage: {screen: CategoriesPage,
        navigationOptions: {
          title:"Tas Kulit",
         
        },},
       MyDetailPage: {screen: DetailPage,
        navigationOptions: {
          header: null,
        },},
     
 
 
});

const App = createAppContainer(MainNavigator);

export default App;



