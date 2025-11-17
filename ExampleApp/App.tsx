import React, { useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Adjust, AdjustConfig, AdjustEvent } from 'react-native-adjust';

const App = () => {
  useEffect(() => {
    const config = new AdjustConfig('2fm9gkqubvpc', "sandbox");
    config.setLogLevel(AdjustConfig.LogLevelVerbose);
    Adjust.initSdk(config);
  }, []);

  const onButtonPress = () => {
    const event = new AdjustEvent('g3mfiw');
    event.setRevenue(1.0, 'USD');
    Adjust.trackEvent(event);
    console.log('Event tracked!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adjust React Native Example</Text>
      <Button title="Track Event" onPress={onButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default App;
