import React, { useEffect } from "react";
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
import { useLoaderData, useRevalidator, Link } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
// import { DelePost } from "../components/EditPost";

export const DeletePost = () => {
  let revalidator = useRevalidator();
  const { count, setCount } = useContext(EventContext);
  const { event } = useLoaderData();
  const eventid = event.id;

  const toast = useToast();

  const toast1 = () =>
    toast({
      title: "Event deleted!",
      description: "",
      status: "error",
      duration: 9000,
      isClosable: true,
    });

  const deletePost = async () => {
    await fetch(`http://localhost:3000/events/${eventid}`, {
      method: "DELETE",
    });
    setCount(count + 1);
    toast1();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Delete</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sure?</ModalHeader>
          <ModalBody>
            <Stack>
              <Button onClick={deletePost} as={Link} to="/">
                Yes
              </Button>
              <Button onClick={onClose}>No </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
