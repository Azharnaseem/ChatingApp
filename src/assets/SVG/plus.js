import React from "react";
import Svg, { Circle, G, Path, Polygon } from "react-native-svg";
const Plus = ({ color = "#7ed957", width = 35, height = 43 }) => {
  return (
    <Svg
      height="512px"
      id="Layer_1"
      style="enable-background:new 0 0 512 512;"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G>
        <G>
          <G>
            <Path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z" />
          </G>
        </G>
        <G>
          <Polygon points="264.1,128 247.3,128 247.3,247.9 128,247.9 128,264.7 247.3,264.7 247.3,384 264.1,384 264.1,264.7 384,264.7     384,247.9 264.1,247.9   " />
        </G>
      </G>
    </Svg>
  );
};
export default Plus;