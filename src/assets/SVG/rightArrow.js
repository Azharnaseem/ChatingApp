import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const RightArrow = ({ color = "#444", width = 8, height = 8 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 8">
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_540"
            data-name="Rectangle 540"
            width="8"
            height="8"
            fill={color}
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_20"
        data-name="Mask Group 20"
        transform="translate(0 8) rotate(-90)"
        clip-path="url(#clip-path)"
      >
        <G id="caret-down" transform="translate(0 1.75)">
          <Path
            id="Path_170"
            data-name="Path 170"
            d="M7.851,1.9A.48.48,0,0,0,7.5,1.75H.5A.48.48,0,0,0,.148,1.9a.491.491,0,0,0,0,.7l3.5,3.5a.49.49,0,0,0,.7,0l3.5-3.5a.49.49,0,0,0,0-.7Z"
            transform="translate(0 -1.75)"
            fill="#444"
          />
        </G>
      </G>
    </Svg>
  );
};
export default RightArrow;
