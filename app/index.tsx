import { Button } from "@/components/button";
import { TextInputComponent } from "@/components/text-input";
import { AuthWrapper } from "@/components/ui-wrapper/auth";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text } from "react-native";

export default function Login() {
  const router = useRouter();
  const handler = useForm({ mode: "onChange" });

  const login = useCallback(function () {
    router.push("/(tabs)");
  }, []);
  return (
    <AuthWrapper>
      <Text style={styles.login_text}>Log in</Text>
      <Text style={styles.login_small_text}>
        Welcome back! Please enter your details.
      </Text>

      <TextInputComponent
        title="email"
        placeholder="sample@gmail.com"
        handler={handler}
        style={styles.text_email_input}
      />

      <TextInputComponent
        title="password"
        placeholder="**********"
        handler={handler}
        style={styles.text_password_input}
        secureTextEntry={true}
      />

      <Button>
        <Text style={styles.button_text}>Login</Text>
      </Button>
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  login_text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  login_small_text: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  text_email_input: {
    width: "100%",
    marginBottom: 16,
  },

  text_password_input: {
    width: "100%",
    marginBottom: 16,
  },

  button_text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
