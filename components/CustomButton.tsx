import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import React, { PropsWithChildren } from "react";

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
} & PropsWithChildren;

export default function CustomButton({
  onPress,
  disabled = false,
  style,
  textStyle,
  children,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#A5B4FC" : "#98E3F5",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        ...(style as Object),
      }}
    >
      {typeof children === "string" ? (
        <Text
          style={{
            color: "#1A2F2F",
            fontWeight: "bold",
            fontSize: 16,
            ...(textStyle as Object),
          }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
