
import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

import Colors from '../styles/mainColor'
import Tools from '../utils/tool'
import TabIcon from '../components/TabIcon'
// tabs
import { C2C, Order, My } from './views'

export default createBottomTabNavigator({
  C2C,
  Order,
  My
}, {
  defaultNavigationOptions: ({ navigation }): any => {
    return {
      tabBarLabel: ((): string => {
        const { routeName } = navigation.state
        let tabText = ''
        switch (routeName) {
          case 'C2C':
            tabText = 'C2C'
            break;
          case 'Order':
            tabText = '订单'
            break;
          case 'My':
            tabText = '我的'
            break;
        }
        return tabText
      })(),
      tabBarIcon({ focused }: any) {
        const { routeName } = navigation.state
        let iconSource: ImageSourcePropType
        switch (routeName) {
          case 'Order':
            iconSource = focused ? require('../assets/images/tabs/order-yes.png') : require('../assets/images/tabs/order-no.png')
            break;
          case 'My':
            iconSource = focused ? require('../assets/images/tabs/my-yes.png') : require('../assets/images/tabs/my-no.png')
            break;
          default: // C2C
            iconSource = focused ? require('../assets/images/tabs/c2c-yes.png') : require('../assets/images/tabs/c2c-no.png')
        }
        return (<TabIcon source={iconSource} />)
      }
    }
  },
  tabBarOptions: {
    activeTintColor: Colors.mainColor,
    inactiveTintColor: Colors.mainColorGray,
    showIcon: true,
    showLabel:true,
    style: {
      height:Tools.size(98),
      backgroundColor: "#ffffff",
    },
    labelStyle:{
      fontSize:Tools.size(18),
      paddingBottom: Tools.size(6)
    },
    tabStyle: {
      justifyContent: 'center',
      paddingTop: Tools.size(6)
    }
  },
  initialRouteName:"C2C",
  // lazy: true,
})
