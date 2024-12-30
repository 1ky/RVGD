import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { IoChevronDown } from "react-icons/io5";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot positioning={{ placement: "right-start" }}>
      <MenuTrigger asChild>
        <Button variant="outline">
          {selectedPlatform?.name || "Platforms"} <IoChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
