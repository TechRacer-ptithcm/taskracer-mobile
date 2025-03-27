import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CalendarColourIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0H24V24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3v1.347c-.649.193-1.224.494-1.692.961-.566.567-.887 1.29-1.07 2.112C2.059 8.23 2 9.196 2 10.312v5.376c0 1.116.059 2.082.239 2.892.182.822.503 1.545 1.07 2.112.566.566 1.289.887 2.11 1.07.811.18 1.777.238 2.893.238h7.376c1.116 0 2.082-.058 2.892-.239.822-.182 1.545-.503 2.112-1.07.566-.566.887-1.289 1.07-2.11.18-.811.238-1.777.238-2.893v-5.376c0-1.116-.058-2.082-.239-2.892-.182-.822-.503-1.545-1.07-2.112-.467-.467-1.042-.768-1.691-.96V3a1 1 0 10-2 0v1.035A22.01 22.01 0 0015.688 4H8.312c-.463 0-.9.01-1.312.035V3a1 1 0 00-2 0zm1 6a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default CalendarColourIcon;
