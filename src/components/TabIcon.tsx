import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';

import Tool from '../utils/tool';

interface Props {
  source: ImageSourcePropType
}

const styles = StyleSheet.create({
  wrap: {
    width: Tool.size(54),
    height: Tool.size(54)
  },
  logo: {
    width: Tool.size(54),
    height: Tool.size(54)
  }
})

export default class TabIcon extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <View style={styles.wrap}>
        <Image resizeMode='cover' style={styles.logo} source={this.props.source} />
      </View>
    );
  }
}
