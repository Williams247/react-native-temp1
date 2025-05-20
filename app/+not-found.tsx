import { Wrapper } from "@/components/ui-wrapper/main";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <Wrapper>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Link href="../">Go to Home</Link>
        <Text>ERROR 404</Text>
      </View>
    </Wrapper>
  );
}
