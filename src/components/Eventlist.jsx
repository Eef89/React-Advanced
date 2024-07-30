import { EventsCard } from "./Eventcard";
import { GridItem, Wrap } from "@chakra-ui/react";

export const Events = ({ eventList, ...props }) => {
  return (
    <>
      <Wrap spacing={8} justify="center" paddingBottom={8} {...props}>
        {eventList.map((item) => (
          <GridItem key={item.id}>
            <EventsCard event={item} key={item.id} />
          </GridItem>
        ))}
      </Wrap>
    </>
  );
};
