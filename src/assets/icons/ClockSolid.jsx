import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ClockSolid(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.25a.75.75 0 01.75.75v3.69l2.28 2.28a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 01-.22-.53V8a.75.75 0 01.75-.75z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ClockSolid
