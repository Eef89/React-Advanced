import React from "react";
import { Link } from "react-router-dom";
// import { TextInput } from "./ui/TextInput";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { PopUp } from "./Form";

export const Navigation = () => {
  return (
    <Breadcrumb separator="-">
      <BreadcrumbItem>
        <Link to="event/1">Home</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem>
      <PopUp></PopUp>
    </Breadcrumb>
  );
};

// Toevoegen searchbalk!
