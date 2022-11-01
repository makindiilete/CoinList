import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

export type ChildrenProp = {
  children: JSX.Element;
};

export function AppActiveTab({ children }: ChildrenProp) {
  return (
    <View
      style={{
        borderStyle: "solid",
        borderTopColor: Colors.colorPrimary,
        borderTopWidth: widthPercentageToDP(1.4),
        width: widthPercentageToDP(10),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderStyle: "solid",
          borderTopColor: "#fff",
          borderTopWidth: widthPercentageToDP(1.4),
          width: widthPercentageToDP(10),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      {children}
    </View>
  );
}
