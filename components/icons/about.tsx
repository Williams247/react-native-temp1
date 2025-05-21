import Svg, { Line, Rect } from "react-native-svg";
import { SvgIconProps } from "./types";

export function AboutIcon({
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
      <Rect x="5" y="2" width="14" height="20" rx="2" ry="2"></Rect>
      <Line x1="12" y1="18" x2="12.01" y2="18"></Line>
    </Svg>
  );
}
