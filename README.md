**react native 项目**
# some project

* 使用 yarn
  * 安装依赖

# 运行命令：npm run xxx
>> xxx 为以下命令

- ```"start": "node node_modules/react-native/local-cli/cli.js start",```
- ```"test": "jest",```
- ```"ios": "react-native run-ios  --simulator 'iPhone 6s Plus'",```
- ```"iosx": "react-native run-ios --simulator 'iPhone X' ",```
- ```"android": "react-native run-android",```
- ```"android-build": "cd android && gradlew assembleRelease",```
- ```"keystore": "keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000",```
- ```"ios-bundle-build": "react-native bundle --platform ios --entry-file index.js --bundle-output ./build-ios/main.jsbundle --assets-dest ./build-ios --dev false",```
- ```"android-bundle-build": "react-native bundle --platform android --entry-file index.js --bundle-output ./build-android/index.android.bundle --assets-dest ./build-android --dev false",```
- ```"ios-push": "code-push release coolchat-ios ./build-ios/ 0.0.1 --deploymentName Production  --description 'app出生' --mandatory true --rollout 100%",```
- ```"android-push": "code-push release push-android ./build-android/ 0.0.1 --deploymentName Production --description 'app出生' --mandatory true --rollout 100%",```
- ```"ios-push-test": "code-push release push-ios ./build-ios/ 0.0.1 --description 'app出生' --mandatory true",```
- ```"android-push-test": "code-push release push-android ./build-android/ 0.0.1 --description 'app出生' --mandatory true",```
- ```"ios-upinfo": "code-push deployment ls push-ios",```
- ```"android-upinfo": "code-push deployment ls push-android"```
