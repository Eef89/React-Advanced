import React from "react";
import { Link } from "react-router-dom";
// import { TextInput } from "./ui/TextInput";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { PopUp } from "./Form";

export const Navigation = () => {
  return (
    <Flex h={10} padding={4}>
      <Breadcrumb separator="-" display={["none", "flex"]}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="event/1">Add</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Link to="event/1">Home</Link>
        </BreadcrumbItem>
        <PopUp></PopUp>
      </Breadcrumb>
      <Breadcrumb separator="-" display={["flex", "none"]}>
        <BreadcrumbItem>
          <PhoneIcon></PhoneIcon>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

// Toevoegen searchbalk!
