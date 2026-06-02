import type { ComponentProps } from 'react';
import { Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

import type { BottomTabBarButtonProps } from 'expo-router/build/react-navigation/bottom-tabs';

export function HapticTab({
  onPressIn,
  href: _href,
  pressColor: _pressColor,
  pressOpacity: _pressOpacity,
  hoverEffect: _hoverEffect,
  ...props
}: BottomTabBarButtonProps) {
  const pressableProps = props as ComponentProps<typeof Pressable>;

  return (
    <Pressable
      {...pressableProps}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPressIn?.(ev);
      }}
    />
  );
}
