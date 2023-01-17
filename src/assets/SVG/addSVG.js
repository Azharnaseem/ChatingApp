import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
const AddSVG = ({ color = "#aaa", width = 32, height = 32 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32">
      <G id="Group_486" data-name="Group 486" transform="translate(-15 -768)">
        <Circle
          id="Ellipse_41"
          data-name="Ellipse 41"
          cx="16"
          cy="16"
          r="16"
          transform="translate(15 768)"
          fill="#eee"
        />
        <Path
          id="Icon_ionic-ios-add"
          data-name="Icon ionic-ios-add"
          d="M23.969,15.969H17.961V9.961a1,1,0,0,0-1.992,0v6.008H9.961a1,1,0,0,0,0,1.992h6.008v6.008a1,1,0,1,0,1.992,0V17.961h6.008a1,1,0,0,0,0-1.992Z"
          transform="translate(14.035 767.035)"
          fill={color}
        />
      </G>
    </Svg>
  );
};
export default AddSVG;
