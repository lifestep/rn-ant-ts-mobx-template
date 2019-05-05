import React from 'react'
import {AppRegistry} from 'react-native';
import { SafeAreaView } from 'react-navigation'

import Root from './src/Root'
import {name as appName} from './src/app.json'

AppRegistry.registerComponent(appName, () => Root())
AppRegistry.setWrapperComponentProvider(() => {
  return props => (
    <SafeAreaView style={{
      flex: 1
    }}>
      {props.children}
    </SafeAreaView>
  )
})
