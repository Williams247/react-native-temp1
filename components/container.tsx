import { ReactNode } from "react";
import { View } from "react-native";

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return <View style={{ paddingHorizontal: 18 }}>{children}</View>;
}
