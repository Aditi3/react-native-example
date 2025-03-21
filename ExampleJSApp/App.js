import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Adjust, AdjustConfig, AdjustEvent } from "react-native-adjust";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    // Initialize Adjust SDK
    const adjustConfig = new AdjustConfig("2fm9gkqubvpc", AdjustConfig.EnvironmentSandbox);
    adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
    Adjust.initSdk(adjustConfig);
    console.log('Adjust SDK initialized');
  }

  componentWillUnmount() {
    console.log('App unmounting - Cleaning up Adjust SDK');
    Adjust.componentWillUnmount();
  }

  handlePress() {
    var adjustEvent = new AdjustEvent("g3mfiw");
    Adjust.trackEvent(adjustEvent);
    Alert.alert('Button Pressed!', 'You clicked the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Example Javascript App</Text>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
