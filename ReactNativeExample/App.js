


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Platform,
  Alert,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
  Adjust,
  AdjustEvent,
  AdjustConfig
} from 'react-native-adjust';

const App = () => {
  Adjust.getSdkVersion(function(sdkVersion) {
    console.log("Adjust SDK version: " + sdkVersion);
  });

  const adjustConfig = new AdjustConfig("2fm9gkqubvpc", AdjustConfig.EnvironmentSandbox);
  adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
  Adjust.initSdk(adjustConfig);

  function _onPress_trackSimpleEvent() {
    var adjustEvent = new AdjustEvent("g3mfiw");
    Adjust.trackEvent(adjustEvent);
  }

  function _onPress_showAdjustId() {
    Adjust.getAdid((adid) => {
      if (adid) {
        Alert.alert('Adjust ID', adid);
      } else {
        Alert.alert('Adjust ID', 'Unavailable');
      }
    });
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={_onPress_trackSimpleEvent}>
          <Text>Track Adjust Event</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={_onPress_showAdjustId}>
          <Text>Show Adjust ID</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#61D4FB',
    padding: 10,
    width: '60%',
    height: 40,
    margin: 10,
  },
});

export default App;
