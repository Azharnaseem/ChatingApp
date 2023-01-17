import { StyleSheet, Platform } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import FontFamily from "~utills/FontFamily";

const styles = StyleSheet.create({
  container: {
    height: height(6.8),
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(2),
    borderBottomWidth: width(0.3),
    borderBottomColor: AppColors.grayBorder1,
  },
  iconStyle: {
    width: width(8),
    alignItems: "flex-end",
  },
  textInputView: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    fontFamily: FontFamily.RobotoRegular,
    fontSize: width(3.8),
    color: AppColors.black1,
    left: Platform.OS == "ios" ? 0 : -width(1),
    height: height(5),
  },
});
export default styles;
