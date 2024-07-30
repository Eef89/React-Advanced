import {
  Card,
  Heading,
  Stack,
  CardBody,
  Image,
  Flex,
  Divider,
  Center,
  Tag,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DateFormat } from "./ui/Dateformat";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
export const EventsCard = ({ event }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/event/${event.id}`, window.scrollTo({ top: 0 }));
  };

  return (
    <Card
      onClick={handleOnClick}
      // window.scrollTo({ top: 0 })
      variant="filled"
      maxW="sm"
      cursor="pointer"
      h="30em"
      _hover={{ transform: "scale(1.02)" }}
      bgColor="white"
    >
      <CardBody padding={0}>
        <Image
          objectFit="cover"
          h={64}
          w={800}
          src={event.image}
          borderTopRadius="md"
        />
        <Stack mt="6" spacing="2">
          <Heading size="lg" align="center">
            <Flex justify="center">{event.title}</Flex>
          </Heading>
          <Flex justify="center" color={"grey"}>
            {event.description}
          </Flex>
          {/* Toevoegen Categories */}
          <Flex justify="center">
            Start:
            <DateFormat datestring={event.startTime}></DateFormat>
          </Flex>
          <Flex justify="center">
            End:
            <DateFormat datestring={event.endTime}></DateFormat>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
