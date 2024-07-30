import React from "react";
import { useContext, useState } from "react";
import { Center } from "@chakra-ui/react";
import { Events } from "../components/Eventlist";
import { EventContext } from "../context/EventProvider";
import { TextInput } from "../components/ui/TextInput";
import { useRevalidator } from "react-router-dom";
import { FilterCategory } from "../components/ui/FilterCatagory";

export const EventsPage = () => {
  const {
    events,
    setEvents,
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
  } = useContext(EventContext);

  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  // filter for category # kan vast makkelijker! Iemand?
  const [category2, setCategory2] = useState([]); // naam aanpassen!
  let categoryId = [];
  const categoryNameToID = category2.forEach((cat) => {
    const catfinder = categories.find((item) => item.name === cat);
    categoryId.push(catfinder.id);
  });

  let list = events;
  let count = 0;

  categoryId.map((x) => {
    if (count === 0) {
      list = [];
      count++;
      const test12 = events.filter((match) => {
        return match.categoryIds.some((item) => item === x);
      });
      test12.map((item) => {
        if (list.includes(item)) {
          return;
        } else {
          list.push(item);
        }
      });
    } else {
      const test12 = events.filter((match) => {
        return match.categoryIds.some((item) => item === x);
      });
      test12.map((item) => {
        if (list.includes(item)) {
          return;
        } else {
          list.push(item);
        }
      });
    }
    count++;
  });

  // end of filter category

  const matchedEvents = list.filter((match) => {
    return match.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <Center
      padding={8}
      minHeight="100vh"
      flexDir="column"
      bgColor="blackAlpha.100"
      gap={8}
    >
      <TextInput
        placeholder="search"
        changefn={handleChange}
        textAlign="center"
        w={["80%", "xl", "2xl"]}
      ></TextInput>
      <FilterCategory changefn={setCategory2}></FilterCategory>
      <Events eventList={matchedEvents} columns={[1, 2, 2, 3, 4]}></Events>
    </Center>
  );
};
