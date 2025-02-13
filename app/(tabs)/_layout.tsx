import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarStyle: {display: "none"}
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          headerShown: false,
          tabBarStyle: {display: "none"}
        }}
      />
    </Tabs>
  );
}
