import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const DeleteSvg = ({ color = "red", width = 16, height = 16 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_535"
            data-name="Rectangle 535"
            width="16"
            height="16"
            transform="translate(331 62)"
            fill="#eee"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_100"
        data-name="Mask Group 100"
        transform="translate(-331 -62)"
        clipPath="url(#clip-path)"
      >
        <G id="trash" transform="translate(330.273 61.273)">
          <Path
            id="Path_786"
            data-name="Path 786"
            d="M2.182,4.364H15.273"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.455"
          />
          <Path
            id="Path_787"
            data-name="Path 787"
            d="M13.818,4.364V14.545A1.455,1.455,0,0,1,12.364,16H5.091a1.455,1.455,0,0,1-1.455-1.455V4.364m2.182,0V2.909A1.455,1.455,0,0,1,7.273,1.455h2.909a1.455,1.455,0,0,1,1.455,1.455V4.364"
            fill="none"
            stroke="red"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.455"
          />
        </G>
      </G>
    </Svg>
  );
};
export default DeleteSvg;
