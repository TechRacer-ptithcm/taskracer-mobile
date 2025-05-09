import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const DownIcon = (props) => (
  <Svg
    viewBox="0 0 24.00 24.00"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M7 10L12 15L17 10"
        stroke={props.color}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default DownIcon;
