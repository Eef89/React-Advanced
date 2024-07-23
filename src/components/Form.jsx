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
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const PopUp = () => {
  const { events, setEvents, users, categories } = useContext(EventContext);
  const [title, setTitle] = useState("");
  const [createdby, setCreatedby] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  let categoryId = [""]; // gebruikt om catogorien om te zetten naar ID's

  const createUser = async (event) => {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    event.id = (await response.json()).id;
    setEvents(events.concat(event));
  };

  const categoryNameToID = category.forEach((cat) => {
    const catfinder = categories.find((item) => item.name === cat);
    categoryId.push(catfinder.id);
    console.log(categoryId);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const categoryIds = categoryId.slice(1);
    const createdBy = Number(createdby);
    createUser({
      title,
      createdBy,
      description,
      categoryIds,
      image,
      location,
      startTime,
      endTime,
    });
    setTitle("");
    setCreatedby("");
    setDescription("");
    setCategory([]);
    setLocation("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  return (
    <>
      <Button onClick={onOpen}>Add event</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon>HTTPS://</InputLeftAddon>
                  <Input
                    type="text"
                    placeholder="img (link)"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                </InputGroup>
                {/* <InputGroup> */}
                <Select onChange={(e) => setCreatedby(e.target.value)}>
                  <option disabled required>
                    --Select the writer--
                  </option>
                  {users.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Select>
                <CheckboxGroup onChange={setCategory} defaultValue={""}>
                  <Stack direction="row">
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
                <InputGroup>
                  <InputLeftAddon pointerEvents="none">
                    Starttime
                  </InputLeftAddon>
                  <DatePicker
                    showTimeSelect
                    showIcon
                    selected={startTime}
                    onChange={(startTime) => setStartTime(startTime)}
                    dateFormat="MMMM d, yyyy h:mmaa"
                  ></DatePicker>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon pointerEvents="none">Endtime</InputLeftAddon>
                  <DatePicker
                    showTimeSelect
                    showIcon
                    selected={endTime}
                    onChange={(endTime) => setEndTime(endTime)}
                    dateFormat="MMMM d, yyyy h:mmaa"
                  ></DatePicker>
                </InputGroup>
                <Button
                  type="submit"
                  onClick={() => {
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                    onClose();
                  }}
                >
                  Add event
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
