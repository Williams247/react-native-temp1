import { Button } from "@/components/button";
import { MovieCard } from "@/components/card/movie-card";
import { Container } from "@/components/container";
import { TextInputComponent } from "@/components/text-input";
import { Wrapper } from "@/components/ui-wrapper/main";
import { movieList } from "@/constants/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { z } from "zod";

const schema = z.object({
  image: z.string(),
  title: z.string(),
  description: z.string(),
});

type MovieTypes = z.infer<typeof schema>;

export default function HomeScreen() {
  const [movies, setMovies] = useState(movieList);
  const [open, setOpen] = useState(false);

  const handler = useForm({ mode: "onChange" });

  const modalHandler = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const searchTitle = handler.watch("movie") ?? "";

  const addMovie = useCallback(function (movie: MovieTypes) {
    console.log(movie);
    setMovies(movies.concat({ id: String(Math.random() * 1000), ...movie }));
    setOpen(false);
  }, []);

  const filteredMovies = useMemo(() => {
    if (!searchTitle) return movies;
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTitle?.toLowerCase());
    });
  }, [movies, searchTitle]);

  return (
    <>
      <Wrapper>
        <Container>
          <View style={styles.top_section}>
            <Text style={styles.top_section_text}>Movies</Text>
            <Pressable
              style={styles.top_section_button}
              onPress={() => setOpen(true)}
            >
              <Text>Add movie +</Text>
            </Pressable>
          </View>
          <TextInputComponent
            title="movie"
            placeholder="Search Movie..."
            handler={handler}
            style={styles.text_input}
          />
          <FlatList
            style={styles.flat_list}
            data={filteredMovies.reverse()}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <Text style={{ textAlign: "center" }}>No Movies!!!</Text>
            }
          />
        </Container>
      </Wrapper>
      <Modal
        visible={open}
        animationType="slide"
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <Wrapper>
          <Container>
            <View style={styles.modal_top_section_control}>
              <Pressable onPress={() => setOpen(false)}>
                <Text style={styles.close_modal}>&times;</Text>
              </Pressable>
            </View>
            <Text style={styles.modal_header}>Add a movie</Text>
            <View style={styles.modal_input_container}>
              <TextInputComponent
                title="image"
                placeholder="https://www.imageplace.com/coolpic.png"
                label="Image Url"
                handler={modalHandler}
              />
              <TextInputComponent
                title="title"
                placeholder="Spider man"
                label="Movie Title"
                handler={modalHandler}
                style={styles.modal_spacing_top}
              />
              <TextInputComponent
                title="description"
                placeholder="Spider man is a super hero that likes to save the day..."
                label="Movie Description"
                handler={modalHandler}
                multiline={true}
                style={styles.modal_spacing_top}
              />
              <Button
                style={styles.create_modal_movie_button}
                onPress={modalHandler.handleSubmit(addMovie)}
              >
                <Text style={styles.create_modal_movie_button_text}>
                  Add Movie
                </Text>
              </Button>
            </View>
          </Container>
        </Wrapper>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  top_section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30
  },
  text_input: {
    marginTop: 18,
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
    marginBottom: 120,
  },
  modal: {
    padding: 20,
  },
  close_modal: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 30
  },
  modal_header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  modal_input_container: {
    marginTop: 30,
  },
  modal_top_section_control: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modal_spacing_top: {
    marginTop: 15,
  },
  create_modal_movie_button: {
    marginTop: 16,
  },
  create_modal_movie_button_text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
