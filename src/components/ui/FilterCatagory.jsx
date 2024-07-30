import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useToast,
  FormControl,
  Stack,
  Input,
  FormLabel,
  InputGroup,
  InputAddon,
  Select,
  InputLeftElement,
  Radio,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
  Box,
  InputLeftAddon,
  Toast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { EventContext } from "../../context/EventProvider";

export const FilterCategory = ({ changefn }) => {
  const {
    users,
    setEvents,
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
