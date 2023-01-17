import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Clock = ({ color = "#444", width = 18, height = 18 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_541"
            data-name="Rectangle 541"
            width="18"
            height="18"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_22"
        data-name="Mask Group 22"
        clipPath="url(#clip-path)"
      >
        <G id="clock" transform="translate(0.818 0.818)">
          <Circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="8.182"
            cy="8.182"
            r="8.182"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.636"
          />
          <Path
            id="Path_171"
            data-name="Path 171"
            d="M9.818,4.909V9.818l3.273,1.636"
            transform="translate(-1.636 -1.636)"
            fill="none"
            stroke="#444"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.636"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Clock;
