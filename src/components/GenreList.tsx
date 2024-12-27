import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} asChild paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              rounded="md"
              src={getCroppedImage(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
