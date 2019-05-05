import React, { Component} from 'react'
import { View, Text, Button } from 'react-native';

interface Props {
  navigation: {
    navigate(route: string, params?: object): void
    /* read params with this.props.navigation.state.params
      this.props.navigation.getParam('params.some', 'default value');
    */
  }
}

export default class IssueBuy extends Component<Props> {
  static navigationOptions = {
  }

  constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <View>
        <Text>发布购买广告</Text>
        <Button
          title="返回"
          onPress={
            () => {
              this.props.navigation.goBack()
            }
          }
        />
      </View>
    );
  }
}
