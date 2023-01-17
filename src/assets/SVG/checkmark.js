import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Checkmark = ({ color = "#7ed957", width = 75, height = 75 }) => {
  return (
    <Svg
      id="Checkmark"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 75 75"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_550"
            data-name="Rectangle 550"
            width="75"
            height="75"
            transform="translate(150 444)"
            fill="#fff"
            stroke="#707070"
            stroke-width="1"
          />
        </ClipPath>
      </Defs>
      <G
        id="Checkmark-2"
        data-name="Checkmark"
        transform="translate(-150 -444)"
        clip-path="url(#clip-path)"
      >
        <G id="icons8-checkmark" transform="translate(140.441 434.441)">
          <Path
            id="Path_171"
            data-name="Path 171"
            d="M47.059,18.382A28.676,28.676,0,1,0,75.735,47.059,28.676,28.676,0,0,0,47.059,18.382Z"
            fill={color}
          />
          <Path
            id="Path_173"
            data-name="Path 173"
            d="M30.882,46.085l7.224,6.4L54.339,33.824"
            transform="translate(4.448 3.538)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.412"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Checkmark;
