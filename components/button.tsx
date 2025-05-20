import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
  onPress?: () => void;
  style?: Record<string, string | number>;
}

export function Button({ children, onPress, style }: Props) {
  return (
    <Pressable
      style={{ ...styles.button, ...(styles ?? {}) }}
      onPress={() => onPress && onPress()}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "auto",
  },
});
