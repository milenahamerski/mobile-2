import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#1A2F2F",
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="/signup" />
      <Stack.Screen name="/[id]" />
    </Stack>
  );
}
