import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import { EventsCard } from "./Eventcard";
import { GridItem, Wrap } from "@chakra-ui/react";

export const Events = ({ ...props }) => {
  const { events } = useContext(EventContext);
  return (
    <>
      <Wrap spacing={8} justify="center" paddingBottom={8} {...props}>
        {events.map((item) => (
          <GridItem key={item.id}>
            <EventsCard event={item} key={item.id} />
          </GridItem>
        ))}
      </Wrap>
    </>
  );
};
