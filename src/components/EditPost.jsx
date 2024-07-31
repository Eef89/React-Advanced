import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Stack,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { EditIcon, Icon } from "@chakra-ui/icons";

import { useContext } from "react";
import { EventContext } from "../context/EventProvider";

export const EditPost = ({ what, which, val, how }) => {
  const {
    setTitle,
    setCreatedby,
    setDescription,
    setCategory,
    setLocation,
    setStartTime,
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
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
