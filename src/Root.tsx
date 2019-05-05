import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import ProviderAnt from '@ant-design/react-native/lib/provider';

import App from './App'
import store from './store'

const setup = () => {
  class Root extends Component {
    public render() {
      return (
        <Provider {...store}>
          <ProviderAnt>
            <App />
          </ProviderAnt>
        </Provider>
      )
    }
  }
  return Root
}

export default setup
