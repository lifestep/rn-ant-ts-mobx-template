import React from "react";
import { View, Text, Button } from 'react-native';

interface Props {
  navigation: {
    navigate(route: string, params?: object): void
    /* read params with this.props.navigation.state.params
      this.props.navigation.getParam('params.some', 'default value');
    */
  }
}

//todo: 判断当前开发环境是否为 dev const dev = __DEV__

export default class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: 'Home much too long text for back button from Test to Home',
    headerTruncatedBackTitle: 'to Home'
  }

  constructor (props: Props) {
    super(props)
  }
  render() {
    return (<View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="go to Text"
        onPress={
          () => {
            this.props.navigation.navigate('Test')
          }
        }
      />
    </View>)
  }
}
