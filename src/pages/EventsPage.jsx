import React from "react";
import { Center } from "@chakra-ui/react";
import { Events } from "../components/Eventlist";

export const EventsPage = () => {
  return (
    <Center
      padding={8}
      minHeight="100vh"
      flexDir="column"
      bgColor="blackAlpha.100"
      gap={8}
    >
      <Events columns={[1, 2, 2, 3, 4]}></Events>
    </Center>
  );
};
