import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Camera = ({ color = "#fff", width = 25, height = 25 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 25">
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_665"
            data-name="Rectangle 665"
            width="25"
            height="25"
            transform="translate(183 612)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
      <G id="Icon" transform="translate(-183 -612)">
        <G
          id="Mask_Group_97"
          data-name="Mask Group 97"
          clip-path="url(#clip-path)"
        >
          <G id="camera" transform="translate(183 612)">
            <Path
              id="Path_783"
              data-name="Path 783"
              d="M23.958,19.792a2.083,2.083,0,0,1-2.083,2.083H3.125a2.083,2.083,0,0,1-2.083-2.083V8.333A2.083,2.083,0,0,1,3.125,6.25H7.292L9.375,3.125h6.25L17.708,6.25h4.167a2.083,2.083,0,0,1,2.083,2.083Z"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <Circle
              id="Ellipse_26"
              data-name="Ellipse 26"
              cx="4.167"
              cy="4.167"
              r="4.167"
              transform="translate(8.333 9.375)"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Camera;
