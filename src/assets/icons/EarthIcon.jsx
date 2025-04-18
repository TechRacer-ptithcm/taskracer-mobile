import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EarthIcon(props) {
  return (
    <Svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9 19.43v-2.678l1.62-1.62-2.917-1.668L7.6 12.21V13l-1.162.21-1.044-2.783A7.403 7.403 0 009.9 19.43zM15.6 5.78v5.67L13.752 9.6H11.3l-1.008 1.344.457.456H12.6v1.418l.721 1.082h2.396l3.048 2.54A7.401 7.401 0 0015.6 5.779zm0-1.303a8.6 8.6 0 11-.203-.076h.203v.076z"
        fill={props.color}
      />
    </Svg>
  )
}

export default EarthIcon
