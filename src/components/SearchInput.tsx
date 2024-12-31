import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />} width="100%">
      <Input borderRadius={20} placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;
