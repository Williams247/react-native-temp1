import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  children: ReactNode;
  style?: Record<string, string | number>;
}

export function Card({ children, style }: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
  },
});
