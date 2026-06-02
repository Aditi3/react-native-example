import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Adjust, AdjustConfig } from 'react-native-adjust';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
    adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
    Adjust.initSdk(adjustConfig);

    const timer = setTimeout(() => {
      Adjust.getAdid((adid) => {
        const message = 'ADID = ' + adid;
        console.log(message);
        Alert.alert('ADID', message);
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
