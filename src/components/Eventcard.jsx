import { Card, Heading, Stack, CardBody, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DateFormat } from "./ui/Dateformat";
import { Tag } from "./ui/CategoryTag";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
export const EventsCard = ({ event }) => {
  const { categories } = useContext(EventContext);

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/event/${event.id}`, window.scrollTo({ top: 0 }));
  };

  const newCategoryList = [];
  event.categoryIds.map((item) => {
    const match = categories.find((cat) => cat.id === item);
    newCategoryList.push(match);
  });

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
          <Flex gap={2} top={2} justify="center">
            {newCategoryList.map((item) => (
              <Tag key={item.id} variant="solid" bgColor="green.500">
                {item.name}
              </Tag>
            ))}
          </Flex>
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
