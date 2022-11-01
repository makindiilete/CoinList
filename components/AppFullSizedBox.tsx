import React from "react";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export function AppFullSizedBox() {
  return (
    <View
      style={{
        height: hp("3%"),
        width: wp("100%"),
      }}
    />
  );
}
