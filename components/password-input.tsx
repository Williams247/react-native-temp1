import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label?: string;
  title: string;
  handler: UseFormReturn<any>;
  placeholder?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  style?: Record<string, string | number> | {} | undefined;
  textInputStyle?: Record<string, string | number> | {} | undefined;
}

export function PasswordInputComponent(props: Props) {
  const [show, setShow] = useState(false);
  const {
    formState: { errors },
    setValue,
  } = props.handler;
  return (
    <View style={props.style ?? {}}>
      {props?.label && <Text style={styles.input_label}>{props.label}</Text>}
      <View style={styles.input_wrapper}>
        <TextInput
          style={styles.input ?? {}}
          onChangeText={(text) => setValue(props.title, text)}
          placeholder={props.placeholder ?? ""}
          autoCapitalize={props.autoCapitalize}
          secureTextEntry={!show}
        />
        <Pressable onPress={() => setShow((prevState) => !prevState)}>
          {!show ? <Text>Show</Text> : <Text>Hide</Text>}
        </Pressable>
      </View>

      {errors[props.title]?.message && (
        <Text style={styles.input_error}>
          {String(errors[props.title]?.message ?? "")}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input_label: {
    fontSize: 15,
    marginBottom: 8,
  },
  input_wrapper: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 6,
  },
  input: {
    width: "90%",
  },
  input_error: {
    color: "red",
  },
});
