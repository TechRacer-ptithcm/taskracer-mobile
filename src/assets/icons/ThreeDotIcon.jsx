import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function ThreeDotIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M17 12a1 1 0 102 0 1 1 0 00-2 0zM11 12a1 1 0 102 0 1 1 0 00-2 0zM5 12a1 1 0 102 0 1 1 0 00-2 0z" />
      </G>
    </Svg>
  )
}

export default ThreeDotIcon
