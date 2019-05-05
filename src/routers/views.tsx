import { createStackNavigator } from "react-navigation";
import React from 'react'
import { Text } from 'react-native'

// import HomeScreen from '../pages/Home'
// import TestScreen from '../pages/Test'
import IssueBuyScreen from '../pages/c2c/IssueBuy';
import C2CScreen from '../pages/C2C'
import OrderScreen from '../pages/Order'
import MyScreen from '../pages/My'

export const C2C = createStackNavigator(
  {
    C2CIndex: {
      screen: C2CScreen
    },
    IssueBuy: {
      screen: IssueBuyScreen
    },
  }, {
    initialRouteName: 'C2CIndex',
    defaultNavigationOptions: {
      header: null
    }
  }
)


export const Order = createStackNavigator(
  {
    OrderIndex: {
      screen: OrderScreen
    }
  }
)

export const My = createStackNavigator(
  {
    MyIndex: {
      screen: MyScreen
    }
  }
)

// export class C2C extends React.Component {
//   render() {
//     return (<Text>C2C</Text>)
//   }
// }
// export class Order extends React.Component {
//   render() {
//     return (<Text>Order</Text>)
//   }
// }
// export class My extends React.Component {
//   render() {
//     return (<Text>My</Text>)
//   }
// }
