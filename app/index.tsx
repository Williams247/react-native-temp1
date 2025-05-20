import { Wrapper } from "@/components/ui-wrapper";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <Wrapper>
      <View>
        <Text>Login page</Text>
        <Pressable onPress={() => router.push("/(tabs)")}>
          <Text>Login now</Text>
        </Pressable>
      </View>
    </Wrapper>
  );
}
