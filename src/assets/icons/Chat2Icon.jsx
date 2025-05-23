import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Chat2Icon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 10.5h8M8 14h5.5M17 3.338A9.954 9.954 0 0012 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Chat2Icon
