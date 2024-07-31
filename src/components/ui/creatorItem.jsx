import { Avatar, Text, Flex, Box } from "@chakra-ui/react";

export const Creator = ({ item }) => {
  return (
    <Box>
      <Flex justify="center">
        <Avatar size="xl" name="Prosper Otemuyiwa" src={item.image} />
      </Flex>
      <Flex justify="center">
        <Text>{item.name}</Text>
      </Flex>
    </Box>
  );
};
