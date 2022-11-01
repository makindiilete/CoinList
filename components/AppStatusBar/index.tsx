import * as React from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { useIsFocused } from "@react-navigation/native";

type AppStatusBarProps = {
  barStyle: StatusBarStyle;
  backgroundColor?: string;
};

export function AppStatusBar({
  barStyle,
  backgroundColor,
  ...others
}: AppStatusBarProps) {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      {...others}
    />
  ) : null;
}
