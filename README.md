# Test Ujian Mobile QTI

## Requirements and Instalation
see https://reactnative.dev/docs/environment-setup see tab React Native CLI Quickstart

## Build APK
- see https://reactnative.dev/docs/signed-apk-android
- see https://instamobile.io/android-development/generate-react-native-release-build-android/
- see https://stackoverflow.com/questions/35450777/how-to-build-android-apk-from-my-react-native-project

## Debug
- npx react-native log-android (will show all console.log on android)
- npx react-native log-ios (will show all console.log on ios)

## Troubleshoot
- if using windows and error shown `ANDROID_HOME not found` and/or `Failed to notify project evaluation listener` and/or `The filename, directory name, or volume label syntax is incorrect` still presist after set ANDROID_HOME environtment variables. Create file local.properties on folder ./android and fill based on your sdk path.
```
sdk.dir=C:\\your\\sdk\\path
```
the default path mostly on sdk.dir=C:\\Users\\{your username}\\AppData\\Local\\Android\\Sdk. See https://stackoverflow.com/questions/62263528/npx-react-native-run-android-does-not-work-java-io-ioexception-the-filename for more information.
