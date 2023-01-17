import React from "react";
import Svg, { Path, Polygon } from "react-native-svg";
const CalFar = ({ color = "#000", width = 26, height = 26 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16.933 16.933"
    >
      <Path
        fill={"#000"}
        d="M4.786.236c-.72 0-1.08.868-.55 1.355l6.836 6.858-6.837 6.836c-.846.762.36 1.969 1.101 1.122L12.766 9c.296-.296.296-.804 0-1.122L5.335.47a.769.769 0 0 0-.55-.233z"
      />
    </Svg>
  );
};
export default CalFar;
