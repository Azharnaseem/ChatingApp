import React, { forwardRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { H4 } from "~components/texts";
import AppColors from "~utills/AppColors";
import styles from "./styles";
import { Controller } from "react-hook-form";
import { width } from "~utills/Dimension";
const Input = (
  {
    title,
    placeholder,
    placeholderTextColor = AppColors.black1 + "80",
    onChangeText,
    keyboardType = "default",
    secureTextEntry = false,
    Icon,
    containerStyle = {},
    textInputStyle = {},
    textinputViewStyle = {},
    onIconPress,
    selectionColor = AppColors.black2,
    onSubmitEditing,
    autoCapitalize,
    maxLength,
    numberOfLines,
    editable = true,
    multiline = false,
    textAlignVertical,
    onTextInputBlur,
    returnKeyType,
    onPressIn,
    feildName,
    formControl,
    textValue,
    errorMsg,
    containerWidth = 82,
  },
  ref
) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          { width: width(containerWidth + 8) },
          containerStyle,
        ]}
      >
        <View
          style={[
            styles.textInputView,
            { width: Icon ? width(containerWidth) : width(containerWidth + 8) },
            textinputViewStyle,
          ]}
        >
          <H4 color={AppColors.black3}>{title}</H4>
          <Controller
            control={formControl}
            name={feildName}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText ? onChangeText : onChange}
                value={textValue ? textValue : value}
                keyboardType={keyboardType}
                style={[
                  styles.input,
                  textInputStyle,
                  {
                    width: Icon
                      ? width(containerWidth)
                      : width(containerWidth + 8),
                  },
                ]}
                secureTextEntry={secureTextEntry}
                selectionColor={selectionColor}
                blurOnSubmit
                onBlur={onTextInputBlur ? onTextInputBlur : onBlur}
                onSubmitEditing={onSubmitEditing}
                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                editable={editable}
                numberOfLines={numberOfLines}
                multiline={multiline}
                ref={ref}
                textAlignVertical={textAlignVertical}
                returnKeyType={returnKeyType}
                onPressIn={onPressIn}
              />
            )}
          />
        </View>
        {Icon && (
          <TouchableOpacity onPress={onIconPress} style={styles.iconStyle}>
            {Icon}
          </TouchableOpacity>
        )}
      </View>
      <H4
        color={AppColors.red}
        textStyles={{ width: width(containerWidth + 8) }}
        size={2.5}
      >
        {errorMsg?.message}
      </H4>
    </View>
  );
};

export default forwardRef(Input);
