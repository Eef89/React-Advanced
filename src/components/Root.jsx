import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";
import { EventContextProvider } from "../context/EventProvider";

export const Root = () => {
  return (
    <EventContextProvider>
      <Box>
        <Navigation />
        <Outlet />
      </Box>
    </EventContextProvider>
  );
};
