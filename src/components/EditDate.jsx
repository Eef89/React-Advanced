import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Stack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { EditIcon, Icon } from "@chakra-ui/icons";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const EditDate = ({ what, which, val, how }) => {
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
    what({ [which]: val });

    onClose();
    setTitle("");
    setCreatedby("1");
    setDescription("");
    setCategory([]);
    setLocation("");
    setStartTime(new Date());
    setEndTime(new Date());
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
                <InputGroup zIndex="3">
                  <InputLeftAddon pointerEvents="none">
                    Starttime
                  </InputLeftAddon>

                  <DatePicker
                    position="absolute"
                    showTimeSelect
                    showIcon
                    selected={val}
                    onChange={(val) => how(val)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  ></DatePicker>
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
