import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { Events } from "../components/Eventlist";
import { PopUp } from "../components/Form";

export const EventsPage = () => {
  return (
    <Center minHeight="100vh" flexDir="column" bgColor="blackAlpha.100" gap={8}>
      <Heading marginTop={8}>List of events</Heading>

      <Events></Events>
      <PopUp></PopUp>
    </Center>
  );
};
