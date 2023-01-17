import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import FontFamily from "~utills/FontFamily";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    // marginTop: height(5),
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: AppColors.primary,
    fontSize: width(5),
    marginBottom: height(2),
    fontFamily: FontFamily.LuckiestGuyRegular,
  },
  logo: {
    width: width(30),
    height: height(20),

    // backgroundColor: "red",
  },
  signUpText: {
    fontFamily: FontFamily.LuckiestGuyRegular,
    color: AppColors.primary,
  },
});
export default styles;
