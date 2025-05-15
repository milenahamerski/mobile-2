import { Stack } from "expo-router";
import React from "react";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#3F3D56",
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
      </Stack>
    </ActionSheetProvider>
  );
}
