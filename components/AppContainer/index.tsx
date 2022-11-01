import React from "react";
import { View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

type AppContainerProps = {
  children: React.ReactNode;
};

export function AppContainer({ children }: AppContainerProps) {
  return (
    <View style={{ paddingHorizontal: widthPercentageToDP("5.5%") }}>
      {children}
    </View>
  );
}
