import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TaskIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 00-1-1H8a1 1 0 00-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z" fill={props.color}/>
      <Path d="M11 13.586l-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z" fill={props.color}/>
    </Svg>
  )
}

export default TaskIcon
