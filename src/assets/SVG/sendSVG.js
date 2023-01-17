import React from "react";
import Svg, { Path } from "react-native-svg";
const SendSVG = ({ color = "#7ed957", width = 20, height = 20.002 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20.002">
      <Path
        id="Icon_ionic-ios-send"
        data-name="Icon ionic-ios-send"
        d="M23.872,4.548,4.751,12.883a.438.438,0,0,0,.016.8L9.939,16.6a.834.834,0,0,0,.953-.094l10.2-8.794c.068-.057.229-.167.292-.1s-.036.224-.094.292l-8.824,9.94a.831.831,0,0,0-.083,1l3.381,5.423a.44.44,0,0,0,.792-.01L24.461,5.126A.438.438,0,0,0,23.872,4.548Z"
        transform="translate(-4.503 -4.503)"
        fill={color}
      />
    </Svg>
  );
};
export default SendSVG;
