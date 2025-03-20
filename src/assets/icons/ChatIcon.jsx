import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={3}
        cy={3}
        r={3}
        transform="matrix(-1 0 0 1 22 2)"
        stroke={props.color}
        strokeWidth={1.5}
      />
      <Path
        d="M14 2.2a10.046 10.046 0 00-7 1.138M21.8 10c.131.646.2 1.315.2 2 0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 00-1.149-.133l-2.226.596a1.3 1.3 0 01-1.591-1.592l.595-2.226a1.633 1.633 0 00-.134-1.148A9.96 9.96 0 012 12c0-1.821.487-3.53 1.338-5"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
