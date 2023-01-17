import React from "react";
import Svg, { Polygon } from "react-native-svg";
const DownArrow = ({ color = "#444", width = 11, height = 10 }) => {
  return (
    <Svg
      enable-background="new 0 0 29 14"
      height={height}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 29 14"
      width={width}
    >
      <Polygon fill={color} points="0.15,0 14.5,14.35 28.85,0 " />
    </Svg>
  );
};
export default DownArrow;
