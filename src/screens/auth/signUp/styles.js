import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import FontFamily from "~utills/FontFamily";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: AppColors.primary,
    fontSize: width(5),
    marginBottom: height(2),
    fontFamily: FontFamily.LuckiestGuyRegular,
  },
  backIcon: {
    width: width(8),
    height: height(5),
    marginVertical: height(1),
    marginHorizontal: width(5),
  },
  logo: {
    width: width(30),
    height: height(20),
  },
});
export default styles;
