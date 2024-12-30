import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { Button } from "./ui/button";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot positioning={{ placement: "right-start" }}>
      <MenuTrigger asChild>
        <Button variant="outline">
          Order by: {currentSortOrder?.label || "Relevance"} <IoChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width={10}>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
