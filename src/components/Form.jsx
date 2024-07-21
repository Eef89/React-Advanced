import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useContext } from "react";
import { EventContext } from "../context/EventProvider";

export const PopUp = () => {
  const { events, setEvents } = useContext(EventContext);
  const [name, setName] = useState("");

  const createUser = async (user) => {
    // No error handling, normally you would do that.
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    user.id = (await response.json()).id;
    setEvents(events.concat(user));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // An async function, but no need to wait for it.
    createUser({ name });

    // Empty the form fields.
    setName("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const toast = useToast();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required="required"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <button
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
                Add user
              </button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
