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
import { PhoneIcon, AddIcon, EditIcon, Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdAdfScanner } from "react-icons/md";

export const EditPost = ({ what, which, val, how }) => {
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
  } = useContext(EventContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.stopPropagation();
    // const createdBy = Number(createdby);

    if (val === "") {
      alert("You forgot some fields");

      return false;
    } else {
      what({ [which]: val });

      onClose();
      setTitle("");
      setCreatedby("");
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
      <Icon as={EditIcon} cursor="pointer" onClick={onOpen}>
        edit
      </Icon>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {which}</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder={which}
                    onChange={(e) => how(e.target.value)}
                    value={val}
                  />
                </InputGroup>
                <Button type="submit">Add event</Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
