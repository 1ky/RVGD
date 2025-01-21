import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} asChild paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                rounded="md"
                objectFit="cover"
                src={getCroppedImage(genre.image_background)}
              />
              <Link
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
