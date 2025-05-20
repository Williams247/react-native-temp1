import { MovieCard } from "@/components/card/movie-card";
import { Container } from "@/components/container";
import { TextInputComponent } from "@/components/text-input";
import { Wrapper } from "@/components/ui-wrapper/main";
import { movieList } from "@/constants/data";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [movies] = useState(movieList);
  const handler = useForm({ mode: "onChange" });

  const searchTitle = handler.watch("movie") ?? "";

  const filteredMovies = useMemo(() => {
    if (!searchTitle) return movies;
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTitle?.toLowerCase());
    });
  }, [movies, searchTitle]);

  return (
    <Wrapper>
      <Container>
        <View style={styles.top_section}>
          <Text style={styles.top_section_text}>Movies</Text>
          <Pressable style={styles.top_section_button}>
            <Text>Add movie +</Text>
          </Pressable>
        </View>
        <TextInputComponent
          title="movie"
          placeholder="Search Movie..."
          handler={handler}
          style={{ marginTop: 18 }}
        />
        <FlatList
          style={styles.flat_list}
          data={filteredMovies}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center" }}>No Movies!!!</Text>
          }
        />
      </Container>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  top_section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  top_section_text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  top_section_button: {
    marginTop: 7,
  },
  flat_list: {
    marginTop: 30,
    marginBottom: 70,
  },
});
