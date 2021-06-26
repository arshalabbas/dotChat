import React from "react";
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import colors from "../../global/colors";

const { width } = Dimensions.get('window');

export default function Wave() {
  return (
    <Svg height="100%" width={width} viewBox="0 0 1435 320">
      <Path
        fill={colors.primary}
        d="M0,96L60,122.7C120,149,240,203,360,224C480,245,600,235,720,202.7C840,171,960,117,1080,80C1200,43,1320,21,1380,10.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></Path>
    </Svg>
  );
}
