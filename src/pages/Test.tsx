import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";


import { Hello } from "../components/Hello";

const instructions = Platform.select({
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu"
});

interface Props {
  props: {
    navigation: {
      navigate(route: string, params?: object): void,
      /* read params with this.props.navigation.state.params
        this.props.navigation.getParam('params.some', 'default value');
      */
      getParam(paramName: string, defaultValue: string): void,
      setParams(params: object): void
    }
  }
}

type navigationOptions = {
  navigation: any,
  screenProps: any
}

export default class Test extends Component<Props> {
  static navigationOptions = ({ navigation, screenProps }: navigationOptions) => {
    return {
      // !如果想要使用组件替换头部，用 headerTitle: <component />
      title: navigation.getParam('title', 'default title'),
      headerStyle: {
        backgroundColor: '#fff'
      }, // 最外层 View 的 样式对象
      headerTintColor: '#3399FF', // 按钮和标题栏标题
      headerTitleStyle: {
        fontFamily: 'STKaiti',
        fontWeight: 'bold'
      }, // Text样式属性
      headerBackTitle: null,
      // headerBackImage 自定义返回按钮图片
      headerRight: ( // 右侧按钮
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#3399FF"
        />
      )
    }
  }

  constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{instructions}</Text>
        <View>
          <Button
            title="go to Home"
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          />
          <Button
            title='update this title'
            onPress={
              () => {
                this.props.navigation.setParams({
                  title: 'new title'
                })
              }
            }
          />
        </View>
        <Text>--------------------------------------------</Text>
        <Hello name="zhan qian dun" enthusiasmLevel={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center"
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  }
});
