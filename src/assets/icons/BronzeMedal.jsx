

import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function BronzeMedal(props) {
  return (
    <Svg
      viewBox="0 0 120 120"
      id="Layer_1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M79.7 45.6L60 55.5 40.3 45.6 15.9 94.3 31.1 92.8 38.9 105.9 60 63.9 81.1 105.9 88.9 92.8 104.1 94.3z"
        fill="#c4c4c4"
      />
      <Circle cx={60} cy={46.4} r={32.2} fill="#e5b97f" />
      <Circle cx={60} cy={46.4} r={25.3} fill="#c19a6b" />
      <Path
        d="M61.2 31.2l4.2 8.4c.2.4.6.7 1 .8l9.3 1.4c1.1.2 1.6 1.5.8 2.3l-6.7 6.6c-.3.3-.5.8-.4 1.2l1.6 9.3c.2 1.1-1 2-2 1.4l-8.3-4.4c-.4-.2-.9-.2-1.3 0L51 62.6c-1 .5-2.2-.3-2-1.4l1.6-9.3c.1-.4-.1-.9-.4-1.2l-6.7-6.6c-.8-.8-.4-2.2.8-2.3l9.3-1.4c.4-.1.8-.3 1-.8l4.2-8.4c.5-1 1.9-1 2.4 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BronzeMedal

