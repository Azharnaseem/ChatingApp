import React, { useRef, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Input, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { Back, Logo } from "~assets";
import { loginValidationSchema } from "~utills/validationSchema";
import { Eye, EyeOff } from "~assets/SVG";
import CommonStyles from "~utills/CommonStyles";
import { height } from "~utills/Dimension";
import { getData, SaveData, SignUpEmailPassword } from "~backend/firebase/Auth";
import { login } from "~redux/slices/authSlice";
import { successMessage } from "~utills/Methods";
export default function SignUp({ navigation, route }) {
  const dispatch = useDispatch();
  const passRef = useRef(null);
  const [visible, setvisible] = useState(true);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
  });
  const UserSignUp = async (data) => {
    console.log("dattta======", data);
    try {
      dispatch(setAppLoader(true));
      const resp = await SignUpEmailPassword(data.email, data.password);
      console.log("resss", resp);
      if (resp) {
        console.log("dattta======", data);
        const uid = auth().currentUser.uid;
        let userData = {
          email: data?.email,
          password: data?.password,
        };
        const res = await SaveData("Users", uid, userData);
        if (res) {
          const user = await getData("Users", uid);
          dispatch(login({ user: user?.data }));
          successMessage("SignUp successfully SignUp");
        } else {
          dispatch(setAppLoader(false));
        }
      } else {
        erroMessage("Something went wrong");
        // console.log("save error is ", savaInfo.error);
        dispatch(setAppLoader(false));
      }
      dispatch(setAppLoader(false));
    } catch (e) {
      dispatch(setAppLoader(false));
      console.log("error1111", e);
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ alignSelf: "flex-start" }}
        >
          <Image source={Back} resizeMode={"contain"} style={styles.backIcon} />
        </Pressable>
        <Image source={Logo} resizeMode={"contain"} style={styles.logo} />
        <Text style={styles.title}>Let's Chat</Text>
        <View style={CommonStyles.marginVertical}>
          <Input
            title={"Email"}
            keyboardType={"email-address"}
            formControl={control}
            placeholder={"johndoe@email.com"}
            feildName={"email"}
            errorMsg={errors?.email}
            returnKeyType={"next"}
            onSubmitEditing={() => passRef.current.focus()}
          />
          <Input
            Icon={visible ? <Eye /> : <EyeOff />}
            title={"Password"}
            ref={passRef}
            formControl={control}
            feildName={"password"}
            errorMsg={errors.password}
            returnKeyType={"done"}
            secureTextEntry={visible}
            onIconPress={() => setvisible(!visible)}
          />
        </View>

        <Button
          containerStyle={CommonStyles.marginTop_2}
          title={"SignUp"}
          onPress={handleSubmit(UserSignUp)}
          // onPress={() => {
          //   dispatch(setAppLoader(true));
          //   setTimeout(() => {
          //     dispatch(setIsLoggedIn(true));
          //     dispatch(
          //       setUserMeta({
          //         name: "John",
          //         email: "John Doe",
          //       })
          //     );
          //     dispatch(setAppLoader(false));
          //   }, 600);
          // }}
        />
      </View>
    </ScreenWrapper>
  );
}
