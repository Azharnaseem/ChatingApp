import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import AppColors from "~utills/AppColors";
import { width } from "~utills/Dimension";
import FontFamily from "~utills/FontFamily";

export const CustomText = ({
  children = "",
  size = 4,
  textAlign,
  color = AppColors.black,
  textStyles,
  fontFamily = FontFamily.RobotoRegular,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == "undefined"}
      onPress={onPress}
      style={containerStyles}
    >
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}
      >
        {children}
      </Text>
    </Pressable>
  );
};
export const H1 = ({
  children = "",
  size = 6.2,
  textAlign,
  color = AppColors.black,
  textStyles,
  fontFamily = FontFamily.RobotoBold,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
  lineHeight,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
      lineHeight: lineHeight,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == "undefined"}
      onPress={onPress}
      style={containerStyles}
    >
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}
      >
        {children}
      </Text>
    </Pressable>
  );
};
export const H2 = ({
  children = "",
  size = 4.5,
  textAlign,
  color = AppColors.black1,
  textStyles,
  fontFamily = FontFamily.RobotoRegular,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == "undefined"}
      onPress={onPress}
      style={containerStyles}
    >
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}
      >
        {children}
      </Text>
    </Pressable>
  );
};
export const H3 = ({
  children = "",
  size = 3.8,
  textAlign,
  color = AppColors.black1,
  textStyles,
  fontFamily = FontFamily.RobotoBold,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
  lineHeight,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
      lineHeight: lineHeight,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == "undefined"}
      onPress={onPress}
      style={containerStyles}
    >
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export const H4 = ({
  children = "",
  size = 3.3,
  textAlign,
  color = AppColors.gray,
  textStyles,
  fontFamily = FontFamily.RobotoRegular,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
  letterSpacing,
  lineHeight,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
      letterSpacing: letterSpacing,
      lineHeight: lineHeight,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == "undefined"}
      onPress={onPress}
      style={containerStyles}
    >
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}
      >
        {children}
      </Text>
    </Pressable>
  );
};
