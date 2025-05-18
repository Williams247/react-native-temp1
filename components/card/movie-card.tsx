import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "./index";

interface Props {
  id: string;
  title: string;
  image: string;
  description: string;
}

export function MovieCard({ id, title, image, description }: Props) {
  return (
    <Pressable style={styles.card_container}>
      <Card
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card_container: {
    marginBottom: 30,
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
