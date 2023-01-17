import React from "react";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Line,
  Path,
  Rect,
} from "react-native-svg";
const Delete = ({ color = "#fff", width = 24, height = 25 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_762"
            data-name="Rectangle 762"
            width="12"
            height="12"
            transform="translate(47 47)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
      <G id="Delete" transform="translate(-41 -41)">
        <Circle
          id="Ellipse_36"
          data-name="Ellipse 36"
          cx="12"
          cy="12"
          r="12"
          transform="translate(41 41)"
          fill="red"
        />
        <G
          id="Mask_Group_132"
          data-name="Mask Group 132"
          clip-path="url(#clip-path)"
        >
          <G id="x" transform="translate(43.289 43.289)">
            <Line
              id="Line_71"
              data-name="Line 71"
              x1="9.711"
              y2="9.711"
              transform="translate(4.856 4.856)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.619"
            />
            <Line
              id="Line_72"
              data-name="Line 72"
              x2="9.711"
              y2="9.711"
              transform="translate(4.856 4.856)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.619"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Delete;
