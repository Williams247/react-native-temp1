import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export function AuthWrapper({ children }: { children: ReactNode }) {
  return (
    <View style={styles.auth_wrapper}>
      <View style={styles.auth_child_wrapper}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  auth_wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  auth_child_wrapper: {
    width: "100%",
  },
});
