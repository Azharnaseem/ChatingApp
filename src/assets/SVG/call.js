import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Call = ({ color = "#fff", width = 16, height = 16 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_535"
            data-name="Rectangle 535"
            width={width}
            height={height}
            transform="translate(331 62)"
            fill="#eee"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_124"
        data-name="Mask Group 124"
        transform="translate(-331 -62)"
        clip-path="url(#clip-path)"
      >
        <Path
          id="phone-call"
          d="M10.454,3.473A3.473,3.473,0,0,1,13.2,6.217M10.454.695A6.252,6.252,0,0,1,15.976,6.21m-.695,5.543v2.084a1.389,1.389,0,0,1-1.514,1.389,13.746,13.746,0,0,1-5.995-2.132A13.545,13.545,0,0,1,3.605,8.926,13.746,13.746,0,0,1,1.473,2.9,1.389,1.389,0,0,1,2.855,1.389H4.939A1.389,1.389,0,0,1,6.328,2.584a8.919,8.919,0,0,0,.486,1.952A1.389,1.389,0,0,1,6.5,6l-.882.882a11.114,11.114,0,0,0,4.168,4.168l.882-.882a1.389,1.389,0,0,1,1.466-.313,8.919,8.919,0,0,0,1.952.486,1.389,1.389,0,0,1,1.195,1.41Z"
          transform="translate(330.242 62.073)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.389"
        />
      </G>
    </Svg>
  );
};
export default Call;
