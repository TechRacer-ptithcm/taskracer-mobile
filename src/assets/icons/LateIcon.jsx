import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LateIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 5.5l2-2m16 2l-2-2m-10 6l6 6m0-6l-6 6m11-3a8 8 0 11-16 0 8 8 0 0116 0z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LateIcon
