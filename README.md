
# React Native Example

Built a simple React Native Application for iOS and Android operating systems.

## Install dependencies

### Node & watchman 

```
brew install node
brew install watchman
```

### iOS Specific dependencies
 
1. Install the latest version of Xcode from Mac App Store
2. Install CocoaPods for dependency management. How to install CocoaPods - https://guides.cocoapods.org/using/getting-started.html

### Android Specific dependencies 

1. Install Java Development kit
   
```
brew install --cask zulu@17
# Get path to where cask was installed to double-click the installer
brew info --cask zulu@17
```
2. Install Android Studio
   - Android SDK
   - Android SDK Platform
   - Android Emulator for testing purposes

Follow the guide [here](https://developer.android.com/studio/install) for installing Android Studio on your machine. 

## Create a new Application

  ```
  npx react-native init myprojectname
  //or
  npx react-native@latest init myprojectname
  //or
  npx react-native init myprojectname --version X.XX.X

  ```
- Build the iOS App
  -  Navigate to the iOS folder and run `pod install` to install the iOS dependencies CocoaPods manages.
  -  Start packager
  
     Open the terminal and start the metro bundler by running the following command. 
  
     ```
     yarn start
     //or
     npm start
     ```
  - Run the app via Xcode
    
    Open Xcode, choose the App workspace(with an extension .xcworkspace)

  - Running the app via cli
      
    ```
    yarn ios
    //or
    npm run ios
    ```

- Build the Android App
  - Start packager
    
     Open the terminal and start the metro bundler by running the following command.
    
     ```
     yarn start
     //or
     npm start
     ```

  - Run the app via Android Studio
    
    Open Android Studio, choose your project and open the `/android` folder. The editor will take a while to finish configuring the project. Now, choose which device you want to run your app at the top of the IDE, to the left of the "play" icon. Click on the "play" icon to build the project. 
      
    
  - Run the app via cli

     ```
    yarn android
    //or
    npm run android
    ```
    
    

# References

- Environment Setup Guide - https://reactnative.dev/docs/environment-setup 
- Getting Started Guide - https://reactnative.dev/docs/getting-started 
- React native Archive(0.59 or below) Guide - https://archive.reactnative.dev/docs/getting-started

