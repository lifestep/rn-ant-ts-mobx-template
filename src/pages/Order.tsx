import React, { Component } from "react";
import { View, Text, Button } from "react-native";

interface Props {
  navigation: {
    navigate(route: string, params?: object): void,
    /* read params with this.props.navigation.state.params
      this.props.navigation.getParam('params.some', 'default value');
    */
   push(path: string): void
  }
}

export default class Order extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>订单的页面!</Text>
        <Button
          title="go to buy"
          onPress={
            () => {
              this.props.navigation.push('IssueBuy')
            }
          }
        />
      </View>
    )
  }
}
