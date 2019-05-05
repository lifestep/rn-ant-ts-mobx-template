import React, { Component } from "react"
import { View, Text } from "react-native"
import { inject, observer } from "mobx-react"
import { Button, Toast } from '@ant-design/react-native'

import { ReqRes } from "../utils/require";

interface Props {
  navigation: {
    navigate(route: string, params?: object): void
    /* read params with this.props.navigation.state.params
      this.props.navigation.getParam('params.some', 'default value');
    */
  },
  StoreInstance: any
}

@inject('StoreInstance')
@observer
export default class C2C extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  store: any

  constructor(props: Props) {
    super(props)
    this.store = this.props.StoreInstance
  }

  componentWillMount() {
  }

  render() {
    return (
      <View>
        <Text>C2C的页面!</Text>
        <Text>test: {this.store.test}</Text>
        <Text>count: {this.store.count}</Text>
        <Button
          type="primary"
          onPress={
            () => {
              this.store.changingTest('123456789')
            }
          }>改变test</Button>
        <Button
          type="primary"
          onPress={
            () => {
              this.store.getTest()
            }
          }>异步改变test1</Button>
        <Button
          onPress={
            () => {
              this.store.getTest2()
            }
          }>异步改变test2</Button>
      </View>
    )
  }
}
