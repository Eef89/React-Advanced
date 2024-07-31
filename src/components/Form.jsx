import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useToast,
  Stack,
  Input,
  InputGroup,
  Select,
  InputLeftElement,
  CheckboxGroup,
  Checkbox,
  InputLeftAddon,
} from "@chakra-ui/react";
import { AddIcon, Icon } from "@chakra-ui/icons";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiActivity } from "react-icons/fi";
import { MdOutlineDescription } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const PopUp = ({ ...props }) => {
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
    createUser,
  } = useContext(EventContext);

  const toast = useToast();

  const toast1 = () =>
    toast({
      title: "Event created.",
      description: "",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

  let categoryId = [""]; // gebruikt om catogorien om te zetten naar ID's

  // const categoryNameToID =

  category.forEach((cat) => {
    const catfinder = categories.find((item) => item.name === cat);
    categoryId.push(catfinder.id);
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const createdBy = Number(createdby);
    const categoryIds = categoryId.slice(1);

    if (title === "" || description === "" || location === "") {
      alert("You forgot some fields");

      return false;
    }
    if (image === "") {
      setImage(
        "https://i.pinimg.com/736x/3d/2f/af/3d2faf4e3188d34a9fcdc00df59e77b0.jpg"
      );
      alert("image is set to standard image");
    } else {
      {
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
      }
      toast1();
      onClose();
      setTitle("");
      setCreatedby("1");
      setImage("");
      setDescription("");
      setCategory([]);
      setLocation("");
      setStartTime(new Date());
      setEndTime(new Date());
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} {...props}>
        <AddIcon></AddIcon>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create event!</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiActivity} color="gray.300" />
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
                    <Icon as={MdOutlineDescription} color="gray.300" />
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
                <InputGroup zIndex="3">
                  <InputLeftAddon pointerEvents="none">
                    Starttime
                  </InputLeftAddon>
                  <DatePicker
                    showTimeSelect
                    showIcon
                    selected={startTime}
                    onChange={(startTime) => setStartTime(startTime)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  ></DatePicker>
                </InputGroup>
                <InputGroup zIndex="2">
                  <InputLeftAddon pointerEvents="none">Endtime</InputLeftAddon>
                  <DatePicker
                    showTimeSelect
                    showIcon
                    selected={endTime}
                    onChange={(endTime) => setEndTime(endTime)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  ></DatePicker>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaLocationDot} color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                </InputGroup>
                <Select onChange={(e) => setCreatedby(e.target.value)}>
                  <option disabled>--Select the writer--</option>
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

                <Button type="submit">Add event</Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
