import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Star = ({ color = "#ff9d00", width = 12, height = 12 }) => {
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
            id="Rectangle_696"
            data-name="Rectangle 696"
            width="12"
            height="12"
            transform="translate(525 3357)"
            fill={"#ff9d00"}
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_123"
        data-name="Mask Group 123"
        transform="translate(-525 -3357)"
        clip-path="url(#clip-path)"
      >
        <Path
          id="star"
          d="M6.545,1.091,8.231,4.505,12,5.056,9.273,7.713l.644,3.753L6.545,9.693,3.175,11.465l.644-3.753L1.091,5.056,4.86,4.505Z"
          transform="translate(524.455 3356.722)"
          fill={color}
        />
      </G>
    </Svg>
  );
};
export default Star;
