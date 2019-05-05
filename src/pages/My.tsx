import React, { Component } from "react";
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react";

interface Props {
  navigation: {
    navigate(route: string, params?: object): void
    /* read params with this.props.navigation.state.params
      this.props.navigation.getParam('params.some', 'default value');
    */
  }
  StoreInstance: any
}

@inject('StoreInstance')
@observer
export default class My extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  store: any

  constructor(props: Props) {
    super(props)
    this.store = this.props.StoreInstance
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>我的页面!</Text>
        <Text>{this.store.test}</Text>
      </View>
    )
  }
}
