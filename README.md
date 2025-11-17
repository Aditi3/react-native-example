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
   #or
   npx react-native run-ios
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
   #or
   npx react-native run-android
   ```
   
# Expo + EAS Build Guide

This guide covers how to create an Expo project, configure EAS, generate native projects, run on devices/emulators, and build development/simulator binaries.

## 🚀 1. Create a New Expo App

```
npx create-expo-app MyFirstApp
cd MyFirstApp
```

## ⚙️ 2. Configure EAS Build

```
eas build:configure
```

- Initializes EAS Build for your project
- Creates or updates eas.json
- Connects your project to your Expo account

## 📦 3. Build for Android (Development)
```
eas build -p android --profile development
```

Builds an Android development binary using the development profile from eas.json.

## 🍏 4. Build for iOS (Development)

```
eas build -p ios --profile development
```
Builds an iOS development binary.

## 🖥️ 5. Add iOS Simulator Build Profile (Optional)

```
Add a simulator profile to eas.json:

{
  "build": {
    "development": {
      "distribution": "internal"
    },
    "simulator": {
      "simulator": true
    }
  }
}
```

Then build:

eas build -p ios --profile simulator

Produces an iOS Simulator-compatible build.

## 🛠️ 6. Generate Native iOS/Android Projects (Prebuild)

### iOS
```
npx expo prebuild -p ios
```

### Android
```npx expo prebuild -p android```

### Clean & regenerate both

```
npx expo prebuild --clean
```

- Generates/updates ios/ and android/ directories when using Expo with native modules or custom builds.

## ▶️ 7. Start Expo (Managed Workflow)

```
npx expo start
```

Starts Metro bundler, opens Expo Dev Tools, and lets you launch on device/emulator.

## 📱 8. Run the App

### iOS
```
npx expo run:ios
```

### Android
```
npx expo run:android
```

## References

- [Environment Setup Guide](https://reactnative.dev/docs/environment-setup)
- [Getting Started Guide](https://reactnative.dev/docs/getting-started)
- [React Native Archive (0.59 or below) Guide](https://archive.reactnative.dev/docs/getting-started)
