import { UseFormReturn } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label?: string;
  title: string;
  handler: UseFormReturn<any>;
  placeholder?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  style?: Record<string, string | number> | {} | undefined;
  textInputStyle?: Record<string, string | number> | {} | undefined;
  secureTextEntry?: boolean;
}

export function TextInputComponent(props: Props) {
  const {
    formState: { errors },
    setValue,
  } = props.handler;
  return (
    <View style={props.style ?? {}}>
      {props?.label && <Text style={styles.input_label}>{props.label}</Text>}
      <TextInput
        style={[styles.input, props.textInputStyle ?? {}]}
        onChangeText={(text) => setValue(props.title, text)}
        placeholder={props.placeholder ?? ""}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
      />
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
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 6,
  },
  input_error: {
    color: "red",
  },
});
