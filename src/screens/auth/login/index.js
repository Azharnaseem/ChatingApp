import React, { useState, useRef } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Input, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { Logo } from "~assets";
import { loginValidationSchema } from "~utills/validationSchema";
import { Eye, EyeOff } from "~assets/SVG";
import { CustomText } from "~components/texts";
import ScreenNames from "~routes/routes";
import CommonStyles from "~utills/CommonStyles";
import FontFamily from "~utills/FontFamily";
import { login } from "~redux/slices/authSlice";
import { erroMessage, successMessage } from "~utills/Methods";

export default function Login({ navigation, route }) {
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
  const onSubmitLogin = async (data) => {
    dispatch(setAppLoader(true));
    try {
      const result = await SignInEmailPassword(data?.email, data?.password);
      if (result?.success) {
        const res = await getData("Users", result.data.user.uid);
        if (res?.exists) {
          dispatch(login({ user: res?.data }));
          dispatch(setAppLoader(false));
          successMessage("Successfully Logged In");
        } else {
          await auth().signOut();
          dispatch(setAppLoader(false));
        }
      } else {
        dispatch(setAppLoader(false));
        erroMessage(result?.error);
        dispatch(setAppLoader(false));
      }
    } catch (error) {
      dispatch(setAppLoader(false));
      erroMessage("Invalid user");
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
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
          title={"Login"}
          onPress={handleSubmit(onSubmitLogin)}
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
        <CustomText containerStyles={CommonStyles.marginTop_2}>
          Don't Have Accout
          <Text
            onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
            style={styles.signUpText}
          >
            {"   "}
            SignUp
          </Text>
        </CustomText>
      </View>
    </ScreenWrapper>
  );
}
