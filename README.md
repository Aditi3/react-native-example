# React Native Example

A simple React Native Application for iOS and Android operating systems.

## Install Dependencies

### Node & Watchman

```bash
brew install node
brew install watchman
```

### iOS Specific Dependencies

1. Install the latest version of Xcode from the Mac App Store.
2. Install CocoaPods for dependency management. Follow the guide [here](https://guides.cocoapods.org/using/getting-started.html).

### Android Specific Dependencies

1. Install Java Development Kit (JDK):

   ```bash
   brew install --cask zulu@17
   # Get path to where cask was installed to double-click the installer
   brew info --cask zulu@17
   ```

2. Install Android Studio, which includes:
   - Android SDK
   - Android SDK Platform
   - Android Emulator for testing purposes

   Follow the guide [here](https://developer.android.com/studio/install) for installing Android Studio on your machine.

## Create, Build, and Run a New Application

### Create a New Application

- Using React Native CLI:

  ```bash
  npx @react-native-community/cli init MyApp
  ```

  JavaScript template:

  ```bash
  npx @react-native-community/cli init MyApp --template react-native-template-js
  ```

  TypeScript template:

  ```bash
  npx @react-native-community/cli init MyApp --template react-native-template-typescript
  ```

- Using `npx react-native init` (Deprecated, but still works):

  ```bash
  npx react-native init myprojectname
  #or
  npx react-native@latest init myprojectname
  #or
  npx react-native init myprojectname --version X.XX.X
  ```

### Build the iOS App

1. Navigate to the iOS folder and run `pod install` to install the iOS dependencies managed by CocoaPods.
2. Start the packager:

   ```bash
   yarn start
   #or
   npm start
   ```

3. Run the app via Xcode:
   - Open Xcode and choose the App workspace (with an extension .xcworkspace).

4. Running the app via CLI:

   ```bash
   yarn ios
   #or
   npm run ios
   ```

### Build the Android App

1. Start the packager:

   ```bash
   yarn start
   #or
   npm start
   ```

2. Run the app via Android Studio:
   - Open Android Studio, choose your project, and open the `/android` folder.
   - Choose the device you want to run your app on at the top of the IDE, then click the "play" icon to build the project.

3. Running the app via CLI:

   ```bash
   yarn android
   #or
   npm run android
   ```

## References

- [Environment Setup Guide](https://reactnative.dev/docs/environment-setup)
- [Getting Started Guide](https://reactnative.dev/docs/getting-started)
- [React Native Archive (0.59 or below) Guide](https://archive.reactnative.dev/docs/getting-started)
