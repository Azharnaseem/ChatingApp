import React from "react";
import Svg, { Path } from "react-native-svg";
const BackArrow = ({ color = "#fff", width = 9.147, height = 16 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9.147 16"
    >
      <Path
        id="Icon_ionic-ios-arrow-back"
        data-name="Icon ionic-ios-arrow-back"
        d="M14.008,14.192l6.054-6.049a1.143,1.143,0,1,0-1.619-1.615l-6.859,6.854a1.141,1.141,0,0,0-.033,1.577l6.888,6.9a1.143,1.143,0,1,0,1.619-1.615Z"
        transform="translate(-11.251 -6.194)"
        fill={color}
      />
    </Svg>
  );
};
export default BackArrow;
