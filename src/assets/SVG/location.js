import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Location = ({
  color = "#000",
  width = 14,
  height = 14,
  strokeWidth = "1.167",
}) => {
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
        id="Mask_Group_121"
        data-name="Mask Group 121"
        transform="translate(-475 -3394)"
        clip-path="url(#clip-path)"
      >
        <G id="map-pin" transform="translate(475 3394)">
          <Path
            id="Path_820"
            data-name="Path 820"
            d="M12.25,5.833C12.25,9.917,7,13.417,7,13.417s-5.25-3.5-5.25-7.583a5.25,5.25,0,1,1,10.5,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Circle
            id="Ellipse_32"
            data-name="Ellipse 32"
            cx="1.75"
            cy="1.75"
            r="1.75"
            transform="translate(5.25 4.083)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Location;
