import React from "react";
import { Heading } from "@chakra-ui/react";
// import { useContext } from "react";
// import { EventContext } from "../context/EventProvider";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const users = await fetch("http://localhost:3000/users");
  const events = await fetch(`http://localhost:3000/events/${params.eventId}`);

  return {
    users: await users.json(),
    event: await events.json(),
  };
};

export const EventPage = () => {
  // const { events } = useContext(EventContext);
  const { event } = useLoaderData();
  return <Heading>{event.id}</Heading>;
};
