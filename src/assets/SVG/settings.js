import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Settings = ({ color = "#fff", width = 16, height = 16 }) => {
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
            transform="translate(9 7)"
            fill="#eee"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_131"
        data-name="Mask Group 131"
        transform="translate(-9 -7)"
        clip-path="url(#clip-path)"
      >
        <G id="settings" transform="translate(9 7)">
          <Circle
            id="Ellipse_34"
            data-name="Ellipse 34"
            cx="2"
            cy="2"
            r="2"
            transform="translate(6 6)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.333"
          />
          <Path
            id="Path_826"
            data-name="Path 826"
            d="M12.933,10a1.1,1.1,0,0,0,.22,1.213l.04.04a1.334,1.334,0,1,1-1.887,1.887l-.04-.04a1.109,1.109,0,0,0-1.88.787V14A1.333,1.333,0,1,1,6.72,14v-.06A1.1,1.1,0,0,0,6,12.933a1.1,1.1,0,0,0-1.213.22l-.04.04A1.334,1.334,0,1,1,2.86,11.307l.04-.04a1.109,1.109,0,0,0-.787-1.88H2A1.333,1.333,0,0,1,2,6.72h.06A1.1,1.1,0,0,0,3.067,6a1.1,1.1,0,0,0-.22-1.213l-.04-.04A1.334,1.334,0,1,1,4.693,2.86l.04.04a1.1,1.1,0,0,0,1.213.22H6a1.1,1.1,0,0,0,.667-1.007V2A1.333,1.333,0,0,1,9.333,2v.06a1.109,1.109,0,0,0,1.88.787l.04-.04A1.334,1.334,0,1,1,13.14,4.693l-.04.04a1.1,1.1,0,0,0-.22,1.213V6a1.1,1.1,0,0,0,1.007.667H14a1.333,1.333,0,1,1,0,2.667h-.06A1.1,1.1,0,0,0,12.933,10Z"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.333"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Settings;
