import Svg, { Path, Polygon } from "react-native-svg";
import { SvgIconProps } from "./types";

export function HomeIcon({
  size = 24,
  color = "black",
  strokeWidth = 2,
}: SvgIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></Path>
      <Polygon points="9 22 9 12 15 12 15 22"></Polygon>
    </Svg>
  );
}
