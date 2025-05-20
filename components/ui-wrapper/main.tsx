import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe_area}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: 10,
  },
});
