import { ReactNode } from "react";
import { View } from "react-native";

interface Props {
  children: ReactNode;
  style?: Record<string, string | number>;
}

export function Container({ children, style }: Props) {
  return (
    <View style={style ?? { paddingLeft: 16, paddingRight: 16 }}>
      {children}
    </View>
  );
}
