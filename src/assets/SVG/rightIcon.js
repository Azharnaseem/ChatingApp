import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const RightIcon = ({ color = "#888", width = 12, height = 12 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_664"
            data-name="Rectangle 664"
            width="12"
            height="12"
            transform="translate(347 207)"
            fill="#ccc"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_101"
        data-name="Mask Group 101"
        transform="translate(-347 -207)"
        clip-path="url(#clip-path)"
      >
        <Path
          id="chevron-right"
          d="M7.283,14.567l4.856-4.856L7.283,4.856"
          transform="translate(343.457 203.289)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </G>
    </Svg>
  );
};
export default RightIcon;
