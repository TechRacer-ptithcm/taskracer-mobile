import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function FireIcon(props) {
  return (
    <Svg
      viewBox="-33 0 255 255"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="linear-gradient-1"
          gradientUnits="userSpaceOnUse"
          x1={94.141}
          y1={255}
          x2={94.141}
          y2={0.188}
        >
          <Stop offset={0} stopColor="#ff4c0d" />
          <Stop offset={1} stopColor="#fc9502" />
        </LinearGradient>
      </Defs>
      <G id="fire">
        <Path
          d="M187.899 164.809c-2.096 50.059-43.325 90.003-93.899 90.003-51.915 0-94-43.5-94-94 0-6.75-.121-20.24 10-43 6.057-13.621 9.856-22.178 12-30 1.178-4.299 3.469-11.129 10 0 3.851 6.562 4 16 4 16s14.328-10.995 24-32c14.179-30.793 2.866-49.2-1-62-1.338-4.428-2.178-12.386 7-9 9.352 3.451 34.076 20.758 47 39 18.445 26.035 25 51 25 51s5.906-7.33 8-15c2.365-8.661 2.4-17.239 9.999-7.999 7.227 8.787 17.96 25.3 24.001 40.999 10.969 28.509 7.899 55.997 7.899 55.997z"
          id="path-1"
          fillRule="evenodd"
          fill="url(#linear-gradient-1)"
        />
        <Path
          d="M94 254.812c-35.899 0-65-29.101-65-65 0-21.661 8.729-34.812 26.896-52.646 11.632-11.419 22.519-25.444 27.146-34.994.911-1.88 2.984-11.677 10.977-.206 4.193 6.016 10.766 16.715 14.981 25.846 7.266 15.743 9 31 9 31s7.121-4.196 12-15c1.573-3.482 4.753-16.664 13.643-3.484C150.166 150 159.127 167.39 159 189.812c0 35.899-29.102 65-65 65z"
          id="path-2"
          fillRule="evenodd"
          fill="#fc9502"
        />
        <Path
          d="M95 183.812c9.25 0 9.25 17.129 21 40 7.824 15.229-3.879 31-21 31s-26-13.879-26-31c0-17.12 16.75-40 26-40z"
          id="path-3"
          fillRule="evenodd"
          fill="#fce202"
        />
      </G>
    </Svg>
  )
}

export default FireIcon
