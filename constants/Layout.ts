import { Dimensions, KeyboardTypeOptions } from "react-native";

const { width, height } = Dimensions.get("window");
const numberKeyboardType: KeyboardTypeOptions = "number-pad";

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  numberKeyboardType,
};
