import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BellIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 5c1.433 0 2.807.506 3.82 1.406 1.012.9 1.58 2.121 1.58 3.394 0 1.97.446 3.444 1.023 4.528.738 1.385 1.106 2.078 1.086 2.236-.024.185-.055.236-.206.343-.13.093-.778.093-2.072.093H6.771c-1.295 0-1.942 0-2.072-.093-.152-.107-.182-.158-.206-.343-.02-.158.348-.85 1.086-2.236C6.156 13.244 6.6 11.769 6.6 9.8c0-1.273.569-2.494 1.582-3.394C9.195 5.506 10.569 5 12 5zm0 0V3M9.356 20a3.991 3.991 0 002.65 1.002A3.992 3.992 0 0014.655 20"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BellIcon
