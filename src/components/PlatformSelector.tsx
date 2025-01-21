import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { Button } from "./ui/button";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <MenuRoot positioning={{ placement: "right-start" }}>
      <MenuTrigger asChild>
        <Button variant="surface">
          {selectedPlatform?.name || "Platforms"} <IoChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent pos="absolute">
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
