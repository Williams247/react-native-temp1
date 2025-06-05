import { AllowedDevices } from "@/hooks/media-queries/type";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "./index";

interface Props {
  data: {
    id: string;
    title: string;
    image: string;
    description: string;
  };
  size: AllowedDevices;
}

export function MovieCard(props: Props) {
  return (
    <Pressable
      style={{
        marginBottom: 30,
        width: props.size === "tab" ? "48%" : "100%",
        marginHorizontal: props.size === "tab" ? 10 : 0,
      }}
    >
      <Card style={styles.card}>
        <Image source={{ uri: props.data.image }} style={styles.image} />
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{props.data.title}</Text>
          <Text style={styles.description}>{props.data.description}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
});
