import React from "react";
import { Image, StyleSheet } from "react-native";

type LogoProps = {
  width: number;
  height: number;
};

export default function Logo({ width, height }: LogoProps) {
  return (
    <Image
      source={require("../assets/MUNDI.png")}
      style={[styles.image, { width, height }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
});
