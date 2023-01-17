import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Notification = ({ color = "#fff", width = 16, height = 16 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
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
        id="Mask_Group_28"
        data-name="Mask Group 28"
        transform="translate(-331 -62)"
        clip-path="url(#clip-path)"
      >
        <G id="bell" transform="translate(330.271 61.273)">
          <Path
            id="Path_641"
            data-name="Path 641"
            d="M13.093,5.819a4.364,4.364,0,1,0-8.729,0c0,5.092-2.182,6.547-2.182,6.547H15.275s-2.182-1.455-2.182-6.547"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.455"
          />
          <Path
            id="Path_642"
            data-name="Path 642"
            d="M9.987,15.275a1.455,1.455,0,0,1-2.517,0"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.455"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Notification;
