import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { Button } from "./ui/button";

const SortSelector = () => {
  return (
    <MenuRoot positioning={{ placement: "right-start" }}>
      <MenuTrigger asChild>
        <Button variant="outline">
          Order by: Relevance <IoChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width={10}>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date-added">Date Added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release-date">Release Date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="average-rating">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
