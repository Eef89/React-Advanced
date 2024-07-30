import React from "react";
import { Link } from "react-router-dom";
// import { TextInput } from "./ui/TextInput";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
  Box,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { PopUp } from "./Form";
import { IoIosHome } from "react-icons/io";

export const Navigation = () => {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" padding={2}>
        <Box p="2">
          <Heading size="lg" paddingLeft={[2, 2, 2, 20]}>
            Event Creator
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup paddingRight={[2, 2, 2, 20]}>
          <Button as={Link} to="/">
            <Icon as={IoIosHome}></Icon>
          </Button>
          <PopUp></PopUp>
        </ButtonGroup>
      </Flex>
    </>
  );
};
