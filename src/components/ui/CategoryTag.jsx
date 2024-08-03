import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ ...props }) => {
  return <CTag p={2} size="sm" variant="solid" {...props}></CTag>;
};
