import { UseFormReturn } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label?: string;
  title: string;
  handler: UseFormReturn<any>;
  placeholder?: string;
  style?: Record<string, string | number>;
}

export function TextInputComponent(props: Props) {
  const {
    formState: { errors },
    setValue,
  } = props.handler;
  return (
    <View>
      {props?.label && <Text style={{ fontSize: 18 }}>{props.label}</Text>}
      <TextInput
        style={{ ...styles.input, ...props.style }}
        onChangeText={(text) => setValue(props.title, text)}
        placeholder={props.placeholder ?? ""}
      />
      {errors[props?.title] && (
        <Text>{errors[props.title]?.message as any}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
});
