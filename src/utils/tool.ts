import { Dimensions, Platform, PixelRatio } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const fontScale = PixelRatio.getFontScale()
const pixelRatio = PixelRatio.get()
const defaultPixel = 2;

const width6 = 750 / defaultPixel //iphone6 屏幕宽度 dp
const height6 = 1334 / defaultPixel //iphone6 屏幕高度 dp
const scale = Math.min(deviceHeight / height6, deviceWidth /width6)

/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {number}
 */
const size = (size: number): number => {
  let newSize: number = Math.round((size * scale + 0.5))
  return newSize / defaultPixel
}

/**
 * 设置字体的size（单位px）
 * @param size 传入设计稿上的px
 * @returns {Number} 返回实际sp
 */
const setFontSize = (size: number): number => {
  let newSize: number = Math.round((size * scale + 0.5)* pixelRatio / fontScale)
  return newSize / defaultPixel
}

export default {
  device: {
    deviceWidth,
    deviceHeight,
    fontScale
  },
  system: {
    ios: Platform.OS === 'ios'
  },
  size,
  setFontSize
}
