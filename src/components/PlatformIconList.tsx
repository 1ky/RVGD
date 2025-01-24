import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import Platform from "@/entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: any } = {
    pc: <FaWindows color="#718096" />,
    playstation: <FaPlaystation color="#718096" />,
    xbox: <FaXbox color="#718096" />,
    nintendo: <SiNintendo color="#718096" />,
    mac: <FaApple color="#718096" />,
    linux: <FaLinux color="#718096" />,
    android: <FaAndroid color="#718096" />,
    ios: <MdPhoneIphone color="#718096" />,
    web: <BsGlobe color="#718096" />,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <div key={platform.id}>{iconMap[platform.slug]}</div>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
