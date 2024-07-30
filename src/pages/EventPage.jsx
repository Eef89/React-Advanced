import React, { useEffect } from "react";
import {
  Heading,
  Button,
  Center,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Divider,
  Wrap,
  Text,
} from "@chakra-ui/react";
import { useLoaderData, useRevalidator, Link } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import { EditPost } from "../components/EditPost";
import { EditDate } from "../components/EditDate";
import { DeletePost } from "../components/DeletePost.JSX";
import { DateFormat } from "../components/ui/Dateformat";

export const loader = async ({ params }) => {
  // const users = await fetch("http://localhost:3000/users");
  const events = await fetch(`http://localhost:3000/events/${params.eventId}`);

  return {
    // users: await users.json(),
    event: await events.json(),
  };
};

export const EventPage = () => {
  let revalidator = useRevalidator();
  const {
    users,
    categories,
    title,
    setTitle,
    createdby,
    setCreatedby,
    description,
    setDescription,
    category,
    setCategory,
    location,
    setLocation,
    image,
    setImage,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    count,
    setCount,
  } = useContext(EventContext);
  // const { events } = useContext(EventContext);
  const { event } = useLoaderData();
  const eventid = event.id;
  const editPost = async (event) => {
    await fetch(`http://localhost:3000/events/${eventid}`, {
      method: "PATCH",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    revalidator.revalidate();
    setCount(count + 1); // EventProvider infite loop problem solution
  };

  // const deletePost = async (event) => {
  //   await fetch(`http://localhost:3000/events/${eventid}`, {
  //     method: "DELETE",
  //   });
  //   revalidator.revalidate();
  //   setCount(count + 1); // EventProvider infite loop problem solution
  // };

  return (
    <Center
      flexDir={"column"}
      bgColor="blackAlpha.500"
      gap={4}
      minHeight="100vh"
    >
      <Box
        bgColor="white"
        minHeight="100vh"
        borderRadius="sm"
        w={["100%", "2xl", "3xl", "3xl", "3xl"]}
      >
        <Image
          src={event.image}
          w={["100%", "2xl", "3xl", "3xl", "3xl"]}
          h="25em"
          borderRadius={"sm"}
          marginBottom="1em"
          objectFit="cover"
        ></Image>
        <SimpleGrid margin="2em" spacing="8em" columns={[1, 1, 2, 2, 2, 2]}>
          {/* Start of left box */}
          <Box>
            <Wrap paddingBottom={4}>
              <Heading fontSize={"2xl"}>{event.title} </Heading>
              <EditPost
                what={editPost}
                which={"title"}
                val={title}
                how={setTitle}
              ></EditPost>
            </Wrap>
            <Wrap paddingBottom={4}>
              <Text width="max">{event.description} </Text>
              <EditPost
                what={editPost}
                which={"description"}
                val={description}
                how={setDescription}
              ></EditPost>
            </Wrap>
            <Wrap paddingBottom={4}>
              <Text width="max">{event.location} </Text>
              <EditPost
                what={editPost}
                which={"location"}
                val={location}
                how={setLocation}
              ></EditPost>
            </Wrap>
            <Wrap>
              <Flex justify="center">
                Start:
                <DateFormat datestring={event.startTime}></DateFormat>
              </Flex>
              <EditDate
                what={editPost}
                which={"startTime"}
                val={startTime}
                how={setStartTime}
              ></EditDate>
              <Flex justify="center">
                End:
                <DateFormat datestring={event.endTime}></DateFormat>
              </Flex>
              <EditDate
                what={editPost}
                which={"endTime"}
                val={endTime}
                how={setEndTime}
              ></EditDate>
            </Wrap>
          </Box>
          {/* Start of right box */}
          <Box>
            <Text
              marginBottom="5px"
              fontSize="0.9em"
              color="grey"
              marginTop={[-100, -100, 0]}
            >
              Created by:
            </Text>

            <Text h="1em"></Text>
            <Text marginBottom="5px" fontSize="0.9em" color="grey">
              Diet:
            </Text>
            <Text h="1em"></Text>
            <Text fontSize="xl">Total Nutrients:</Text>
            <Text h="1em"></Text>
          </Box>
        </SimpleGrid>
        <Flex justify="center">
          <DeletePost></DeletePost>
        </Flex>
      </Box>
    </Center>
  );
};
