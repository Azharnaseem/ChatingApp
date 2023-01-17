import React from "react";
import Svg, { ClipPath, Defs, G, Line, Path, Rect } from "react-native-svg";
const RightDashArrow = ({ color = "#000", width = 12, height = 12 }) => {
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
            id="Rectangle_703"
            data-name="Rectangle 703"
            width="12"
            height="12"
            transform="translate(337 408)"
            fill="#e4e4e4"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_127"
        data-name="Mask Group 127"
        transform="translate(-337 -408)"
        clip-path="url(#clip-path)"
      >
        <G id="arrow-right" transform="translate(334.443 405.443)">
          <Line
            id="Line_67"
            data-name="Line 67"
            x2="9.983"
            transform="translate(3.565 8.557)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.426"
          />
          <Path
            id="Path_822"
            data-name="Path 822"
            d="M8.557,3.565l4.992,4.992L8.557,13.549"
            fill="none"
            stroke={color}
            strokeLineca="round"
            strokeLinejoin="round"
            strokeWidth="1.426"
          />
        </G>
      </G>
    </Svg>
  );
};
export default RightDashArrow;
