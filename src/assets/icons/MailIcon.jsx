import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MailIcon(props) {
  return (
    <Svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.21 5.42C15.6 16.06 8.4 16.05 2.79 5.42M1.99 7.39v10a4 4 0 004 4h12a4 4 0 004-4v-10a4 4 0 00-4-4h-12a4 4 0 00-4 4z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MailIcon
