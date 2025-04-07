import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
      viewBox="0 0 32 32"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.17 10.23a33.37 33.37 0 00-3.05 3.13c-.51.62-1.28 1.3-1.21 2.17s.81 1.24 1.35 1.76a16.3 16.3 0 012.57 3.17c.86 1.36 3 .11 2.16-1.26a21.06 21.06 0 00-1.82-2.48 16.16 16.16 0 00-1.17-1.2c-.22-.21-.86-1.14-.68-.49l-.13 1a17.85 17.85 0 013.72-4c1.19-1.08-.58-2.85-1.77-1.76z" />
      <Path d="M9.4 17a109.13 109.13 0 0012.53-.1c1.59-.11 1.61-2.61 0-2.5a109.13 109.13 0 01-12.53.1c-1.61-.07-1.6 2.43 0 2.5z" />
    </Svg>
  )
}

export default BackIcon
