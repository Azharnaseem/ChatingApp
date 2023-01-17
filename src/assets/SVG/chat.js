import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Chat = ({ color = "#fff", width = 16, height = 16 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_535"
            data-name="Rectangle 535"
            width="16"
            height="16"
            transform="translate(331 62)"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_54"
        data-name="Mask Group 54"
        transform="translate(-331 -62)"
        clip-path="url(#clip-path)"
      >
        <Path
          id="message-circle"
          d="M16.8,9.2a6.7,6.7,0,0,1-.72,3.04A6.8,6.8,0,0,1,10,16a6.7,6.7,0,0,1-3.04-.72L2.4,16.8l1.52-4.56A6.7,6.7,0,0,1,3.2,9.2,6.8,6.8,0,0,1,6.96,3.12,6.7,6.7,0,0,1,10,2.4h.4a6.784,6.784,0,0,1,6.4,6.4Z"
          transform="translate(329.4 60.4)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </G>
    </Svg>
  );
};
export default Chat;
