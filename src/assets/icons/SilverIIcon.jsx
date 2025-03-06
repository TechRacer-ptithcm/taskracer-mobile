import * as React from "react"
import Svg, {
  Path,
  Circle,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"

function SilverI(props) {
  return (
    <Svg
      viewBox="-3.5 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.738 18.844l3.213 1.855L6.426 32l-1.873-4.177 5.185-8.98z"
        fill="#418ED6"
      />
      <Path
        d="M9.738 18.844l-3.213-1.856L0 28.29l4.553-.467 5.185-8.98zM14.322 18.844l-3.213 1.855L17.634 32l1.872-4.177-5.184-8.98z"
        fill="#2B63A6"
      />
      <Path
        d="M14.322 18.844l3.213-1.856L24.06 28.29l-4.554-.467-5.184-8.98z"
        fill="#418ED6"
      />
      <Circle cx={12.0246} cy={11.0622} r={11.0622} fill="#E3E3E3" />
      <Circle cx={12.0247} cy={11.0621} r={8.63501} fill="#595959" />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={19}
        height={18}
      >
        <Circle cx={12.4857} cy={11.984} r={8.65511} fill="#C28B37" />
      </Mask>
      <G mask="url(#a)">
        <Circle
          cx={12.0247}
          cy={11.0622}
          r={8.65511}
          fill="url(#paint0_linear_103_1231)"
        />
      </G>
      <Path
        d="M12.071 5.041l1.867 3.734 3.734.467-2.564 2.875.697 4.126-3.734-1.867-3.734 1.867.703-4.126-2.57-2.875 3.734-.467 1.867-3.734z"
        fill="url(#paint1_linear_103_1231)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_103_1231"
          x1={12.0247}
          y1={2.4071}
          x2={12.0247}
          y2={19.7173}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9CA1A3" />
          <Stop offset={1} stopColor="#9CA1A3" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_103_1231"
          x1={12.0713}
          y1={5.04102}
          x2={12.0713}
          y2={16.2432}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F1F5F5" />
          <Stop offset={0.0001} stopColor="#fff" />
          <Stop offset={1} stopColor="#F1F5F5" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SilverI
