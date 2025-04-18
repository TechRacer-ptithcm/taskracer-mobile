import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CommunityIcon(props) {
  return (
    <Svg
      fill={props.color}
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M64 42c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24zm0 40c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM64 100.8c-14.9 0-29.2 6.2-39.4 17.1l-2.7 2.9 5.8 5.5 2.7-2.9c8.8-9.4 20.7-14.6 33.6-14.6s24.8 5.2 33.6 14.6l2.7 2.9 5.8-5.5-2.7-2.9c-10.2-10.8-24.5-17.1-39.4-17.1zM97 47.9v8c9.4 0 18.1 3.8 24.6 10.7l5.8-5.5c-7.8-8.4-18.9-13.2-30.4-13.2zM116.1 20C116.1 9.5 107.5.9 97 .9S77.9 9.5 77.9 20 86.5 39.1 97 39.1s19.1-8.6 19.1-19.1zm-30.2 0c0-6.1 5-11.1 11.1-11.1s11.1 5 11.1 11.1-5 11.1-11.1 11.1-11.1-5-11.1-11.1zM31 47.9C19.5 47.9 8.4 52.7.6 61.1l5.8 5.5c6.4-6.9 15.2-10.7 24.6-10.7v-8zM50.1 20C50.1 9.5 41.5.9 31 .9S11.9 9.5 11.9 20 20.5 39.1 31 39.1 50.1 30.5 50.1 20zM31 31.1c-6.1 0-11.1-5-11.1-11.1S24.9 8.9 31 8.9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z" />
    </Svg>
  )
}

export default CommunityIcon
