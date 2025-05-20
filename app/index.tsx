import { Button } from "@/components/button";
import { TextInputComponent } from "@/components/text-input";
import { AuthWrapper } from "@/components/ui-wrapper/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Provide a valid email" }),
  password: z.string(),
});

export default function Login() {
  const [checked, setChecked] = useState(true);
  const router = useRouter();
  const handler = useForm({ mode: "onChange", resolver: zodResolver(schema) });

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
        label="Email"
        autoCapitalize="none"
        handler={handler}
        style={styles.text_email_input}
      />

      <TextInputComponent
        title="password"
        placeholder="**********"
        label="Password"
        handler={handler}
        style={styles.text_password_input}
        secureTextEntry={checked}
      />

      <View style={styles.show_hide_password}>
        <Checkbox
          style={styles.checkbox}
          value={!checked}
          color={!checked ? "red" : undefined}
          onValueChange={() => setChecked(!checked)}
        />
        <Text>{checked ? "Show Password" : "Hide Password"}</Text>
      </View>

      <Button onPress={handler.handleSubmit(login)}>
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

  show_hide_password: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 80,
    gap: 5,
  },

  checkbox: {
    borderRadius: 7,
  },

  button_text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
