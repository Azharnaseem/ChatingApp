import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
const Pin = ({ color = "#7ed957", width = 35, height = 43 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 35 43">
      <G id="map-pin" transform="translate(-0.5 0.833)">
        <Path
          id="Path_712"
          data-name="Path 712"
          d="M34,17.03c0,12.727-16,23.636-16,23.636S2,29.758,2,17.03A16.185,16.185,0,0,1,18,.667,16.185,16.185,0,0,1,34,17.03Z"
          transform="translate(0)"
          fill={color}
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <Circle
          id="Ellipse_16"
          data-name="Ellipse 16"
          cx="5"
          cy="5"
          r="5"
          transform="translate(13 11.962)"
          fill="#fff"
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </G>
    </Svg>
  );
};
export default Pin;
