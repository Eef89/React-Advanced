import { Stack, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import { EventContext } from "../../context/EventProvider";

export const FilterCategory = ({ changefn }) => {
  const { categories } = useContext(EventContext);

  return (
    <>
      <CheckboxGroup onChange={changefn} defaultValue={""}>
        <Stack direction="row">
          <p>Category: </p>
          {categories.map((item) => (
            <Checkbox
              key={item.id}
              value={item.name} // item.id werkte niet....
            >
              {item.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </>
  );
};
