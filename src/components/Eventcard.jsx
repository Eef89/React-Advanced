import {
  Card,
  Heading,
  Stack,
  CardBody,
  Image,
  Flex,
  Divider,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const EventsCard = ({ event }) => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate(`/event/${event.id}`);

  return (
    <Card
      onClick={handleOnClick}
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
        <Stack mt="6" spacing="3">
          <Center height="20px">
            <Divider
              orientation="vertical"
              colorScheme="blue"
              variant="solid"
            />
          </Center>
          <Heading size="md" align="center">
            <Flex justify="center">{event.description}</Flex>
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};
