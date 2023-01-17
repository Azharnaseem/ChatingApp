import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const EditSvg = ({ color = "#7ed957", width = 16, height = 16 }) => {
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
            transform="translate(8 8)"
            fill="#eee"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_98"
        data-name="Mask Group 98"
        transform="translate(-8 -8)"
        clip-path="url(#clip-path)"
      >
        <G id="edit" transform="translate(7.283 7.438)">
          <Path
            id="Path_784"
            data-name="Path 784"
            d="M7.889,2.869H2.869A1.434,1.434,0,0,0,1.434,4.3v10.04a1.434,1.434,0,0,0,1.434,1.434h10.04a1.434,1.434,0,0,0,1.434-1.434V9.323"
            fill="none"
            stroke="#7ed957"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
          <Path
            id="Path_785"
            data-name="Path 785"
            d="M13.267,1.793a1.521,1.521,0,0,1,2.151,2.151L8.606,10.757l-2.869.717.717-2.869Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
        </G>
      </G>
    </Svg>
  );
};
export default EditSvg;
