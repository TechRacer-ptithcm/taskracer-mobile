import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ClockIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 7v5H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ClockIcon
