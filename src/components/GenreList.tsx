import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
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
