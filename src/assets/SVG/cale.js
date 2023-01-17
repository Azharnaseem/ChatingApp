import React from "react";
import Svg, { ClipPath, Defs, G, Line, Rect } from "react-native-svg";
const Cale = ({ color = "#000", width = 14, height = 14 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_689"
            data-name="Rectangle 689"
            width="14"
            height="14"
            transform="translate(475 3394)"
            fill="#e4e4e4"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_122"
        data-name="Mask Group 122"
        transform="translate(-475 -3394)"
        clip-path="url(#clip-path)"
      >
        <G id="calendar" transform="translate(474.364 3393.364)">
          <Rect
            id="Rectangle_694"
            data-name="Rectangle 694"
            width="11.455"
            height="11.455"
            rx="1.273"
            transform="translate(1.909 2.545)"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.273"
          />
          <Line
            id="Line_64"
            data-name="Line 64"
            y2="2.545"
            transform="translate(10.182 1.273)"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.273"
          />
          <Line
            id="Line_65"
            data-name="Line 65"
            y2="2.545"
            transform="translate(5.091 1.273)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.273"
          />
          <Line
            id="Line_66"
            data-name="Line 66"
            x2="11.455"
            transform="translate(1.909 6.364)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.273"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Cale;
